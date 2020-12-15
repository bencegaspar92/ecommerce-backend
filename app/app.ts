import express = require('express');

// Create a new express application instance
const app: express.Application = express();

// Connect to MySQL database
let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ecommerce_db'
})

connection.connect((err: any) => {
   if (err) {
       return console.error('error: ' + err.message);
   }
});

console.log('Connected to the MySQL server.');

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
