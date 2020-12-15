"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
// Create a new express application instance
var app = express();
// Connect to MySQL database
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ecommerce_db'
});
connection.connect(function (err) {
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
// Compile application:
// npm run tsc
// Running the express:
// node build/app.js
