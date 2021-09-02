require("dotenv").config();
require('./src/utils/database');

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require("helmet");

const routes = require('./src/v1/routes');

const app = express();

// cors 
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan('common'));

app.use('/v1', routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`server is running on port ${PORT}`);
});