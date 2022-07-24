import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";

import userRoutes from "./Routes/userRoutes";
import restaurantRoutes from "./Routes/restaurantRoutes";
import menuRoutes from "./Routes/menuRoutes";

const app: Application = express();
dotenv.config({ path: "./.env" });
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

require("./server.ts");

app.use("/user", userRoutes);
app.use("/restaurant", restaurantRoutes);
app.use("/menu", menuRoutes);

app.listen(port, () => {
  console.log(`running on port ${port}`);
});
