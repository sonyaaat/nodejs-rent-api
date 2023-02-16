const { Schema, model } = require("mongoose");
const itemSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for item"],
    },
    description: {
      type: String,
      required: [true, "Set description"],
    },
    price: {
      type: String,
      required: [true, "Set price"],
    },
    quantity: {
      type: Number,
      required: [true, "Set quantity"],
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    image:{
      type: String,
      required: true,
    }
  },
  { versionKey: false, timeStaps: true }
);
const Item = model("item", itemSchema);
module.exports = Item;
