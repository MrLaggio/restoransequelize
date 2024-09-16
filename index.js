import express from "express";
import "./models/index.js"

const app = express()
const port = process.env.PORT 

app.listen(port, () => {
    console.log("LET ME COOK")
})