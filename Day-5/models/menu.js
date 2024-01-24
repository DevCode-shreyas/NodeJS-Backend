const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
    },
    taste: {
      type: String,
      enum: ["sweet", "salty", "spicy"],
      required: true,
    },
    is_drink: {
      type: Boolean,
      default: false, // optional field
    },
    ingredients: {
      type: [String],
      default: [],
    },
    num_sales: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

// create a model
const Menu = mongoose.model("Menu", menuSchema);

module.exports = Menu;
