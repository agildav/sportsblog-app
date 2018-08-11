const express = require("express");
const router = express.Router();
const Categories = require("../models/category");
const Articles = require("../models/article");

/* GET manage articles page. */
router.get("/articles", (req, res, next) => {
  Articles.getArticles((err, articles) => {
    if (err) console.log(err);
    res.render("manage/manage_articles", {
      title: "Manage articles",
      articles
    });
  });
});

/* GET manage categories page. */
router.get("/categories", (req, res, next) => {
  Categories.getCategories((err, categories) => {
    if (err) console.log(err);
    res.render("manage/manage_categories", {
      title: "Manage categories",
      categories
    });
  });
});

/* GET add_articles page. */
router.get("/articles/add", (req, res, next) => {
  Categories.getCategories((err, categories) => {
    if (err) console.log(err);
    res.render("manage/add_article", { title: "Create article", categories });
  });
});

/* GET edit_article page. */
router.get("/articles/edit/:id", (req, res, next) => {
  let article_id = req.params.id;

  Articles.findArticleById(article_id, (err, article) => {
    if (err) console.log(err);
    Categories.getCategories((err, categories) => {
      if (err) console.log(err);
      res.render("manage/edit_article", {
        title: "Edit article",
        article,
        categories
      });
    });
  });
});

/* GET add_category page. */
router.get("/categories/add", (req, res, next) => {
  res.render("manage/add_category", { title: "Create category" });
});

/* GET edit_category page. */
router.get("/categories/edit/:id", (req, res, next) => {
  let category_id = req.params.id;

  Categories.findCategoryById(category_id, (err, category) => {
    if (err) console.log(err);
    res.render("manage/edit_category", {
      title: "Edit category",
      category
    });
  });
});

module.exports = router;
