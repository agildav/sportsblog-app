const express = require("express");
const router = express.Router();
const Category = require("../models/category");

/* GET categories. */
router.get("/", (req, res, next) => {
  Category.getCategories((err, categories) => {
    console.log(categories);
  });
  res.render("categories", { title: "Categories" });
});

module.exports = router;
