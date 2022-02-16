const express = require('express');
require('dotenv').config();
const bootcamp = require('./routes/bootcamp');

const app = express();
const PORT = process.env.PORT || 8080;


app.use('/api/v1/bootcamps', bootcamp);


app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} on port: ${PORT}`));