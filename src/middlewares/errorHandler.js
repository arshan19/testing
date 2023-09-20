// src/middlewares/errorHandler.js

// Custom error handling middleware
const errorHandler = (err, req, res, next) => {
  // Log the error for debugging (optional)
  console.error(err);

  // Default error status and message
  let statusCode = 500;
  let errorMessage = "Internal Server Error";

  // Customize error response based on the type of error
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    // Handle JSON parsing error
    statusCode = 400;
    errorMessage = "Invalid JSON";
  } else if (err instanceof CustomError) {
    // Handle custom application-specific errors (if needed)
    statusCode = err.status;
    errorMessage = err.message;
  }

  // Send the error response to the client
  res.status(statusCode).json({ error: errorMessage });
};

module.exports = errorHandler;
