const User = require("../models/users");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const { SECRET_KEY } = process.env;
const auth = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [bearer,token]=authorization.split(" ")
  try {
    if(bearer!=="Bearer"){
        throw new Error("Not Authorized")
    }
    const{id}=jwt.verify(token,SECRET_KEY)
    const user=await User.findById(id)
    if(!user)
    {
        throw new Error("Not Authorized")
    }
    const userWithToken=await User.findOne({token})
    if(!userWithToken)
    {
        throw new Error("Not Authorized")
    }
    req.user=user
    next()
  } catch (error) {
    if (error.message === "Invalid signature") {
        error.status = 401;
      }
      next(error);
  }
};
module.exports = auth;
