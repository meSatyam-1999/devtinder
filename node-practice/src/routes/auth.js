const {validateSignUpData} = require("../utils/validation");
const bcrypt = require("bcrypt");
const express = require("express");


const User = require("../models/user")
const authRouter = express.Router();

// app.use(express.json());
//Dev Tinder /signup api
authRouter.post("/signup", async (req,res)=>{
    
    try{
        //step:1 - Validation of data
        validateSignUpData(req);

        const {firstName, lastName, emailId, password} = req.body;

        //step:2 - Encrypt the password
        const passwordHash = await bcrypt.hash(password,10);

        //step:3 - Store the user into database
        const user = new User({
            firstName,
            lastName,
            emailId,
            password: passwordHash,
        })
        await user.save();
    res.send("User added Successfully");
    }
    catch(err){
        res.status(500).send("Got some error while adding a user: " + err.message);
    }
})

//DevTinder /login api
authRouter.post("/login",async (req,res)=>{
    try{
        const {emailId, password} = req.body;

        const user = await User.findOne({emailId: emailId});
        if(!user){
            throw new Error("Invalid Credentials in email");
        }

        const isPasswordValid = await user.validatePassword(password);
        if(isPasswordValid){
            //step:1 - Create a JWT Token
            const token = await user.getJWT();
            
            //step:2 - Add the token to the cookie & send the response back to user

            //-----create a cookie
            res.cookie("token",token, {
                expires: new Date(Date.now() + 8 * 3600000),
            });
           res.send(user);
        }
        else{
            throw new Error("Invalid Credentials in password");
        }
    }
    catch(err){
        res.status(404).send(err.message);
    }
})

authRouter.post("/logout", async(req,res)=>{
    res.cookie("token",null,{
        expires: new Date(Date.now()),
    })
    res.send("Logout Successfully..!!!");
})


module.exports = authRouter;