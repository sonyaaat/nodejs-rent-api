const express = require('express')
const ctrlWrapper=require("../../middlewares/ctrlWrapper")
const auth=require("../../middlewares/auth")

const {addToFavorite,getAll,getById,removeFromFavorite}=require("../../controllers/itemsUser")

const router = express.Router()
router.get("/",auth,ctrlWrapper(getAll))
router.get("/:itemId",auth,ctrlWrapper(getById))
router.get("/addToFavorite/:itemId",auth,ctrlWrapper(addToFavorite))
router.get("/removeFromFavorite/:itemId",auth,ctrlWrapper(removeFromFavorite))
module.exports=router