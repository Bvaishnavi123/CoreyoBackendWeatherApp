const User = require("../model/user.model");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
require("dotenv").config();

const generateToken = (user) => {
  return jwt.sign({ user }, process.env.SECRET_KEY);
};

const register = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });

    if (user) {
      return res.status(400).send({ message: "Email already exists" });
    }

    user = await User.create(req.body);

    const token = generateToken(user);
    return res.status(200).send({ user, token });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(400).send("Wrong Email or Password");
    }

    const match = user.checkPassword(req.body.password);

    if (!match) {
      return res.status(400).send({ message: "Wrong Email or Password" });
    }

    // const token = generateToken(user);
    
    return res.status(200).send({ user});
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};
const logout = async(req, res) => {
  try {
    req.user.token = "";
    await req.user.save()
    res.send("logout");
} catch (error) {
    res.status(500).send()
}
}

module.exports = { register, login,logout};
