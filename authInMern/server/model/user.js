const mongoose = require('mongoose');
const jwt = require('jsonwebtoken ')

const userSchema = new mongoose.Schema({
    firstName:{type:String, require: true},
    lastName:{type:String, require: true},
    password:{type:String, require: true},
});

userSchema.methods.generateAuthToToken = function (){
    const token =jwt.sign({id: this_id}, process.env.jwt)
}