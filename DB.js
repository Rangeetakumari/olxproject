const mongoose=require('mongoose');

  async function mongoConnect(){
   try{

await mongoose.connect("mongodb+srv://cutierani495:qWVgd62RdAG7Pchw@cluster0.3ew6snk.mongodb.net/olxproject?retryWrites=true&w=majority&appName=Cluster0",{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

console.log("Mongodb connected");
   }
   catch(error){
console.log("Mongo error"+error);
process.exit();

   }
   }

   module.exports=mongoConnect;