const express = require("express");
const mongoose = require("mongoose");

const routes = require("./routes");

const app = express();

mongoose.connect("mongodb://admin:admin123@ds229118.mlab.com:29118/vuttr-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(routes);

app.listen(3000);
