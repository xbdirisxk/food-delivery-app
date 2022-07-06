const express = require("express");
const userController = require("../Controllers/userController");
const router = express.Router();

router.route("/signup").post(userController.signUp);
router.route("/signin").post(userController.signIn);
router.route("/change-password").put(userController.changePassword);

module.exports = router;
