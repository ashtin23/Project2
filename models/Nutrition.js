const mongoose = require("../connection");
const Schema = mongoose.Schema;

const nutritionSchema = new Schema ({

})

module.exports = mongoose.model('Nutrition', nutritionSchema)