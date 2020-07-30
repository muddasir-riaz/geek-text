const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const uri = process.env.MONGODB_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const auth = require("./routes/api/auth.js");
app.use("/auth", auth);

const index = require("./routes/api/index.js");
app.use("/index", index);

const user = require("./routes/api/user.js");
app.use("/user", user);

const reviewsRoute = require('./routes/api/reviews');
app.use('/reviews', reviewsRoute);

const bookRouter = require('./routes/api/book');
app.use('/book', bookRouter);

const authorRouter = require('./routes/api/author');
app.use('/author', authorRouter);

app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
