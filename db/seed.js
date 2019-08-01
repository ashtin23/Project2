const Restaurant = require("../models/Restaurant");
// const Cuisine = require("../models/Cuisine");
// const Address = require("../models/Address");
const restaurants = require("./restaurant.json");

// Cuisine.find({}).remove(() =>
//   Cuisine.collection
//     .insert(cuisines)
//     .then(cuisines => {
//       console.log(cuisines);
//     })
//     .catch(err => {
//       console.log(err);
//     })
// );

const restaurantArray = restaurants.map(singleRestaurant => {
  const newRestaurant = {};
  (newRestaurant.restaurant_id = singleRestaurant.restaurant_id),
    (newRestaurant.restaurant_name = singleRestaurant.restaurant_name),
    (newRestaurant.price_range = singleRestaurant.price_range),
    (newRestaurant.restaurant_phone = singleRestaurant.restaurant_phone),
    (newRestaurant.hours = singleRestaurant.hours), 
    (newRestaurant.children = singleRestaurant.children),
    (newRestaurant.cuisines = singleRestaurant.cuisines);
  return newRestaurant;
});

Restaurant.find({}).remove(() =>
  Restaurant.collection
    .insert(restaurants)
    .then(restaurants => {
      console.log(restaurants);
    })
    .catch(err => {
      console.log(err);
    })
);
