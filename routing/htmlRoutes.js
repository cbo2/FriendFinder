var express = require("express");

var router = express.Router();

var path = require("path");

// express().use(express.static('public'));  // this will allow our public folder to be equivalent to / (root)

// Basic route that sends the user first to the AJAX Page
router.get("/", function (req, res) {
    // res.sendFile(path.join(__dirname, "view.html"));
    var logger = req.app.get('logger');
    logger.info("we are now in the root route!");
    res.sendFile(path.join(__dirname, '../public', 'home.html'));

});

router.get("/survey", function (req, res) {
    // res.sendFile(path.join(__dirname, "view.html"));
    var logger = req.app.get('logger');
    logger.info("we are now in the /survey route!  Will serve up: " + path.join(__dirname, '../public', 'survey.html'));
    res.sendFile(path.join(__dirname, '../public', 'survey.html'));
});
module.exports = router;