const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/productRoutes");
const dotenv = require("dotenv");
dotenv.config({ path: "backend/.env" });

const server = express();

server.use(express.json());

server.use((req, res, next) => {
  console.log(req.method + " : " + req.path);
  next();
});

server.use("/products", productRoutes);

const DATABASE = process.env.DATABASE_URL.replace(
  "<db_password>",
  process.env.DATABASE_PASSWORD
);

const port = 5000;

mongoose
  .connect(DATABASE)
  .then(() => {
    console.log("Database connection established !");

    server.listen(port, () => {
      console.log(`Server is running on port: ${port}...`);
    });
  })

  .catch((err) => {
    console.log(err);
  });
