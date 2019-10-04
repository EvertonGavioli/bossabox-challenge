const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const routes = require("./routes");

const app = express();

mongoose.connect("mongodb://admin:admin123@ds229118.mlab.com:29118/vuttr-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

require("./models/user");

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3000);
