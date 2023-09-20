// Custom error handling middleware
const errorHandler = (err, req, res, next) => {
  console.error(err.stack); // Log the error stack for debugging purposes
  res.status(500).json({ error: "Something went wrong!" }); // Respond with a generic error message
};

module.exports = errorHandler;
