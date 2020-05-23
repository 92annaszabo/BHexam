const express = require('express');
const handlebars = require('express-handlebars');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = process.env.port || 4000
const db = new sqlite3.Database('database.db');

const hbshelpers = require("handlebars-helpers");
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.engine('handlebars', handlebars({
    extname: 'handlebars',
    defaultView: 'default',
    // layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/'
}));

app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))


app.listen(port, console.log(`App is listening on port ${port}`))