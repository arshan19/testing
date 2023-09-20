const express = require("express");
const connectDB = require("./src/DbConnection/connect");
require("dotenv").config({ path: "./src/configs/.env" });
const errorHandler = require("./src/middlewares/errorHandler"); // Load environment variables from .env file

const app = express();

app.use(express.json());

app.use(errorHandler);

const port = process.env.PORT || 5000;

// Define your MongoDB models, routes, and application logic here

// Define a route
app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

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
