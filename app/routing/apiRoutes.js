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
        newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
    
        console.log(newFriend);
    
        friends.push(newFriend);
    
        res.json(newFriend);
    });
}  