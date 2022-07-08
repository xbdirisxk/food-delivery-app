const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: "./.env" });

const userRoutes = require("./Routes/userRoutes");
const restaurantRoutes = require("./Routes/restaurantRoutes");
const menuRoutes = require("./Routes/restaurantRoutes");

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

require("./server.js");

app.use("/user", userRoutes);
app.use("/restaurant", restaurantRoutes);
app.use("/menu", menuRoutes);

app.listen(port, () => {
  console.log(`running on port ${port}`);
});
