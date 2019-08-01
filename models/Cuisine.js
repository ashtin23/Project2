const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const cuisineSchema = new Schema ({
    cuisines: [String],
    restaurant: {
        type: Schema.Types.ObjectId,
        ref: "Restaurant"
    }
})

module.exports = mongoose.model('Cuisine', cuisineSchema)