import express from "express";
import { login, signUp } from "../Controllers/userController";

const router = express.Router();

router.route("/signup").post(signUp);
router.route("/login").post(login);

export default router;
