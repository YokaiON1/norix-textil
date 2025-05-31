require("dotenv").config();
const express = require("express");
const sequelize = require("./db"); 
const cors = require("cors");
const fileUpload = require("express-fileupload");
const models = require("./models/models");
const router = require("./router/index");
const errorHandler = require("./Middleware/ErrorHandlingMiddleware");
const path = require("path");

const app = express(); 
const port = process.env.PORT || 5000;

app.use(cors());  
app.use(express.json());
app.use(fileUpload({}));
app.use("/api", router); 
app.use(errorHandler); // Обработка ошибок, последний middleware

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(port, () => console.log(`server running on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
