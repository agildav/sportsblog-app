const mongoose = require("mongoose");

//  Category Schema
const categorySchema = mongoose.Schema({
  title: String,
  description: String
});

//  Compile schema into model and export it
const Categories = (module.exports = mongoose.model(
  "Category",
  categorySchema
));

//  getCategories query
module.exports.getCategories = function(callback, limit) {
  Categories.find(callback)
    .limit(limit)
    .sort([["title", "ascending"]]);
};

//  addCategories method
module.exports.addCategories = function(category, callback) {
  Categories.create(category, callback);
};
