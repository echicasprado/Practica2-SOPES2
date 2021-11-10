const express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');
var corsOptions = { origin: true, optionsSuccessStatus: 200 };

const app = express();

app.use(cors(corsOptions));
app.use(bodyParser.json({ limit: '50mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use(require('./routes/Mensajes.routes'));

require('./database');
app.listen(5000);
console.log('Server on port  5000');