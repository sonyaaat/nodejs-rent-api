const express = require('express')
const ctrlWrapper=require("../../middlewares/ctrlWrapper")
const auth=require("../../middlewares/auth")
const getAllUsers=require("../../controllers/users/getAllUsers")
const getCurrentUser=require("../../controllers/users/getCurrentUser")
const editUser=require("../../controllers/users/editUser")
const userInfo=require("../../controllers/users/userInfo")
const addAvatar=require("../../controllers/users/addAvatar")
const router = express.Router()
const upload=require("../../middlewares/multer")


router.get("/",auth,ctrlWrapper(getAllUsers))
router.get("/currentUser",auth,ctrlWrapper(getCurrentUser))
router.get("/userInfo",auth,ctrlWrapper(userInfo))
router.post("/edit",auth,ctrlWrapper(editUser))
router.post("/avatar",upload.single("avatar"),auth,ctrlWrapper(addAvatar))

module.exports=router