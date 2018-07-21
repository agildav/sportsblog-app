const mongoose = require("mongoose");

//  Category Schema
const categorySchema = mongoose.Schema({
  title: String,
  description: String
});

//  Compile schema into model and export it
const Category = (module.exports = mongoose.model("Category", categorySchema));

//  Category.getCategories function
module.exports.getCategories = function(callback, limit) {
  Category.find(callback)
    .limit(limit)
    .sort([["title", "ascending"]]);
};
