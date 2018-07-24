const express = require("express");
const router = express.Router();
const Categories = require("../models/category");

/* GET categories. */
router.get("/", (req, res, next) => {
  Categories.getCategories((err, categories) => {
    if (err) console.log(err);
    res.render("categories", { title: "Categories", categories });
  });
});

/* POST new categories. */
router.post("/add", (req, res, next) => {
  let category = req.body;
  Categories.addCategories(category, (err, categories) => {
    if (err) res.send(err);

    console.log("Category added");
    res.redirect("/manage/categories");
  });
});

module.exports = router;
