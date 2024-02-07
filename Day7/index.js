// Problem Statement: Implement an Express middleware function that logs the timestamp and the HTTP method of every incoming request to the server.

const express = require('express');
const app = express();

function requestLoggerMiddleware(req, res, next) {
  const timestamp = new Date().toISOString();
  const method = req.method;
  console.log(`${timestamp} - ${method} request received`);
  next();
}

app.use(requestLoggerMiddleware);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
