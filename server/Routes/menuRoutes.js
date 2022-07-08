const express = require("express");
const menuController = require("../Controllers/menuController");

const router = express.Router();

router.use("/").get(menuController.getAll).post(menuController.add);
router.use("/:id").put(menuController.edit).delete(menuController.remove);

module.exports = router;
