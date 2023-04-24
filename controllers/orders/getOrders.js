const Order=require("../../models/order")
const getOrders=async(req,res)=>{
// npmconst {id:owner}=req.user
const orders = await Order.find({  }).populate('itemId');
console.log(orders)
if(orders.length===0)
{
    return res.status(404).json({message:"This client doesn't have orders"})
}
return res.status(200).json({data:orders})
}
module.exports=getOrders