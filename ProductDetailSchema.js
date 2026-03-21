const  mongoose=require('mongoose');
const ProductDetailPageSchema=new mongoose.Schema({
    maintitle:String,
    mainimage:String,
    mainprice:String

});
module.exports = mongoose.model("buysellforanywheres",ProductDetailPageSchema);