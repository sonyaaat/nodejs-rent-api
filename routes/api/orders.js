const express = require('express')
const ctrlWrapper=require("../../middlewares/ctrlWrapper")
const auth=require("../../middlewares/auth")
const {placeOrder,getOrders,getOrderById,cancelOrder}=require("../../controllers/orders")
const router = express.Router()

router.post("/",auth,ctrlWrapper(placeOrder))
router.get("/",auth,ctrlWrapper(getOrders))
router.get("/:orderId",auth,ctrlWrapper(getOrderById))
router.get("/cancel/:orderId",auth,ctrlWrapper(cancelOrder))
module.exports=router