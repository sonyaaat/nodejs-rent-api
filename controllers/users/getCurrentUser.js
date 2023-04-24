const User = require("../../models/users");
const createError = require("http-errors");
const getCurrentUser = async(req,res,next)=>{
    
    if (!req.user) return next(createError(404, "No users found"));
    if (!req.user.token) return next(createError(401, "Not authorized"));
    console.log("Hh")
    const {_id,token,email,role}=req.user
   // const { email, token } = await getUser(req.user);
    const user = await User.findOne({ _id, token });
    
    if (!user) {
      return next(createError(404, "User doesn't exist or unauthorized"));
    }
    return res.status(200).json({ email, token,role });
}

// const getCurrentUser = async (req, res, next) => {
//     if (!req.user) return next(createError(404, "No users found"));
//     if (!req.user.token) return next(createError(401, "Not authorized"));
//     const { email, balance, token } = await getUser(req.user);
//     return res.status(200).json({ email, balance, token });
//   };

//   const getUser = async ({ _id, token }, next) => {
//     const user = await User.findOne({ _id, token });
//     if (!user) {
//       return next(createError(404, "User doesn't exist or unauthorized"));
//     }
//     return user;
//   };
  module.exports=getCurrentUser