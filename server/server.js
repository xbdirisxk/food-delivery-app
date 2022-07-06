const mongoose = require("mongoose");

mongoose
  .connect(
    `mongodb+srv://${process.env.DBUSERNAME}:${process.env.DBPASSWORD}@cluster0.zcn5q.mongodb.net/test`
  )
  .then(console.log("Connected to DB ✅"));

// mongodb+srv://abdirisak:123@cluster0.zcn5q.mongodb.net/test
