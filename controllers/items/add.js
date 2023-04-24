const { addItemSchema } = require("../../helpers/joiSchemas");
const Item = require("../../models/items");
const path=require("path")
const add = async (req, res) => {
  // const { error } = addItemSchema.validate(req.body);
  // if (error) {
  //   console.log("h")
  //   return res.status(404).json({ message: error.message });
  // }
  const { name, description, quantity, price } = req.body;
  console.log(quantity);
  const { id: owner } = req.user;
  const { originalname } = req.file;

  const image = path.join("public", "photos", originalname);
  if (req.user.role !== "admin") {
    throw new Error("You are not allowed to add items");
  }
  const item = await Item.findOne({ name });
  if (item) {
    throw new Error(`Item with name ${name} already exists`);
  }
  const result = await Item.create({
    name,
    description,
    quantity,
    owner,
    price,
    image
  });
  res.status(201).json({ data: result });
};
module.exports = add;
