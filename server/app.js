const cors = require("cors")
const connection = require("./Config/db")
const express = require("express")


const Products = require("./Models/productSchema")

const DefaultData = require("./defaultdata")

require("dotenv").config()
const app = express()
const router= require("./Routes/router");

app.use(express.json());
app.use(cors());
app.use(router);



app.get("/",(req,res)=>{
    res.send("Welcome to Homepage")
})















//Connection 

app.listen(process.env.PORT || 8080, async(req,res)=>{
    try {
        await connection;
    console.log("connection successfull");
    } catch (error) {
        console.log("connection to database failed")
        console.log(error)
    }
    console.log(`listening on port ${process.env.PORT}`)
})

// DefaultData()