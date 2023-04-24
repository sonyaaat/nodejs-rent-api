const Item = require("../../models/items");
const mongoose = require('mongoose');
const Order = require("../../models/order");
const Favorite=require("../../models/favorites")
const {  addItemSchema } = require("../../helpers/joiSchemas");
const buyAll=async(req,res,next)=>{
    const { id: owner } = req.user;
    const items=await Favorite.find({owner:mongoose.Types.ObjectId(owner)})
    console.log(items)
    if(!items)
  {
    throw new Error(`There isn't any item in your basket`)
  }
  items.forEach(async({itemId})=>{
    const itemFromBd=await Item.findOne({_id:itemId})
    if(itemFromBd.quantity-1<0)
    {
     if(addItemSchema.quantity!==0){
      throw new Error(`The amount isn't enough to buy. There is only ${itemFromBd.quantity} items`)
     }
     throw new Error(`The amount isn't enough to buy. The item is not in stock`)
    }
    itemFromBd.quantity-=1
    itemFromBd.save()
    await Order.create({itemId,quantity:1,owner})
   
  })
  await Favorite.remove({owner})
    res.status(200).json({items})
}
module.exports=buyAll