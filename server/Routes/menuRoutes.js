const express = require("express");
const menuController = require("../Controllers/menuController");

const router = express.Router();

router.route("/").get(menuController.getAll).post(menuController.add);
router.route("/:id").put(menuController.edit).delete(menuController.remove);

module.exports = router;
