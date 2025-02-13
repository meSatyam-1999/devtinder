const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        maxLength: 10,
    },
    lastName: {
        type: String,
        required: true,
        maxLength: 10,
    },
    emailId: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        // validate(value){
        //     if(!validator.isEmail(value)){
        //         throw new Error("Invalid email address: " + value);
        //     }
        // }
    },
    password: {
        type: String,
        required: true,
        minLength: 8,
        // validate(value){
        //     if(!validator.isStrongPassword(value)){
        //         throw new Error("SORRY..!!Enter a strong password: "+ value);
        //     }
        // }
    },
    age: {
        type: Number,
        min: 18,
    },
    gender: {
        type: String,
        // validate(value){
        //     if(!["male","female","others"].includes(value)){
        //         throw new Error("Gender data is not valid..!!!")
        //     }
        // }
    },
    about: {
        type: String,
        default: "Hii I'm a software developer in your heart."
    },
skills: {
    type: [String],
},
photoUrl: {
    type: String,
    default: "https://images.pexels.com/photos/1162983/pexels-photo-1162983.jpeg?auto=compress&cs=tinysrgb&w=600",
    // validate(value){
    //     if(!validator.isURL(value)){
    //         throw new error("Invalid photo url: " + value);
    //     }
    // }
}
        
}, {
    timestamps: true,
})
//finding a user by his/her name
userSchema.index({firstName:1,lastName:1});

//Best Practices to create JWT Token
userSchema.methods.getJWT = async function(){
    const user = this;

    const token = await jwt.sign({_id:user._id},"DEV@Tinder$4838",{
        expiresIn: "7d",
    });
    return token;
};

// Best Practices method to validate the password

userSchema.methods.validatePassword = async function(passwordInputByUser){
    const user = this;
    const passwordHash = user.password;

    const isPasswordValid = await bcrypt.compare(
        passwordInputByUser,
        passwordHash,
    );
    return isPasswordValid;
};

const User = mongoose.model("user",userSchema);
module.exports = User;