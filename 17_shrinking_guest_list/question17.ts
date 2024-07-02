// Initial guest list
let guestList = ["Liaqat", "Misbah", "Rahat", "Rafi", "Rasool"];

let unableToAttend = guestList[0]; // Guest who can't make it
console.log(`${unableToAttend} can't make it to the dinner.`);

// Replace the guest who can't make it with a new guest
guestList.splice(0, 1, "Asif");
// print
console.log("Good News! We found a bigger dinner table, so now more space is available.");

// Adding new value at starting index of array
guestList.unshift("Sudais");

// Get a middie index of our Guest list array
let middleIndex: number = Math.floor(guestList.length / 2);
// Adding a new Guest to the middle index of array
guestList.splice(middleIndex, 0, "Tariq");

// Adding a new Guest to the end index of array
guestList.push("Imran");

// print new set of invitation
console.log("New invitation list of our Guest");
// sending invitation message
guestList.forEach(guest => console.log(`Assalam-u-Alaikum ${guest}, would you like to dinner with me`));

// Only two guest can be invited due to table space limitations
console.log("Unfortunately, I can invite only two people for dinner.");

// Remove guests one by one until only two names remain in the list
while(guestList.length > 2) {
    let removedGuest = guestList.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}

// Notify the remaining guests that they are still invited
console.log("Invitations to the last two Guests");
guestList.forEach(lasttwo => console.log(`Luckly ${lasttwo}, you are still invited to dinner.`));

// Removing last two guests from the list
guestList.pop();
guestList.pop();

// Print the list to ensure it is empty
console.log("Guest list after removing all guests:", guestList);