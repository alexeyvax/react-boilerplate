const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');

const data = require('../config');
const getDataController = require('./controllers/getData');

const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get(data.endpoints.GET_TEST_DATA, getDataController);

app.listen(9000, () => console.info('server running at http://localhost:9000/'));
