const { Schema, model } = require("mongoose");
const orderSchema = Schema(
  {
    itemId: {
      type: String,
      required: true,
      ref: "item",
    },
   
    quantity:{
        type:Number,
        required: true,
    },
    creationDate: {
        type: Date, 
        default: Date.now,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    status:{
      type: String,
      enum : ['in progress',"shippped","completed","cancelled"],
      default: "in progress",
    }
  },
  { versionKey: false, timeStaps: true }
);
const Order = model("order", orderSchema);
module.exports = Order;
