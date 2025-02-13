const express = require("express");
const { userAuth } = require("../middlewares/auth");
const ConnectionRequest = require("../models/connectionRequest");
const User = require("../models/user");
const userRouter = express.Router();
const USER_SAFE_DATA = " firstName lastName photoUrl age gender about skills ";

userRouter.get("/user/requests/received", userAuth, async (req,res) =>{
    try{
        const loggedInUser = req.user;

        const connectionRequest = await ConnectionRequest.find({
            toUserId: loggedInUser._id,
            status: "interested",
        }).populate("fromUserId", USER_SAFE_DATA);

        res.json({
            message: "Data Fetched Successfully",
            data: connectionRequest,
        })
    }
    catch(err){
        res.status(404).send("OOPS...Some errors occurs in connection request receive api...kindly check" + err);
    }
})

userRouter.get("/user/connections",userAuth, async (req,res)=>{
    try{
        const loggedInUser = req.user;  //get logged in user

        // To check from & toUser accepted request
        const connectionRequest = await ConnectionRequest.find({
            $or:[
                { toUserId: loggedInUser._id, status: "accepted" },
                { fromUserId: loggedInUser._id, status: "accepted" },
            ],
        }).populate("fromUserId", USER_SAFE_DATA).populate("toUserId", USER_SAFE_DATA);


        const data = connectionRequest.map((row) => {
            if(row.fromUserId._id.toString() === loggedInUser._id.toString()){
                return row.toUserId;
            }
            return row.fromUserId;
        }); //Filterization

        res.json({data});
    }
    catch(err){
        res.status(404).send("OOPS...Some error occurs in connection list api due to: " + err);
    }
})

userRouter.get("/feed", userAuth, async (req,res)=>{
    try{
        const loggedInUser = req.user;

        //Adding paginaation
        const page = parseInt(req.query.page) || 1; //req.query.page returns string & we have to convert into integer for this we use parseInt()
        let limit = parseInt(req.query.limit) || 10;
        limit = limit > 50 ? 50 : limit;
        
        
        const skip = (page-1) * limit;

        //find all the requests that user received or send
        const connectionRequest = await ConnectionRequest.find({
            $or: [
                { fromUserId: loggedInUser._id },
                { toUserId: loggedInUser._id }
            ]
        }).select("fromUserId toUserId");

        // To get people whom we wnt to hide in the feed
        const hideUsersFromFeed = new Set();
        connectionRequest.forEach((req)=>{
            hideUsersFromFeed.add(req.fromUserId.toString());
            hideUsersFromFeed.add(req.toUserId.toString());
        });


        //Show the remaining people that left
        const users = await User.find({
            $and: [
                { _id: {$nin: Array.from(hideUsersFromFeed)} },
                { _id: {$ne: loggedInUser._id} },
            ],
        })
        .select(USER_SAFE_DATA)
        .skip(skip) //using for pagination
        .limit(limit) //using for pagination
        res.send(users);
    }
    catch(err){
        res.status(404).send("OOPS.....WE found some errors in feed api: " + err);
    }
})

module.exports = userRouter;