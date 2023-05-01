const Car= require("../../models/cars")
const updateById = async (req, res) => {
  

  const _id=req.params.itemId
  if(req.user.role!=="admin")
  {
    throw new Error("You are not allowed to update items")
  }
  if (!req.body) {
    res.status(404).json({message: "missing fields"})
  }
  // const item=await Car.findOne({name:req.body.name})
  // if(item && item._id.toString()!== _id)
  // {
  //   throw new Error( `Item with id ${req.body.name} already exists`)
  // }
  const result=await Car.findOneAndUpdate({_id},{...req.body},{new:true})
  console.log(result)
  if (!result) {
    res.status(404).json({message: `Item with id ${_id} not found`})
    return
  }
  res.status(200).json({ data: result });
};
module.exports = updateById;
