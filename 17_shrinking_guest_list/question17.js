// Initial guest list
var guestList = ["Liaqat", "Misbah", "Rahat", "Rafi", "Rasool"];
var unableToAttend = guestList[0]; // Guest who can't make it
console.log("".concat(unableToAttend, " can't make it to the dinner."));
// Replace the guest who can't make it with a new guest
guestList.splice(0, 1, "Asif");
// print
console.log("Good News! We found a bigger dinner table, so now more space is available.");
// Adding new value at starting index of array
guestList.unshift("Sudais");
// Get a middie index of our Guest list array
var middleIndex = Math.floor(guestList.length / 2);
// Adding a new Guest to the middle index of array
guestList.splice(middleIndex, 0, "Tariq");
// Adding a new Guest to the end index of array
guestList.push("Imran");
// print new set of invitation
console.log("New invitation list of our Guest");
// sending invitation message
guestList.forEach(function (guest) { return console.log("Assalam-u-Alaikum ".concat(guest, ", would you like to dinner with me")); });
// Only two guest can be invited due to table space limitations
console.log("Unfortunately, I can invite only two people for dinner.");
// Remove guests one by one until only two names remain in the list
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry, ".concat(removedGuest, ", I can't invite you to dinner."));
}
// Notify the remaining guests that they are still invited
console.log("Invitations to the last two Guests");
guestList.forEach(function (lasttwo) { return console.log("Luckly ".concat(lasttwo, ", you are still invited to dinner.")); });
// Removing last two guests from the list
guestList.pop();
guestList.pop();
// Print the list to ensure it is empty
console.log("Guest list after removing all guests:", guestList);
