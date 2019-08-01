const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const addressSchema = new Schema({
    city: String,
    formatted: String,
    street: String,
    state: String,
    postal_code: Number,
    restaurant: {
        type: Schema.Types.ObjectId,
        ref: "Restaurant"
    }
  });

const restaurantSchema = new Schema ({
    restaurant_id: Number,
    restaurant_name: String,
    price_range: String,  
    restaurant_phone: Number,      
    hours: String,
    cuisines: {
        type: Schema.Types.ObjectId,
        ref: "Cuisines"
    },
    children: ["Address"]
          
        });

        


module.exports = mongoose.model('Restaurant', restaurantSchema)
module.exports = mongoose.model("Address", addressSchema);