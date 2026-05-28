const mongoose = require("mongoose");

const schema = new mongoose.Schema({

    name: String,
    price: Number,
    image: String

});


module.exports = mongoose.model("Product", schema);