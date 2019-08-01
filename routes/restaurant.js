const express = require("express");
const router = express.Router();
const restaurantController = require("../controllers/restaurant");

router.get("/", restaurantController.index);
router.post("/", restaurantController.create);
router.get("/restaurant_id/:restaurant_id", restaurantController.show);
router.get("/restaurant_name/:restaurant_name", restaurantController.showName);
router.put("/restaurant_id/:restaurant_id", restaurantController.update);
router.delete("/restaurant_id/:restaurant_id", restaurantController.destroy);

module.exports = router;