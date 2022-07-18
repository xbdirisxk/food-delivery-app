import express from "express";
import {
  getAll,
  getOne,
  create,
  edit,
  deleteRestaurant,
} from "../Controllers/restaurantController";

const router = express.Router();

router.route("/").get(getAll).post(create);
router.route("/:id").get(getOne).put(edit).delete(deleteRestaurant);

export default router;
