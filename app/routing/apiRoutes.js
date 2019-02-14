var friends = require("../data/friends");


// Routes
// =============================================================
module.exports = function(app) {
    // Route that gets the array of objects and returns JSON
    app.get("/api/friends", function(req, res) {
        return res.json(friends);
    });

    // Handle incoming survey results and compatability logic.
    app.post("/api/friends", function(req, res) {
        var newFriend = req.body;
        // newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
        var match;
        var difference = 40;
    
        console.log(newFriend);

        for (var i = 0; i < friends.length; i++){
            var total = 0;
            console.log("Checking friend: " + friends[i].name + " compatibility...");
            var friendsScores = friends[i].scores;
            console.log(friendsScores);
            friendsScores.forEach(function(score, index){
                total += Math.abs(parseInt(score) - parseInt(newFriend.scores[index]));
            });
            console.log(`Compatibility score: (${total})`);
            if (total < difference){
                difference = total;
                match = friends[i]
            }
        }
        console.log("Your closest friend is: " + match.name);
    
        friends.push(newFriend);
    
        res.json(match);
        console.log(friends);
    });
}  