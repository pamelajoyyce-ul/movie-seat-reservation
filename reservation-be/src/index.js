const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const movies = require('./movies');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'reservation',
  password : 'password',
  database : 'reservation'
});

connection.connect();

const port = process.env.PORT || 8080;

const app = express()
  .use(cors())
  .use(bodyParser.json())
  .use(movies(connection));

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});

// app.use(express.json({type: 'multipart/form-data'}));