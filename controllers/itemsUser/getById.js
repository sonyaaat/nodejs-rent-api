const Car = require("../../models/cars");
const getById=async(req,res)=>{
    
const {itemId}=req.params
console.log(itemId)
const item=await Car.findById(itemId)
if(!item)
{
    throw new Error(`There isn't item with id ${itemId}`)
}
res.status(200).json(item)
}
module.exports=getById