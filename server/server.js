const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const faker = require('faker');
const app = express();

const routes = require('./config/routes')
const mongoose = require('./config/database')

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,'public')));

const port = process.env.PORT || 3001;


app.use('/', routes);

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
