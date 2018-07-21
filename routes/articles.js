const express = require("express");
const router = express.Router();

/* GET articles. */
router.get("/", (req, res, next) => {
  res.render("articles", { title: "Articles" });
});

/* GET article. */
router.get("/show/:id", (req, res, next) => {
  res.render("article", { title: "Article" });
});

/* GET category articles. */
router.get("/category/:category_id", (req, res, next) => {
  res.render("articles", { title: "Category articles" });
});

module.exports = router;
