var express = require("express");

var router = express.Router();


// Basic route that sends the user first to the AJAX Page
router.get("/", function(req, res) {
    // res.sendFile(path.join(__dirname, "view.html"));
    var logger = req.app.get('logger');
    logger.info("we are now in the root route!");
    res.send(`
        <h1>Welcome</h1>
    
    `);
  });

module.exports = router;