const express = require("express");
const { connectMongoDB } = require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");



// const User = require("./models/user")

const app = express();


//middleware import for use

//to make api dynamic
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

//import all routes send corresponding data when a request comes
const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const requestRouter = require("./routes/request");
const userRouter = require("./routes/user");

app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", requestRouter);
app.use("/", userRouter);



// search user by email id Api
// app.get("/searchuserbyemail",async (req,res)=>{
//     const userEmail = req.body.emailId;

//     try{
//         const users = await User.find({emailId:userEmail});

//         if(users.length === 0){
//             res.status(404).send("User not found");
//         }
//         else{
//             res.send(users);
//         }
//     }
//     catch(err){
//         res.status(500).send("Oops ....there are some issue in your search user by email api: " + err);
//     }
// })

// //Api for to see all users
// app.get("/home",async (req,res) => {
//     try{
//         const users = await User.find({});
//         res.send(users);
//     }
//     catch(err){
//         res.status(404).send("Something went wrong in Api: " + err);
//     }
// })

// //Api for delete a user
// app.delete("/userdelete",async (req,res)=>{
    
//     const userId = req.body.userId
//     try{

//         const user = await User.findByIdAndDelete(userId);
//         res.send("User delete Successfully....!!!!")
//     }
//     catch(err){
//         res.status(500).send("OOPS...we found some error in delete Api kindly check: "+ err);
//     }
// })

// //update user api

// app.patch("/userupdate/:userId",async (req,res)=>{
//     const userId = req.params?.userId;
//     const data = req.body;
//     try{
// //for limitations to user what they can update and what can't(Restrict to change email, first name , last name)
//         const ALLOWED_UPDATES = ["photoUrl","about","gender","age","skills"];

//         const isUpdateAllowed = Object.keys(data).every((k)=>ALLOWED_UPDATES.includes(k));
//         if(!isUpdateAllowed){
//             throw new Error("Update not allowed");
//         }
//         //skills validation for user can't add more than 10 skills
//         if(data?.skills.length > 10){
//             throw new Error("Skills can't be more than 10");
//         }


//        await User.findByIdAndUpdate(userId,data,{runValidators: true});
//        res.send("User Updated Successfully");
//     }
//     catch(err){
//         res.status(500).send("OOPS....!!! we found some error in patch api: " + err)
//     }
// })




// app.use("/",(err,req,res)=>{
//     if(err){
//         res.status(404).send("OOPS...kindly contact the server owner for this: ",err);
//     }
// })


//mongoDB Connection with express server
connectMongoDB()
.then(()=>{
    console.log("MongoDB is successfully connected to express server");

    app.listen(6969,()=>{
        console.log("Server started on port no. - 6969");
    })

})

.catch((err)=>{
    console.error("Database Cannot be connected");
})


