require("dotenv").config({ path: "./.env" });
const express = require("express");
const cors = require("cors");
const userRoutes = require("./Routes/userRoutes");

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

require("./server.js");

app.use("/user", userRoutes);

app.listen(port, () => {
  console.log(`running on port ${port}`);
});
