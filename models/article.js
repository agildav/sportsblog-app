const mongoose = require("mongoose");

//  Article Schema
const articleSchema = mongoose.Schema({
  title: String,
  subtitle: String,
  category: String,
  body: String,
  author: String,
  created_at: {
    type: Date,
    default: Date.now
  },
  comments: [
    {
      comment_subject: String,
      comment_body: String,
      comment_author: String,
      comment_email: String,
      comment_date: String
    }
  ]
});

//  Compile schema into model and export it
const Articles = (module.exports = mongoose.model("Article", articleSchema));

//  getArticles query
module.exports.getArticles = function(callback, limit) {
  Articles.find(callback)
    .limit(limit)
    .sort([["title", "ascending"]]);
};

//  getArticles query
module.exports.getArticlesByCategory = function(id, callback) {
  let categoryID = { category: id };
  Articles.find(categoryID, callback).sort([["title", "ascending"]]);
};

//  findArticleById query
module.exports.findArticleById = function(id, callback) {
  Articles.findById(id, callback);
};

//  addArticles method
module.exports.addArticles = function(article, callback) {
  Articles.create(article, callback);
};

//  editArticle method
module.exports.editArticles = function(
  article,
  updateArticle,
  options,
  callback
) {
  Articles.findOneAndUpdate(article, updateArticle, options, callback);
};

//  deleteArticles method
module.exports.deleteArticles = function(article, callback) {
  Articles.remove(article, callback);
};
