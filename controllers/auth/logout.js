const User=require('../../models/users')
const logout=async(req,res)=>{
const user=req.user
if(!user)
{
    throw new Error("Not Authorized")
}
await User.findByIdAndUpdate(user.id,{token:null})
res.status(204).json()
}
module.exports=logout