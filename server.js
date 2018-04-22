const express = require('express');
const bodyParser = require('body-parser');
const data = require('./config');

const app = express();
const router = express.Router();

const getDataController = require('./server/controllers/getData');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router.get(data.config.GET_TEST_DATA, getDataController.getData);

app.use(data.config.API_PREFIX, router);

app.listen(9001, () => console.info('server running at http://localhost:9001/'));
