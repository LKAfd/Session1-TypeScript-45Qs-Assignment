// List of current users
let currentUsers = ["Liaqat", "Misbah", "Noman", "sameer", "Luqman"];

// List of new users
let newUsers = ["Adil", "Rafi", "Rahat", "Asif", "Sameer"];

// Loop to check if new usernames are available
newUsers.forEach(newOneUser => { 

    // Making a condition for username already exit and save in our condition variable
    let our_condition = currentUsers.some(currentOneUser => currentOneUser.toLowerCase() === newOneUser.toLowerCase());

    // Check if the new username is already used
    if (our_condition){
        console.log(`The username ${newOneUser} is already taken. Please enter a new username.`);
    }else{
        console.log(`The username ${newOneUser} is available.`);
    }
})
