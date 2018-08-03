const express = require("express");
const router = express.Router();
const Articles = require("../models/article");

/* GET articles. */
router.get("/", (req, res, next) => {
  Articles.getArticles((err, articles) => {
    if (err) console.log(err);
    res.render("articles/articles", { title: "Articles", articles });
  });
});

/* POST new articles. */
router.post("/add", (req, res, next) => {
  let article = req.body;
  Articles.addArticles(article, (err, articles) => {
    if (err) res.send(err);
    res.redirect("/manage/articles");
  });
});

/* POST edit article */
router.post("/edit/:id", (req, res, next) => {
  let article_id = { _id: req.params.id };
  let updateArticle = {
    title: req.body.title,
    subtitle: req.body.subtitle,
    category: req.body.category,
    author: req.body.author,
    body: req.body.body
  };

  Articles.editArticles(article_id, updateArticle, {}, (err, article) => {
    if (err) console.log(err);
    res.redirect("/manage/articles");
  });
});

/* GET article. */
router.get("/show/:id", (req, res, next) => {
  res.render("articles/article", { title: "Article" });
});

/* GET category articles. */
router.get("/category/:category_id", (req, res, next) => {
  res.render("articles/articles", { title: "Category articles" });
});

module.exports = router;
