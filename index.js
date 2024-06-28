const express = require('express');
const cors = require('cors');
const body_parser = require('body-parser');

const server = express();

// Routers
const profileRouter = require("./Routers/profile");

server.use(body_parser.json());
server.use(cors());
server.use(express.static("build"));
server.use('/api/profiles', profileRouter);

server.listen(3300, (() => {
    console.log('[ Express ] - 3300 portu dinleniyor.');
}))

// Mongoose Connection
require('./Others/mongooseConnection').Init()