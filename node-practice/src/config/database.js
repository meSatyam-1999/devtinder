const mongoose = require("mongoose");

const connectMongoDB = async () =>{
    await mongoose.connect(
        "mongodb+srv://nodepractice1:nodepractice1@cluster0.d90ga.mongodb.net/nodepractice1"
    )
}

module.exports = {
    connectMongoDB
}