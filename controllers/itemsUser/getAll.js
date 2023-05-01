const Car = require("../../models/cars");
const getAll = async (req, res) => {
  // const { limit = 10, page = 1 } = req.query;
  // const skip = (page - 1) * limit;
  // const result = await Item.find({}, "", { skip, limit: Number(limit) });
  const result = await Car.find({});
  const countQuery = await Car.where({ }).countDocuments();
  res.status(200).json({ data: result, count: countQuery });
};
module.exports = getAll;
