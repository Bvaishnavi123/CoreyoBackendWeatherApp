const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(express.json())
require("dotenv").config();
const port = process.env.PORT;
const bodyParser = require("body-parser");
const moment = require("moment");
const {login,logout} = require('./src/controllers/auth.controller')
const {register}= require("./src/controllers/auth.controller");
const authenticate = require("./src/middleware/authentication");
app.locals.moment = moment;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use("/news", require("./src/newsApp/news"));
app.use("/weather", require("./src/weatherApp/weather"));
app.use("/user",require("./src/controllers/user.controller"));
app.post("/register",register);
app.post("/login",authenticate,login);
app.post("/logout",authenticate,logout);




mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('start',port);
    app.listen(port);
  })


