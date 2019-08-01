const express = require('express'); 
const router = require('./routes.js');

const server = express();

server.use(express.json());

server.use('/api', router);

server.get('/', (req, res) => {
    res.send(`<p> I AM WORKING </p> `)
})

module.exports = server;