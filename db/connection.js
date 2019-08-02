const mongoose = require("mongoose");
let mongoURI = "";

mongoose.Promise = Promise;

if (process.env.NODE_ENV === "production") {
  mongoURI = process.env.DB_URL;
} else {
  mongoURI = "mongodb://localhost/book-e";
}

mongoose
  .connect("mongodb://localhost/Project2", { useNewUrlParser: true })
  .then(conn => {
    console.log(`connected to mongodb on ${conn.connections[0].name} db`);
  })
  .catch(err => {
    console.error(err);
  });

module.exports = mongoose;