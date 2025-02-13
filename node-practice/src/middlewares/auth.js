const jwt = require("jsonwebtoken");
const User = require("../models/user");


const userAuth = async(req,res,next) => {
    try{
        //get token from cookies
        const {token} = req.cookies;
        if(!token){
           return res.status(401).send("Please login first..!!!")
        }

        const decodedObj = await jwt.verify(token,"DEV@Tinder$4838");

        const {_id} = decodedObj;
        const user = await User.findById(_id);

        if(!user){
            throw new Error("User not found");
        }
        //check if the user existed or not
        req.user = user;
        next();
    }
    catch(err){
        res.status(404).send("OOPS...Some errors found in userAuth : " + err);
    }
}

module.exports = {
    userAuth,
}