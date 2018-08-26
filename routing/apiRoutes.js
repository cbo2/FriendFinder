var express = require("express");

var router = express.Router();

var friends = require('../app/data/friends');

var Friend = require('../app/data/friend');

// Basic route that sends the user first to the AJAX Page
router.get("/api/friends", function (req, res) {
    // res.sendFile(path.join(__dirname, "view.html"));
    var logger = req.app.get('logger');
    logger.info(JSON.stringify(friends));
    var allFriends = "";
    friends.forEach(function (friend) {
        allFriends += `
            <tr>
                <td>${friend.name}</td>
                <td>${friend.photo}</td>
                <td>${friend.scores}</td>
            </tr>
        `;
    });
    res.send(`
        <style>
            table, th, td {
                border: 1px solid black;
            }
        </style>
        <h1>Friends</h1>
        <table style="width: 100%">
        <tr>
            <th style="width: 25%">Name</th>
            <th style="width: 50%">Photo</th> 
            <th style="width: 25%">Scores</th>
        </tr>
        ${allFriends}
        </table>
    `);
});

router.post("/api/friends", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var logger = req.app.get('logger');

    var thisNewFriend = new Friend(req.body.name, req.body.photo, req.body.scores);
    // intially set the bestMatch to something rediculously high so all those that follow will be better
    var bestMatch = new Friend('nodbody', 'noPhoto', [20, 20, 20, 20, 20, 20, 20, 20, 20, 20]);

    // use the array reduce method to aggregate all 10 scores to a single number as bestScore
    var bestScore = bestMatch.scores.reduce(function (total, score) {
        return total + score;
    });
    logger.info("the initial bestScore is: " + bestScore);

    // iterate all friends array using the map function
    friends.map(function (friend) {
        var currentFriendTotalDiff = 0;
        var i = 0;
        // now iterate all the scores for this friend using the map function
        friend.scores.map(function (currentQuestionScore, i) {
            currentFriendTotalDiff += Math.abs(currentQuestionScore - req.body.scores[i]);
        });
        if (currentFriendTotalDiff < bestScore) {
            bestMatch = friend;
            bestScore = currentFriendTotalDiff;
            logger.debug("bestMatch is now: " + JSON.stringify(bestMatch));
        }
    });

    res.json(bestMatch);   // send the match info back to the client to display in the modal
    friends.push(thisNewFriend);   // add the new Friend that was posted in this call to the array
});

module.exports = router;