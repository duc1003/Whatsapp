const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

app.get("/api/home", (req, res) => {
    res.json({message : "Welcome to WhatsApp"})
});

const db = require('./config/db');


//connect db

db.connect();

const server =  app.listen(process.env.PORT, (req, res) => {
    console.log(`http://localhost:${process.env.PORT}`);
});  