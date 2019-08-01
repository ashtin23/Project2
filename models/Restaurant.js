const mongoose = require("../db/connection");
const Schema = mongoose.Schema;
const AddressSchema = require('./Address')

const restaurantSchema = new Schema({
  restaurant_id: Number,
  restaurant_name: String,
  price_range: String,
  restaurant_phone: Number,
  hours: String,
  cuisines: {
    type: Schema.Types.ObjectId,
    ref: "Cuisine"
  },
  children: [AddressSchema]
});

module.exports = mongoose.model("Restaurant", restaurantSchema);
