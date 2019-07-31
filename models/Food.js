const mongoose = require("../connection");
const Schema = mongoose.Schema;

const foodSchema = new Schema ({

})

module.exports = mongoose.model('Food', foodSchema)