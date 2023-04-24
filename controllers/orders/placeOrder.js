const Item = require("../../models/items");
const mongoose = require('mongoose');
const Order = require("../../models/order");
const Favorite=require("../../models/favorites")
const { placeOrderSchema, addItemSchema } = require("../../helpers/joiSchemas");
const placeOrder = async (req, res) => {
  const {itemId,quantity}=req.body
  const { id: owner } = req.user;
  const { error } = placeOrderSchema.validate(req.body);
  if (error) {
    return res.status(404).json({ message: error.message });
  }
  const item=await Item.findOne({_id:itemId})
  if(!item)
  {
    throw new Error(`There isn't item with id ${itemId}`)
  }
  if(item.quantity-quantity<0)
  {
   if(addItemSchema.quantity!==0){
    throw new Error(`The amount isn't enough to buy. There is only ${item.quantity} items`)
   }
   throw new Error(`The amount isn't enough to buy. The item is not in stock`)
  }
  item.quantity-=quantity
  item.save()
 
  await Favorite.findOneAndDelete({itemId:mongoose.Types.ObjectId(itemId)})
  console.log(itemId)
  const result=await Order.create({itemId,quantity,owner,})
  res.status(200).json({data:result})
};
module.exports = placeOrder;
