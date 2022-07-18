import mongoose from "mongoose";

mongoose
  .connect(
    `mongodb+srv://${process.env.DBUSERNAME}:${process.env.DBPASSWORD}@cluster0.zcn5q.mongodb.net/test`
  )
  .then((): void => console.log("Connected to DB ✅"));
