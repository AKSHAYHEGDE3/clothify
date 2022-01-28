const router = require("express").Router();
const Order = require("../models/Order")
const verify = require("../verifyToken")


router.post("/addOrder", verify, async (req, res) => {
  if(req.user.id === req.body.userId){
    const newOrder = new Order(req.body);
    try {
      const savedOrder = await newOrder.save();
      res.status(200).json(savedOrder);
    } catch (err) {
      res.status(500).json(err);
    }
  } else{
    res.status(403).json("forbidden")
  }
  
});


module.exports = router;
