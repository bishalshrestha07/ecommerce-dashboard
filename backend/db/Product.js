const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  brand: String,
  Price: String,
  user_id: String,
  category: String,
});

module.exports = mongoose.model("products", productSchema);
