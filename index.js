const http = require('http');
const path = require('path');
const express = require('express');

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.static(path.join(__dirname, './public')));


new http.Server(app).listen(PORT, () => console.log(`server is up & running on ${PORT} port.`))