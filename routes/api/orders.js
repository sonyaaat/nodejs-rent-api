const express = require('express')
const ctrlWrapper=require("../../middlewares/ctrlWrapper")
const auth=require("../../middlewares/auth")
const {placeOrder,getOrders,getOrderById,cancelOrder,changeStatus}=require("../../controllers/orders")
const getOrdersByUser =require("../../controllers/orders/getOrdersByUser")
const buyAll =require("../../controllers/orders/buyAll")
const router = express.Router()
router.get("/byUser",auth,ctrlWrapper(getOrdersByUser))
router.post("/",auth,ctrlWrapper(placeOrder))
router.post("/updateStatus",auth,ctrlWrapper(changeStatus))
router.post("/all",auth,ctrlWrapper(buyAll))

router.get("/",auth,ctrlWrapper(getOrders))
router.get("/:orderId",auth,ctrlWrapper(getOrderById))

router.post("/cancel",auth,ctrlWrapper(cancelOrder))
module.exports=router