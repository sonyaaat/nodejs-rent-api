const { Schema, model } = require("mongoose");
const favSchema = Schema(
  {
    itemId: {
      type: Schema.Types.ObjectId,
      ref: "item",
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    price: {
      type: String,
      required: [true, "Set price"],
    },
    image:{
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: [true, "Set price"],
    },
  },
  { versionKey: false, timeStaps: true }
);
const Fovorite = model("favorite", favSchema);
module.exports = Fovorite;
