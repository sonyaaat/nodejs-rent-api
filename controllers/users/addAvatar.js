const User=require("../../models/users")
const path=require("path")
const addAvatar=async(req,res)=>{
const { id: owner } = req.user;
const { originalname } = req.file;
const avatar = path.join("public", "photos", originalname);
const result=await User.findByIdAndUpdate(owner,{avatar},{new:true})
res.status(201).json({ data: result });
}
module.exports=addAvatar