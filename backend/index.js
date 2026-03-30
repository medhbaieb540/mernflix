const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
require('./config/connect.js');
const port = 3000;
const movieroutes = require('./routes/movieroutes.js');
app.use('/', movieroutes);

app.listen(port, () => {
  console.log(`Server is running → http://localhost:${port}`)
});