const mongoose = require('mongoose');
const jwt = require('jsonwebtoken ');
const joi = require('joi');
const passwordComplexity = require('joi-password-complexity');

const userSchema = new mongoose.Schema({
    firstName:{type:String, require: true},
    lastName:{type:String, require: true},
    password:{type:String, require: true},
});

userSchema.methods.generateAuthToToken = function (){
    const token = jwt.sign({_id: this_id}, process.env.JWTPRIVATEKEY, {expiresIn:"7d"})
    return token 
};


const User = mongoose.model("user", userSchema);

const validate =(data)=>{
    const schema = joi.object({
        firstName:joi.string().required().label('Firstname'),
        lastName:joi.string().required().label('Lastname'),
        email:joi.string().required().label('Email'),
        password:joi.passwordComplexity().required().label('Password'),
    });
    return schema.validate(data)
};


module.exports ={User,validate}