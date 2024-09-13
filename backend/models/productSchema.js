const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    
    title:{
        type: String,
        required: [true, "Please enter product title"]
    },

  

    price:{
        type: Number,
        required: [true, "Please enter product price"],
        maxLength: [8, "Price cannot exceeed 8 characters"]
    },

    recommended:{
        type: Boolean,
        default: false    
    },

    bestSeller:{
        type: Boolean,
        default: false    
    },

    isShow:{
        type: Boolean,
        default: false 
    },





stock:{
    type: Number,
    required: [true, "Please enter product stock"],
    maxLength: [4, "Stock cannot exceed 4 charcters"],
    default: 1,
},






},

{
    timestamps: true
});

const Product = mongoose.model("product", productSchema);

module.exports = Product;