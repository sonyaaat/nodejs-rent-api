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
  },
  { versionKey: false, timeStaps: true }
);
const Fovorite = model("favorite", favSchema);
module.exports = Fovorite;
