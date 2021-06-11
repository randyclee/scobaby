const express = require('express');
const app = express();
let port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('Its working!')
});

app.listen(port, () => {
   console.log('now listening for requests');
});
