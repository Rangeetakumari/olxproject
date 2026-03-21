const mongoose=require('mongoose');
//const { default: ProductDetailPage } = require("../client/src/ProductDetailPage");
//const ProductDetailPageSchema = require("./ProductDetailSchema");
const CategorySchema=new mongoose.Schema({
    categoryImage:String,
    categoryTitle:String,
    categorycar:String,
    
});


module.exports=mongoose.model('buysellforanywheres', CategorySchema);