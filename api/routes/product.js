const express = require("express");
const router = express.Router();
const Product = require("../models/Product")
const Review = require("../models/Review")
const verify = require("../verifyToken")

// ADD PRODUCT

router.post("/addProduct",verify,async(req,res)=>{
    // console.log(req.user)
    if (req.user.isAdmin){
        const newProduct = new Product(req.body);
        try{
            const savedProduct = await newProduct.save();
            res.status(200).send(savedProduct)
        } catch(err) {
            res.status(500).send(err);
        }
    } else{
        res.status(403).send("you are not authorized");
    }
    
})

//DELETE PRODUCT

router.delete("/deleteProduct/:id",verify,async(req,res)=>{
    if (req.user.isAdmin) {
        try {
            const deleteProduct = await Product.findByIdAndDelete(req.params.id)
            res.status(200).send("product deletd successfully")
        } catch (err) {
            res.status(500).json(err)
        }

    } else {
        res.status(403).json("You are not authorized");
    }
})

//  UPDATE PRODUCT

router.put("/updateProduct/:id",verify,async (req,res)=>{
    if(req.user.isAdmin){
        try{
            const updatedProduct = await Product.findByIdAndUpdate(
                req.params.id,
                { $set: req.body },
                { new: true }
            );
            res.status(200).send(updatedProduct);
        } catch(err){
            res.status(500).json(err)
        }    
    } else {
        res.status(403).json("you are not authorized")
    }
})


// GET ALL PRODUCTS

router.get("/getAllProducts",async(req,res)=>{
    try{
        const products = await Product.find();
        res.status(200).send(products)
    } catch(err){
        res.status(500).json(err)
    }
})

//GET SINGLE PRODUCT

router.get("/getProduct/:id",async(req,res)=>{
   try{
      const product = await Product.findById(req.params.id)
      res.status(200).send(product)
   } catch(err){
        res.status(500).json(err)
}
})

//REVIEWS

router.post('/addReview',async (req,res)=>{
    console.log(req.body)
    const newReview = new Review(req.body)
    try{
        const savedReview = await newReview.save()   
        await Product.findByIdAndUpdate(req.body.productId,{$push : {'review' : savedReview}} ,{new: true,useFindAndModify: false});
        res.status(200).send(savedReview)
    } catch(err){
        res.status(500).send(err)
    }
})

router.get('/getReviews/:id',async (req,res)=>{
    // console.log(req.params.id)
    try{
        const product = await Product.findById(req.params.id);
        const reviews = product.comments;
        res.status(200).send(reviews)
    } catch(err){
        res.status(500).send(err)
    }
})

module.exports = router

