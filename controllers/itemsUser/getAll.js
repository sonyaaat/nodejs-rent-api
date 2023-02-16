const Item = require("../../models/items");
const getAll = async (req, res) => {
  const { limit = 10, page = 1 } = req.query;
  const skip = (page - 1) * limit;
  const result = await Item.find({}, "", { skip, limit: Number(limit) });
  const countQuery = await Item.where({ }).countDocuments();
  res.status(200).json({ data: result, count: countQuery });
};
module.exports = getAll;
