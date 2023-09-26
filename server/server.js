const express = require("express");
const app = express();
const PORT = 8080;

app.get("/api/home", (req, res) => {
    res.json({message : "Welcome to WhatsApp"})
})

app.listen(PORT, (req, res) => {
    console.log(`http://localhost:${PORT}`);
})