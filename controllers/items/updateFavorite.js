const Item=require("../../models/items")
const { favSchema } = require("../../helpers/joiSchemas");
const updateFavorite = async (req, res) => {
  const{id:owner}=req.user
  const { favorite } = req.body;
  if (!req.body) {
    res.status(404).json({ message: "missing fields" });
  }
  const { error } = favSchema.validate(req.body);
  if (error) {
    return res.status(404).json({ message: error.message });
  }
  const { itemId } = req.params;
  const result=await Item.findOneAndUpdate({_id:itemId,owner},{favorite},{new:true})
  if (!result) {
    res.status(404).json({ message: `Item with id ${itemId} not found` });
    return;
  }
  res.status(200).json({ data: result });
};

module.exports = updateFavorite;
