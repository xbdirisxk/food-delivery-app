const express = require("express");
const restaurantController = require("../Controllers/restaurantController");
const router = express.Router();

router
  .use("/")
  .get(restaurantController.getAll)
  .post(restaurantController.create);

router
  .use("/:id")
  .get(restaurantController.getOne)
  .put(restaurantController.edit)
  .delete(restaurantController.delete);

module.exports = router;
