var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {
    // Basic route that sends the user first to the Home Page
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    // Route that sends the user to survey page
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
}