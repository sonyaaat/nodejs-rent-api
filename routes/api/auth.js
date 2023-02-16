const express = require('express')

const ctrlWrapper=require("../../middlewares/ctrlWrapper")
const auth=require("../../middlewares/auth")
const {login,register,logout}=require("../../controllers/auth")

const router = express.Router()
router.post("/register",ctrlWrapper(register))
router.post("/login",ctrlWrapper(login))
router.get("/logout",auth,ctrlWrapper(logout))
module.exports=router