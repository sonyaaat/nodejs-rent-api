const { Schema, model } = require("mongoose");
const rentSchema = Schema(
  {
    itemId: {
      type: String,
      required: true,
      ref: "car",
    },
    creationDate: {
        type: Date, 
        default: Date.now,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    startDate: {
      type: Date, 
      
  },
  endDate: {
    type: Date, 
},
status:{
  type: String,
  default:"active",
}
    
  },
  
  { versionKey: false, timeStaps: true }
);
const Rent = model("rent", rentSchema);
module.exports = Rent;
