const Order=require("../../models/order")
const getOrders=async(req,res)=>{
const {id:owner}=req.user
const orders=await Order.find({owner})
console.log(orders)
if(orders.length===0)
{
    return res.status(404).json({message:"This client doesn't have orders"})
}
return res.status(200).json({data:orders})
}
module.exports=getOrders