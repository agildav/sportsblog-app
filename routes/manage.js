const express = require("express");
const router = express.Router();

/* GET manage articles page. */
router.get("/articles", function(req, res, next) {
  res.render("manage_articles", { title: "Manage articles" });
});

/* GET manage categories page. */
router.get("/categories", function(req, res, next) {
  res.render("manage_categories", { title: "Manage categories" });
});

/* GET add_articles page. */
router.get("/articles/add", function(req, res, next) {
  res.render("add_articles", { title: "Create articles" });
});

/* GET edit_article page. */
router.get("/articles/edit/:id", function(req, res, next) {
  res.render("edit_article", { title: "Edit articles" });
});

/* GET add_category page. */
router.get("/categories/add", function(req, res, next) {
  res.render("add_category", { title: "Create categories" });
});

/* GET edit_category page. */
router.get("/categories/edit/:id", function(req, res, next) {
  res.render("edit_category", { title: "Edit category" });
});
module.exports = router;
