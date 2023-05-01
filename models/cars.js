const { Schema, model } = require("mongoose");
const carSchema = Schema(
  {
    brand: {
      type: String,
      required: [true, "Set brand"],
    },
    model: {
      type: String,
      required: [true, "Set model"],
    },
    year: {
      type: Number,
      required: [true, "Set year"],
    },
    description: {
      type: String,
      required: [true, "Set description"],
    },
    price: {
        type: Number,
        required: [true, "Set description"],
      },
      seats: {
        type: Number,
        required: [true, "Set seats"],
      },
      status: {
        type: String,
        required: [true, "Set status"],
      },
    // price: {
    //   type: Schema.Types.ObjectId,
    //   ref: "user",
    //   required: true,
    // },
    image:{
      type: String,
      required: true,
    },
  },
  { versionKey: false, timeStaps: true }
);
const Car = model("car", carSchema);
module.exports = Car;
