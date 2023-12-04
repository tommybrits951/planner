const express = require("express");
const cors = require("cors");
require("dotenv").config()

const port = process.env.NODE_PORT
const app = express()

app.use(cors())
app.use(express.json())

app.listen(port, () => {
    console.log(`Server Running on Port ${port}`)
})