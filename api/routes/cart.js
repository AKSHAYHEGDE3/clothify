const express = require("express");
const router = express.Router();
const Cart = require("../models/Cart")
const verify = require("../verifyToken")

router.post('/addToCart',verify,async(req,res)=>{
    if(req.user.id === req.body.userId){
        const newItem = new Cart(req.body);
        try{
            const saveItem = await newItem.save();
            res.status(200).send(saveItem)
        }catch(err){
            res.status(500).send(err)
        }
    } else{
        res.status(403).json("forbidden")
    }
})

router.delete('/deleteItem/:id',verify,async(req,res)=>{
        try{
             await Cart.findByIdAndDelete(req.params.id)
            res.status(200).send("Item removed from cart successfully")
        }catch(err){
            res.status(500).send(err)
        }
})

router.delete('/clearCart/:id',verify,async(req,res)=>{
    if(req.user.id === req.params.id){
        try{
            await Cart.deleteMany({userId:req.params.id})
            res.status(200).send("deleted")
        }catch(err){
            res.status(500).send(err)
        }
    } else{
        res.status(403).json("forbidden")
    }
})

router.get("/getCartItems/:id",verify,async(req,res)=>{
    if(req.user.id === req.params.id){
       const cartItems = await Cart.find({userId:req.params.id})
       res.status(200).send(cartItems)
    } else{
        res.status(403).json("forbidden")
    }
})


module.exports = router