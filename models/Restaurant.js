const mongoose = require("../connection");
const Schema = mongoose.Schema;

const restaurantSchema = new Schema ({

})

module.exports = mongoose.model('Restaurant', restaurantSchema)