const express = require("express");
const resController = require("../Controllers/restaurantController");
const router = express.Router();

router.route("/").get(resController.getAll).post(resController.create);

router
  .route("/:id")
  .get(resController.getOne)
  .put(resController.edit)
  .delete(resController.delete);

module.exports = router;
