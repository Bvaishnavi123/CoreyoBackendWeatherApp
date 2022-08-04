const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;
const bodyParser = require("body-parser");
const moment = require("moment");
app.locals.moment = moment;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", require("./newsApp/news"));
app.use("/", require("./weatherApp/weather"));

app.listen(port, () => console.log("started"));
