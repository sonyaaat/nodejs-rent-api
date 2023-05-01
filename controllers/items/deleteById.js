const Car = require("../../models/cars");
const deleteById = async (req, res) => {
  
  const { itemId } = req.params;
  if(req.user.role!=="admin")
  {
    throw new Error("You are not allowed to add items")
  }
  const result = await Car.findOneAndRemove({  _id: itemId });
  if (!result) {
    res.status(404).json({ message: `Item with id ${itemId} not found` });
    return;
  }
  res.status(200).json({ data: result });
};
module.exports = deleteById;
