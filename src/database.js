const mongoose = require("mongoose");

Connect = () => {
  let uri_db =
    process.env.NODE_ENV === "test"
      ? "mongodb://admin:admin123@ds233258.mlab.com:33258/vuttr-db-test"
      : "mongodb://admin:admin123@ds229118.mlab.com:29118/vuttr-db";

  mongoose
    .connect(uri_db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    .then(() => {
      console.log("Database connection successful");
    })
    .catch(err => {
      console.error("Database connection error");
    });
};

module.exports = Connect();
