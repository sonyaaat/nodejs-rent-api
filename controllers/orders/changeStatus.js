const Order=require("../../models/order")
const changeStatus= async (req,res)=>{
 const {status,orderId}=req.body
// const {id:owner}=req.user
const order=await Order.findOneAndUpdate({_id:orderId},{...req.body},{new:true})
if(!order)
{
    return res.status(404).json({message:`This client doesn't have order with id ${orderId}`})
}
const orders = await Order.find({  }).populate('itemId');
return res.status(200).json({data:orders})
}
module.exports=changeStatus