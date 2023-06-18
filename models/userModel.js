const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true , "Please add your username"]
    },
    email: {
        type: String,
        required: [true , "Please add an email address"],
        unique: [true]
    },
    password: {
        type: String,
        required: [true , "Please add a password"]
    }
},{
    timestamps: true
});

module.exports = mongoose.model("Users",userSchema);