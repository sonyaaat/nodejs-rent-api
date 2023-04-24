const express = require('express')
const ctrlWrapper=require("../../middlewares/ctrlWrapper")
const auth=require("../../middlewares/auth")

const {addToFavorite,getAll,getById,removeFromFavorite,getFavorite}=require("../../controllers/itemsUser")

const router = express.Router()
router.get("/getFav",auth,ctrlWrapper(getFavorite))
router.get("/",ctrlWrapper(getAll))
router.get("/:itemId",ctrlWrapper(getById))
router.post("/addToFavorite/:itemId",auth,ctrlWrapper(addToFavorite))
router.post("/removeFromFavorite/:itemId",auth,ctrlWrapper(removeFromFavorite))

module.exports=router