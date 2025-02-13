const express = require("express");
const requestRouter = express.Router();
const {userAuth} = require("../middlewares/auth");
const ConnectionRequest = require("../models/connectionRequest");
const User = require("../models/user");


requestRouter.post("/request/send/:status/:toUserId",userAuth, async (req,res)=>{
    //write the logic send connection request
    try{
        const fromUserId = req.user._id;
        const toUserId = req.params.toUserId;
        const status = req.params.status;

        const allowedStatus = ["ignored","interested"];
        if(!allowedStatus){
            return res.status(400).json({message: "invalid status type: " + status});
        }

        //if a user send a coonection request is not come from our database
        const toUser = await User.findById(toUserId);
        if(!toUser){
            return res.status(404).json({message: "User not Found"});
        }


        const existingConnectionRequest = await ConnectionRequest.findOne({
            $or: [
                {fromUserId,toUserId},
                {fromUserId:toUserId,toUserId:fromUserId},
            ],
        });


        if(existingConnectionRequest){
            return res.status({message: "Connection Request Already Exist..!!"});
        }

        const connectionRequest = new ConnectionRequest({
            fromUserId,
            toUserId,
            status,
        });

        const data = await connectionRequest.save();

        res.json({
            message: req.user.firstName + " is " + status + " to " + toUser.firstName,
            data,
        });
    }
    catch(err){
        res.status(404).send("OOPS...Some errors found in send connection request api : " + err);
    }
})

requestRouter.post("/request/review/:status/:requestId", userAuth,async (req,res) => {
    try{
        const loggedInUser = req.user;
        const {status,requestId} = req.params;
//put our reviews status accepted/rejected in Postman Api url
        const allowedStatus = ["accepted","rejected"];
        if(!allowedStatus.includes(status)){
            return res.status(400).json({message: "status not allowed"});
        }
// we check who can accept our connection request
            const connectionRequest = await ConnectionRequest.findOne({
                _id: requestId,
                toUserId: loggedInUser.id,
                status: "interested",
            });
            if(!connectionRequest){
                return res.status(400).json({
                    message: "Connection Request Not Found"
                });
            }

            connectionRequest.status = status;

            const data = await connectionRequest.save();

            res.json({message: "Connection request" + status.data});

    }
    catch(err){
        res.status(404).send("OOPS....some errors occurs in connection review api: " + err)
    }
})

module.exports = requestRouter;