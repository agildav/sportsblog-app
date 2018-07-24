const express = require("express");
const router = express.Router();
const Categories = require("../models/category");

/* GET categories. */
router.get("/", (req, res, next) => {
  Categories.getCategories((err, categories) => {
    if (err) console.log(err);

    console.log(categories);
    res.render("categories", { title: "Categories", categories });
  });
});

module.exports = router;
