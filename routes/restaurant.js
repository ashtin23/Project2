const express = require("express");
const router = express.Router();
const restaurantController = require("../controllers/restaurant");

router.get("/", restaurantController.index);
router.post("/", restaurantController.create);
router.get("/:id", restaurantController.show);
router.get("/restaurant_name/:restaurant_name", restaurantController.showName);
router.put("/:id", restaurantController.update);
router.delete("/:id", restaurantController.destroy);

module.exports = router;