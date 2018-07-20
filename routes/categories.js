const express = require("express");
const router = express.Router();

/* GET categories. */
router.get("/", function(req, res, next) {
  res.render("categories", { title: "Categories" });
});

module.exports = router;
