var express = require("express");

var router = express.Router();

var friends = require('../app/data/friends');

// Basic route that sends the user first to the AJAX Page
router.get("/api/friends", function (req, res) {
    // res.sendFile(path.join(__dirname, "view.html"));
    var logger = req.app.get('logger');
    logger.info(JSON.stringify(friends));
    var allFriends = "";
    friends.forEach(function(friend) {
        allFriends += `
            <li>
                <h2>${friend.name}</h2>
                <h3>${friend.scores}</h3>
            </li>
        `;
    });
    res.send(`
        <h1>Friends</h1>
        ${allFriends}
    `);
});

router.post("/api/friends", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var logger = req.app.get('logger');
    var friendInfo = req.body;


    res.json(friendInfo);
});

module.exports = router;