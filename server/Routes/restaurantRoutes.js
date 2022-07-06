const express = require("express");
const {
  createRestaurant,
  getRestaurant,
  editRestaurant,
  deleteRestaurant,
} = require("../Controllers/restaurantController");
const router = express.Router();

router.use("/").get(getRestaurant);

router.use("/create").post(createRestaurant);
router.use("/edit").put(editRestaurant);
router.use("/delete").delete(deleteRestaurant);
