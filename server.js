const express = require('express');


const app = express();


const PORT = 8080;

// create a route for the app
app.get('/', (req, res) => {
  res.send('Hello World');
});


app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${8080}/`);
});