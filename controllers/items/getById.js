const Item = require("../../models/items");
const getById = async (req, res) => {
  if(req.user.role!=="admin")
  {
    throw new Error("You are not allowed to add items")
  }
  const { itemId } = req.params;
  const { id: owner } = req.user;
  const item = await Item.findOne({ owner, _id: itemId });
  if (!item) {
    throw new Error(`Item with id ${itemId} wasn't found`);
  }
  res.status(200).json({ data: item });
};
module.exports = getById;
