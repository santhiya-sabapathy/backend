require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const productRoute = require("./routes/productroute");
const app = express();

app.use(cors());

app.use(express.json());

app.use(
    "/uploads",
    express.static(
        path.join(__dirname, "uploads")
    )
);

mongoose.connect(
    process.env.MONGO_URL
);


app.use("/products", productRoute);


app.listen(
    process.env.PORT
);