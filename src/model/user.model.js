const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require('validator')

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim : true },
    email: { type: String, required: true, trim: true,
      validate(value){
          if(!validator.isEmail(value)){
              throw new Error('Email is invalid!')
          }
      }},
    password: { type: String, required: true , trim:true,
      minlength: 7,
      validate(value){
          if(validator.isEmpty(value)){
              throw new Error('Please enter your password!')
          }else if(validator.equals(value.toLowerCase(),"password")){
              throw new Error('Password is invalid!')
          }else if(validator.contains(value.toLowerCase(), "password")){
              throw new Error('Password should not contain password!')
          }
      }},
    phone: { type: String, required: false ,trim:true,minlength: 10},
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

userSchema.pre("save", function (next) {
  const hash = bcrypt.hashSync(this.password, 8);
  this.password = hash;
  return next();
});

userSchema.methods.checkPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model("user", userSchema);

module.exports = User;
