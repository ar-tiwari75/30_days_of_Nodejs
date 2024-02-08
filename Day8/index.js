// Problem Statement: Create an Express route that throws an error if the request parameter "number" is not a positive integer. Implement an error handling middleware to catch and handle this specific error, returning a custom error message and a 400 Bad Request status.

const express = require('express');
const app = express();

app.get('/positive', positiveIntegerHandler);

function positiveIntegerHandler(req, res, next){
    const number = parseInt(req.query.number);

  if (Number.isInteger(number) && number > 0) {
    // Return success message
    res.status(200).json({ message: 'Success: Positive integer received.' });
  } else {
    // Trigger an error
    const error = new Error('Invalid input: number must be a positive integer.');
    error.status = 400;
    next(error);
  }
}

// Error handling middleware
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    error: {
      message: err.message || 'Internal Server Error'
    }
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});