import express from "express";
import { getAll, add, edit, remove } from "../Controllers/menuController";

const router = express.Router();

router.route("/").get(getAll).post(add);
router.route("/:id").put(edit).delete(remove);

export default router;
