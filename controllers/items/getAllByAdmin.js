const Item = require("../../models/items");

const getAllByAdmin = async (req, res) => {
  // if(req.user.role!=="admin")
  // {
  //   throw new Error("You are not allowed to get items")
  // }
  // const {id:owner}=req.user
  const { limit = 10, page = 1} = req.query;
  const skip = (page - 1) * limit;
  const result = await Item.find({quantity:{$ne : 0}}, "", { skip, limit: Number(limit) });
  res.status(200).json({ data: result });
};
module.exports = getAllByAdmin;
