require('dotenv').config();

const server = require('./server.js');

server.listen(4000, console.log('We are running on port 4000'));