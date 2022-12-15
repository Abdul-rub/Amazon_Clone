const express = require("express")
const router = new express.Router()

const Products = require("../Models/productSchema")

router.get("/products", async(req,res)=>{
    try {
        const productsdata = await Products.find()
        // console.log(productsdata)
        res.status(201).json(productsdata)
    } catch (error) {
        console.log("error" + error.message)
    }
})



module.exports = router;