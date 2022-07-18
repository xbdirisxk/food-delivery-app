const mongoose = require("mongoose");

const menuSchema = mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  imgUrl: String,
  category: {
    type: String,
    enum: ["breakfast", "lunch", "dinner", "dessert", "drinks", "fastfood"],
  },
  restaurant: {
    type: mongoose.Types.ObjectId,
    ref: "Restaurant",
  },
});

const menuModel = mongoose.model("Menu", menuSchema);
export default menuModel;
