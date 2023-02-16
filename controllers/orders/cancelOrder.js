const Order=require("../../models/order")
const Item=require("../../models/items")
const cancelOrder=async(req,res)=>{
const {id:owner}=req.user
const {orderId}=req.params
const order=await Order.findOne({owner,_id:orderId})
if(!order)
{
    throw new Error("There isn`t such order")
}
order.status="cancelled"
order.save()
const item=await Item.findOne({_id:order.itemId})
if(!item){
    throw new Error("There isn`t such item in bd")
}
if(order.status==="cancelled")
{
    throw new Error("Your order is already cancelled")
}
const newQuantity=item.quantity+order.quantity
item.quantity=newQuantity
item.save()
res.status(200).json({message:`Your order with id ${orderId} was cancelled`})
}
module.exports=cancelOrder