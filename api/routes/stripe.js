const express = require("express");
const router = express.Router();
const verify = require("../verifyToken");
const stripe = require("stripe")(process.env.STRIPE_KEY);

router.post('/payment',(req,res)=>{
    console.log(req.body)
    stripe.charges.create({
        source:req.body.token,
        amount:req.body.amount,
        description: "purchased this product",
        currency:"inr",
    },
    (stripeErr,stripeRes)=>{
        if(stripeErr){ 
            console.log(stripeErr)
            res.status(500).json(stripeErr)
        } else{
            res.status(200).send(stripeRes)
        }
    }
    )
})

module.exports = router;