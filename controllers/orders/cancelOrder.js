const Order=require("../../models/order")
const mongoose = require('mongoose');
const Item=require("../../models/items")
const cancelOrder=async(req,res)=>{
 const {id:owner}=req.user
const {orderId}=req.body
console.log("W",orderId)
const order=await Order.findOne({_id:orderId})
console.log("order",order)
if(!order)
{
    throw new Error("There isn`t such order")
}
order.status="cancelled"
order.save()
const item=await Item.findOne({_id:order.itemId})
console.log("item",item)
if(!item){
    throw new Error("There isn`t such item in bd")
}

const newQuantity=item.quantity+order.quantity
item.quantity=newQuantity
item.save()
const orders = await Order.find({ owner: mongoose.Types.ObjectId(owner) }).populate('itemId');
res.status(200).json({data:orders})
}
module.exports=cancelOrder