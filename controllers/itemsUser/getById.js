const Item = require("../../models/items");
const getById=async(req,res)=>{
const {itemId}=req.params
const item=await Item.findById(itemId)
if(!item)
{
    throw new Error(`There isn't item with id ${itemId}`)
}
res.status(200).json(item)
}
module.exports=getById