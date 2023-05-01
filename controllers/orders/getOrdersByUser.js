const Rent = require("../../models/rent");

const mongoose = require("mongoose");
const getOrdersByUser = async (req, res) => {
  const { id: owner } = req.user;
  console.log(owner);
  const orders = await Rent.find({
    owner: mongoose.Types.ObjectId(owner),
  }).populate("itemId");
  console.log(orders)
  if (orders.length===0) {
    return res.status(404).json({ message: `You havent got any orders` });
  }
  return res.status(200).json({ data: orders });
};
module.exports = getOrdersByUser;
