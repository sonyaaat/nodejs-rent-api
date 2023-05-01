const Rent = require("../../models/rent");
const mongoose = require("mongoose");
const Car = require("../../models/cars");
const cancelOrder = async (req, res) => {
  const { id: owner } = req.user;
  const { rentId } = req.body;
  console.log("W", rentId);
  const order = await Rent.findOne({ _id: rentId });
  console.log("order", order);
  if (!order) {
    throw new Error("There isn`t such order");
  }
  order.status = "cancelled";
  order.save();
  const item = await Car.findOne({ _id: order.itemId });
  // console.log("item", item);
  if (!item) {
    throw new Error("There isn`t such item in bd");
  }

  const orders = await Rent.find({
    owner: mongoose.Types.ObjectId(owner),
  }).populate("itemId");
  res.status(200).json({ data: orders });
};
module.exports = cancelOrder;
