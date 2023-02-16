const Item = require("../../models/items");
const Favorite = require("../../models/favorites");
const removeFromFavorite = async (req, res) => {
  const { itemId } = req.params;
  const { id: owner } = req.user;
  const item=await Item.findOne({_id:itemId})
if(!item)
{
    throw new Error(`There isn't item with id ${itemId}`)
}
const fav=await Favorite.findOne({owner,itemId})
if(!fav)
{
    throw new Error("This item isn't in favorites")
}
fav.remove()
fav.save()
res.status(200).json({message:`${item.name} was successfully removed from favorites`})
};
module.exports = removeFromFavorite;
