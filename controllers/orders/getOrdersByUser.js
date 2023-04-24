const Order=require("../../models/order")

const mongoose = require('mongoose');
const getOrdersByUser=async (req,res)=>{
    
        const {id:owner}=req.user
        console.log(owner)
       // const orders=await Order.find({owner:mongoose.Types.ObjectId(owner)})
    //    const orders= await Order.aggregate([
    //     {
    //       $match: { owner: mongoose.Types.ObjectId(owner) } // Filter condition by ID
    //     },
    //     {
    //       $lookup: {
    //         from: 'items', // Target table name
    //         localField: 'itemId', // Field to join from the source table
    //         foreignField: '_id', // Field to join from the target table
    //         as: 'items' // Alias for the joined field
    //       }
    //     }])
          const orders = await Order.find({ owner: mongoose.Types.ObjectId(owner) }).populate('itemId');
        if(!orders)
        {
            return res.status(404).json({message:`You havent got any orders`})
        }
         return res.status(200).json({data:orders})
}
module.exports=getOrdersByUser