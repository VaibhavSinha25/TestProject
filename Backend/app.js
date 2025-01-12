const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "../config.env" });
const app = express();


app.use(cors());
app.use(express.json());

const db = process.env.DATABASE_URL.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  
  console.log("Connected to MongoDB");
});


app.get("/", async (req, res) => {
  res.status(200).json({
  });
});

app.listen(process.env.PORT, () => {
  console.log("Server connected ");
});
