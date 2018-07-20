const express = require("express");
const router = express.Router();

/* GET manage page. */
router.get("/", function(req, res, next) {
  res.send("Manage");
});

/* GET add_articles page. */
router.get("/articles/add", function(req, res, next) {
  res.render("add_articles", { title: "Create articles" });
});

/* GET add_category page. */
router.get("/categories/add", function(req, res, next) {
  res.render("add_category", { title: "Create category" });
});

module.exports = router;
