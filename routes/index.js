const express = require("express");
const router = express.Router();
const Articles = require("../models/article");

const ARTICLES_LIMIT = 4;
/* GET home page. */
router.get("/", (req, res, next) => {
  Articles.getArticles((err, articles) => {
    res.render("index", { title: "Index page", articles });
  }, ARTICLES_LIMIT);
});

module.exports = router;
