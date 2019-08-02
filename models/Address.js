const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const addressSchema = new Schema({
  city: String,
  formatted: String,
  street: String,
  state: String,
  postal_code: Number
});

module.exports = addressSchema;
