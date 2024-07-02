// List of current users
var currentUsers = ["Liaqat", "Misbah", "Noman", "sameer", "Luqman"];
// List of new users
var newUsers = ["Adil", "Rafi", "Rahat", "Asif", "Sameer"];
// Loop to check if new usernames are available
newUsers.forEach(function (newOneUser) {
    // Making a condition for username already exit and save in our condition variable
    var our_condition = currentUsers.some(function (currentOneUser) { return currentOneUser.toLowerCase() === newOneUser.toLowerCase(); });
    // Check if the new username is already used
    if (our_condition) {
        console.log("The username ".concat(newOneUser, " is already taken. Please enter a new username."));
    }
    else {
        console.log("The username ".concat(newOneUser, " is available."));
    }
});
