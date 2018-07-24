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

//  findCategoryById query
module.exports.findCategoryById = function(id, callback) {
  Categories.findById(id, callback);
};

//  addCategories method
module.exports.addCategories = function(category, callback) {
  Categories.create(category, callback);
};

//  editCategory method
module.exports.editCategory = function(
  category,
  updateCategory,
  options,
  callback
) {
  Categories.findOneAndUpdate(category, updateCategory, options, callback);
};
