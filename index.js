const express = require("express");
const connectDB = require("./src/configs/DbConnect");
require("dotenv").config();
const errorHandler = require("./src/middlewares/errorHandler"); // Load environment variables from .env file
const profileRoutes = require("./src/routes/profileRoutes");

const app = express();

app.use(express.json());

app.use(errorHandler);

const port = process.env.PORT || 5000;

app.use("/api", profileRoutes);
/**
 * Start the application.
 * @function
 * @async
 */
const start = async () => {
  try {
    // Connect to the MongoDB database
    await connectDB(process.env.MONGO_URI);

    // Start the server
    app.listen(port, () =>
      console.log(`Server started at http://localhost:${port}`)
    );
  } catch (err) {
    console.log(`Error connecting to MongoDB: ${err}`);
  }
};

start();
