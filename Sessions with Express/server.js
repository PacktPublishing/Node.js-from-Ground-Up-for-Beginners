const express = require('express');
const helmet  = require('helmet');
const session = require('express-session');

const app = express();

app.use(helmet());
app.use(session({secret: 'mySecret', cookie: {maxAge: 10000}}));

app.get('/', function(req, res) {

    if (req.session.views) {

        req.session.views++;

    } else {

        req.sessions.view = 1;

    }

});