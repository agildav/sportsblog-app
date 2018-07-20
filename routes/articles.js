const express = require("express");
const router = express.Router();

/* GET articles. */
router.get("/", function(req, res, next) {
  res.render("articles", { title: "Articles" });
});

module.exports = router;
