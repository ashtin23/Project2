const Restaurant = require("../models/Restaurant")

module.exports = {
    index: function(req, res) {
        Restaurant.find({}).then(restaurants => res.json(restaurants))
    },
    create: function(req, res) {
        Restaurant.create(req.body).then(restaurant => res.json(restaurant));
    },
    show: function(req, res) {
        Restaurant.findById(req.params.id).then(restaurant => res.json(show));
    },
    showName: function(req, res) {
        Restaurant.findOne({restaurant_name: req.params.restaurant_name}).then(restaurant =>
            res.json(restaurant));
    },
    update: function(req, res) {
        Restaurant.findOneAndUpdate(
            {_id: req.params.id},
            req.body
            // queryOptions
        ).then(restaurant => res.json(restaurant));
    },
    destroy: function(req, res) {
        Restaurant.findByIdAndRemove(req.params.id).then(restaurant => {
            res.send(restaurant)
        });
    }  
};

