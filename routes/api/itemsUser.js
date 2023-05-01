const express = require('express')
const ctrlWrapper=require("../../middlewares/ctrlWrapper")
// const auth=require("../../middlewares/auth")

const {getAll,getById}=require("../../controllers/itemsUser")

const router = express.Router()

router.get("/",ctrlWrapper(getAll))
router.get("/:itemId",ctrlWrapper(getById))


module.exports=router