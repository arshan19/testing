// errorHandler.js

const errorHandler = (err, req, res, next) => {
  if (err) {
    console.error(err);

    // Default to 500 (Internal Server Error)
    let statusCode = err.statusCode || 500;
    let errorMessage = err.message || "Internal Server Error";

    // Check for specific error types and customize the response
    if (err.name === "ValidationError") {
      // Handle Mongoose validation errors (e.g., required fields)
      statusCode = 400;
      errorMessage = "Validation Error";
    } else if (err.name === "CastError") {
      // Handle Mongoose cast errors (e.g., invalid ObjectId)
      statusCode = 400;
      errorMessage = "Invalid ID";
    }

    res.status(statusCode).json({ error: errorMessage });
  } else {
    next(); // If no error, pass control to the next middleware
  }
};

module.exports = errorHandler;
