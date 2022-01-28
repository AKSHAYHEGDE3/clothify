const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema(
    {
        productId:{type:String,required:true},
        senderName:{type:String,required:true},
        text:{type:String,required:true},

    },
    {timestamps:true}
);

module.exports = mongoose.model("Review",ReviewSchema);