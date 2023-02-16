const { updateItemsSchema } = require("../../helpers/joiSchemas");
const Item = require("../../models/items");
const updateById = async (req, res) => {
  if(req.user.role!=="admin")
  {
    throw new Error("You are not allowed to add items")
  }
  const { error } = updateItemsSchema.validate(req.body);
  if (error) {
    return res.status(404).json({ message: error.message });
  }
  const {id:owner}=req.user
  const _id=req.params.itemId
  if(req.user.role!=="admin")
  {
    throw new Error("You are not allowed to add items")
  }
  if (!req.body) {
    res.status(404).json({message: "missing fields"})
  }
  const item=await Item.findOne({name:req.body.name})
  if(item && item._id.toString()!== _id)
  {
    throw new Error( `Item with id ${req.body.name} already exists`)
  }
  const result=await Item.findOneAndUpdate({_id,owner},{...req.body},{new:true})
  if (!result) {
    res.status(404).json({message: `Item with id ${_id} not found`})
    return
  }
  res.status(200).json({ data: result });
};
module.exports = updateById;
