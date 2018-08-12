const express = require("express");
const router = express.Router();
const Articles = require("../models/article");
const Categories = require("../models/category");

/* GET articles. */
router.get("/", (req, res, next) => {
  Articles.getArticles((err, articles) => {
    if (err) console.log(err);
    res.render("articles/articles", { title: "Articles", articles });
  });
});

/* GET article. */
router.get("/show/:id", (req, res, next) => {
  Articles.findArticleById(req.params.id, (err, article) => {
    res.render("articles/article", { title: "Article", article });
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

/* DELETE remove an article */
router.delete("/delete/:id", (req, res, next) => {
  let article_id = { _id: req.params.id };

  Articles.deleteArticles(article_id, (err, article) => {
    if (err) console.log(err);
    res.sendStatus(200);
  });
});

/* GET category articles. */
router.get("/category/:category_id", (req, res, next) => {
  Articles.getArticlesByCategory(req.params.category_id, (err, articles) => {
    Categories.findCategoryById(req.params.category_id, (err, category) => {
      res.render("articles/articles", {
        title: `${category.title} articles`,
        articles
      });
    });
  });
});

/* POST article comments */
router.post("/comments/add/:id", (req, res, next) => {
  let id = { _id: req.params.id };
  let comment = req.body;
  Articles.addComment(id, comment, (err, articles) => {
    if (err) res.send(err);
    res.redirect(`/articles/show/${req.params.id}`);
  });
});

module.exports = router;
