// Define an array of usernames, including 'admin'
var userNames = ["admin", "Misbah", "Sameer", "Noman", "Asif"];
// Using forEach loop on array
userNames.forEach(function (oneUser) {
    // Check if the username is 'admin'
    if (oneUser === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        // Print a generic greeting for other users
        console.log("Hello ".concat(oneUser, ", thank you for logging in again."));
    }
});
