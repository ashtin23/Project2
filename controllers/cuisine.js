const Cuisine = require("../models/Cuisine")

module.exports = {
    index: function(req, res) {
        Cuisine.find({}).then(cuisines => res.json(cuisines))
    },
    
    show: function(req, res) {
        Cuisine.findById(req.params.id).then(cuisine => res.json(cuisine));
    } 
};
