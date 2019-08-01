const express = require("express");
const router = express.Router();
const cuisineController = require("../controllers/cuisine");

router.get("/", cuisineController.index);
router.get("/:id", cuisineController.show);
