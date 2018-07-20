const express = require("express");
const router = express.Router();

/* GET articles. */
router.get("/", function(req, res, next) {
  res.render("articles", { title: "Articles" });
});

/* GET article. */
router.get("/show/:id", function(req, res, next) {
  res.render("article", { title: "Article" });
});

/* GET category articles. */
router.get("/category/:category:id", function(req, res, next) {
  res.render("articles", { title: "Category articles" });
});

module.exports = router;
