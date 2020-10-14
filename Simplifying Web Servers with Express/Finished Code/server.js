/*
  If you want to run this finished called you need to install express and helmet into this directory by running
  'npm install' in the same way you did for the baseline code folder.
 */

const express = require('express');
const helmet  = require('helmet');

const app = express();
app.use(helmet());

app.use( (req, res, next) => {

    console.log("Request made at time: ", Date.now());

    next();

});

app.get('/', (req, res) => {

    res.sendFile(__dirname + '/index.html');

});

app.use('/assets', (req, res, next) => {

    console.log("Serving a file from the assets directory");

    next();

}, express.static('assets'));

app.listen(8080);