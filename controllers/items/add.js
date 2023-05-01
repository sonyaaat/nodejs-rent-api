const { carSchema } = require("../../helpers/joiSchemas");
const Car= require("../../models/cars")
const path=require("path")
const add = async (req, res) => {
  const { error } = carSchema.validate(req.body);
  if (error) {
    console.log("h")
    return res.status(404).json({ message: error.message });
  }
  const { brand, model, year, description,price,seats,status } = req.body;
  const { originalname } = req.file;

  const image = path.join("public", "photos", originalname);
  if (req.user.role !== "admin") {
    throw new Error("You are not allowed to add items");
  }
  // const item = await Item.findOne({ name });
  // if (item) {
  //   throw new Error(`Item with name ${name} already exists`);
  // }
  const result = await Car.create({
    brand, model, year, description,price,seats,status,image
  });
  res.status(201).json({ data: result });
};
module.exports = add;
