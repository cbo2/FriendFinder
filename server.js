// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var winston = require("winston");   // use winston for logging to a file and the console

// create winston loggers and initially set levels to deeper values
const transports = {
  console: new winston.transports.Console({
    level: 'info',
    format: winston.format.simple()
  }),
  file: new winston.transports.File({
    filename: 'log.txt',
    format: winston.format.simple(),
    level: 'error'
  })
};

const logger = winston.createLogger({
  transports: [
    transports.console,
    transports.file
  ]
});

// Sets up the Express App
// =============================================================
var app = express();
app.set('port', process.env.PORT || 3000);
app.set('logger', logger);
app.set('path', path);

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use(express.static(path.join(__dirname, 'public')));  // this will allow our public folder to be equivalent to / (root)
app.use(express.static('public'));  // this will allow our public folder to be equivalent to / (root)
app.use(require('./routing/htmlRoutes'));
app.use(require('./routing/apiRoutes'));

// app.get("/survey", function (req, res) {
//     // res.sendFile(path.join(__dirname, "view.html"));
//     var logger = req.app.get('logger');
//     logger.info("we are now in the root route!");
//     res.sendFile('/survey.html');
// });

var server = app.listen(app.get('port'), function() {
    logger.info("Listening on port: " + app.get('port'));
});