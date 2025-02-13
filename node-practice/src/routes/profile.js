const express = require("express");
const profileRouter = express.Router();
const {userAuth} = require("../middlewares/auth");
const { validateEditProfileData } = require("../utils/validation");


profileRouter.get("/profile/view",userAuth,async (req,res)=>{
    try{
           const user = req.user;
           
           res.send(user);
    }
    catch(err){
        res.status(404).send("OOPS...Something wrong in Profile api: "+ err);
    }
})

profileRouter.patch("/profile/edit", userAuth, async (req,res) => {
    try{
        if(!validateEditProfileData(req)){
            throw new Error("Invalid Edit Request");
        }

        const loggedInUser = req.user;

        Object.keys(req.body).forEach((key)=> (loggedInUser[key] = req.body[key]));
        //logic for saving data in database after edit
        await loggedInUser.save();
        //we want to show what we change that upadated show in POSTMAN body
        res.json({
            message: `${loggedInUser.firstName}, your profile was successfully updated`,
            data: loggedInUser,
        });
    }
    catch(err){
        res.status(404).send("OOPS...some errors occurs in profile edit api: " + err)
    }
})

module.exports = profileRouter;