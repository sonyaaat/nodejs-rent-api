const Order=require("../../models/order")
const getOrderById=async(req,res)=>{
const {id:owner}=req.user
const{orderId}=req.params
const order=await Order.findOne({_id:orderId,owner})
if(!order)
{
    return res.status(404).json({message:`This client doesn't have order with id ${orderId}`})
}
return res.status(200).json({data:order})
}
module.exports=getOrderById