import express from "express";

const userController = require("../Controllers/userController");
const router = express.Router();

router.route("/signup").post(userController.signUp);
router.route("/signin").post(userController.signIn);

export default router;
