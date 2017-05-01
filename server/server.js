const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const faker = require('faker');

const app = express();


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/', require('./routes/index'))

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
