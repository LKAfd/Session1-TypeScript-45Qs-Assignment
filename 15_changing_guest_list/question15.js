// Initial guest list
var guestList = ["Liaqat", "Misbah", "Rahat", "Rafi", "Rasool"];
var unableToAttend = guestList[0]; // Guest who can't make it
console.log("".concat(unableToAttend, " can't make it to the dinner."));
// Replace the guest who can't make it with a new guest
guestList.splice(0, 1, "Asif");
// print
guestList.forEach(function (guest) { return console.log("Assalam-u-Alaikum ".concat(guest, ", would you like to Dinner with me?")); });
