const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    productId:{type:String},
    size:{type:String},
    quantity:{type:Number},
    total:{type:Number}
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", CartSchema);