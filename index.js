var express = require('express'),
    mongoose = require('mongoose'),
    timezone = require('mongoose-timezone'),
    app = express(),
    errorHandler = require('errorhandler'),
    bodyParser = require('body-parser'),
    config = require('./variables/application'),
    db = require('./app/db/dbconnections'),
    cors = require('cors'),
    server = require('http').createServer(app);
var morgan = require('morgan');

mongoose.Promise = Promise;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));
require('./app/approute/routes')(express, app);
var _port = process.env.PORT || config.serverPort;
app.set('port', _port);

server.listen(app.get('port'), function () {
    console.log('Node running on port', app.get('port'));
});
