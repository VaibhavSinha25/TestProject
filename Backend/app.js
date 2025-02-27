const express = require("express");
const cors = require("cors");
const carRouter = require("./routes/carroutes");
const mongoose = require("mongoose");
const Car = require("./model/carModel");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = express();

app.use(cors());
app.use(express.json());

const db = process.env.DATABASE_URL.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  });

app.use("/", carRouter);

app.listen(process.env.PORT, () => {
  console.log("Server connected ");
});
