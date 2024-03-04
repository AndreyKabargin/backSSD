const express = require('express');
const proxy = require('express-http-proxy');
const app = express();
const port = 2222;

app.use(
    '/',
    proxy('http://localhost/SSD_Postgres/hs/SSD/', {
        proxyReqPathResolver: (req) => {
            console.log(req.url);
            return req.url;
        },
    })
);

app.listen(port, () => {
    console.log(`Server is running ${port}`)
});
