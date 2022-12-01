require("dotenv").config();
const { config } = require("dotenv");
const express = require('express');
const app = express();

const PORT = process.env.PORT || 4321;

app.get('/', (req, res) => {
    res.send(`hello world I am listening to port ${PORT}`);
})

app.get("/dburl", (req, res) => {
    res.send(`My connection string is: ${process.env.DATABASE_URL}`)
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})
