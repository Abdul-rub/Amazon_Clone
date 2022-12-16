const express = require("express")
const router = new express.Router()

const Products = require("../Models/productSchema")


//GET PRODUCTS
router.get("/products", async(req,res)=>{
    try {
        const productsdata = await Products.find()
        // console.log(productsdata)
        res.status(201).json(productsdata)
    } catch (error) {
        console.log("error" + error.message)
    }
})

//GET SINGLE PRODUCTS BY ID
router.get("/products/:id", async(req,res)=>{
    try {
        const {id} =req.params;
        const singleData = await Products.findOne({id:id})

        // console.log(singleData)
        res.status(201).json(singleData)
    } catch (error) {
        res.status(400).json(singleData)
        console.log("error" + error.message)
    }
})



module.exports = router;