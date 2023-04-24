// const Item = require("../../models/items")

const Favorite = require("../../models/favorites");
const getFavorite = async (req, res) => {
  const { id: owner } = req.user;

  const items = await Favorite.find({ owner });

//   if (items.length===0) {
//     res.status(400).json("Your basket is empty");
//   }
  res.status(200).json({ items });
};
module.exports = getFavorite;
