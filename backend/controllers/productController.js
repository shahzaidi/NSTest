const Product = require("../models/productSchema");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("../middleware/catchAsyncError");
const ApiFeatures = require("../utils/apiFeatures");


// Create Product

exports.createProduct = catchAsyncError(async (req, res, next)=>{
     
    const product = await Product.create(req.body);

    res.status(200).json({success: true, product})
}
);

exports.getAllProducts = catchAsyncError(async(req, res)=>{

    const resultPerPage = 5;
  const productCount = await Product.countDocuments();

    const apiFeatures = new ApiFeatures(Product.find(), req.query).search().filter()
    .pagination(resultPerPage);;

    const products = await apiFeatures.query;
        
    res.status(200).json({success: true, productCount, products})
});



// Update Product 

exports.updateProduct = catchAsyncError(async (req, res, next)=>{
     
    let product = await Product.findById(req.params.id);

    if(!product){
        return next(new ErrorHandler("Product not found", 400));
    }

   product = await Product.findByIdAndUpdate(req.params.id, req.body, {new:true} );

    res.status(200).json({success: true, product});
});


// Delete Product 


exports.deleteProduct = catchAsyncError(async (req, res, next)=>{
     
    let product = await Product.findByIdAndDelete(req.params.id);

    if(!product){
        return next(new ErrorHandler("Product not found", 400));
    }



    res.status(200).json({success: true, message: "Product deleted successfully", product});
});


// Get Product Details


exports.getProductDetails = catchAsyncError(async (req, res, next)=>{
     
    let product = await Product.findById(req.params.id);

    if(!product){
        return next(new ErrorHandler("Product not found", 400));
    }



    res.status(200).json({success: true, product});
});