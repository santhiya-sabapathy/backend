const mongoose = require("mongoose");

const Userschema = new mongoose.Schema({

    name: String,
    Email: String,
    Password: String

});


module.exports = mongoose.model("User", Userschema);