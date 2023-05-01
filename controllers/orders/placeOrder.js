const Car = require("../../models/cars");
const Rent = require("../../models/rent");

const {  rentCarSchema} = require("../../helpers/joiSchemas");
const placeOrder = async (req, res) => {
  const { itemId, startDate, endDate} = req.body;
  const { id: owner } = req.user;
  const { error } = rentCarSchema.validate(req.body);
  if (error) {
    return res.status(404).json({ message: error.message });
  }
  const item = await Car.findOne({ _id: itemId });
  if (!item) {
    throw new Error(`There isn't item with id ${itemId}`);
  }
  if (item.status==="unavailable") {
    throw new Error(`This car is unvailable`);
  }

  // if (item.quantity - quantity < 0) {
  //   if (addItemSchema.quantity !== 0) {
  //     throw new Error(
  //       `The amount isn't enough to buy. There is only ${item.quantity} items`
  //     );
  //   }
  //   throw new Error(`The amount isn't enough to buy. The item is not in stock`);
  // }
  item.status ="unavailable";
  item.save();


  const result = await Rent.create({ itemId, startDate, endDate, owner });
  res.status(200).json({ data: result });
};
module.exports = placeOrder;
