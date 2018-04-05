const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const getDataController = require('./server/controllers/getData');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/get-test-data', getDataController.getData);

app.listen(9001, () => console.info('server running at http://localhost:9001/'));
