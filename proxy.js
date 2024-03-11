const express = require('express');
const cors = require('cors');
const proxy = require('express-http-proxy');

const PORT = 3000;

const app = express();

app.use(cors());

app.use('/', proxy('http://localhost'));

app.listen(PORT, () => {
    console.log(`Proxy server is running ${PORT}`)
});
