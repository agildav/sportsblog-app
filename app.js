const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");

//  Mongoose setup
const mongoURL = process.env.mlab_uri;
mongoose.connect(
  mongoURL,
  { useNewUrlParser: true }
);
const db = mongoose.connection;

//  === Router ===
const indexRouter = require("./routes/index");
const articlesRouter = require("./routes/articles");
const categoriesRouter = require("./routes/categories");
const manageRouter = require("./routes/manage");
//  ===        ===

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//  === Routes ===
app.use("/", indexRouter);
app.use("/articles", articlesRouter);
app.use("/categories", categoriesRouter);
app.use("/manage", manageRouter);
//  ===        ===

//  Moment.js setup
app.locals.moment = require("moment");

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
