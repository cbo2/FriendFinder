var express = require("express");

var router = express.Router();

var path = require("path");

// Basic route that sends the user first to the AJAX Page
router.get("/", function (req, res) {
    var logger = req.app.get('logger');
    logger.info("we are now in the root route!");
    res.sendFile(path.join(__dirname, '../public', 'home.html'));

});

router.get("/survey", function (req, res) {
    var logger = req.app.get('logger');
    logger.info("we are now in the /survey route!  Will serve up: " + path.join(__dirname, '../public', 'survey.html'));
    res.sendFile(path.join(__dirname, '../public', 'survey.html'));
});
module.exports = router;