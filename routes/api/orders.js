const express = require('express')
const ctrlWrapper=require("../../middlewares/ctrlWrapper")
const auth=require("../../middlewares/auth")
const {placeOrder,getOrders,getOrderById,cancelOrder}=require("../../controllers/orders")
const getOrdersByUser =require("../../controllers/orders/getOrdersByUser")
const router = express.Router()
router.get("/byUser",auth,ctrlWrapper(getOrdersByUser))
router.post("/",auth,ctrlWrapper(placeOrder))
router.get("/",auth,ctrlWrapper(getOrders))
router.get("/:orderId",auth,ctrlWrapper(getOrderById))

router.delete("/cancel",auth,ctrlWrapper(cancelOrder))
module.exports=router