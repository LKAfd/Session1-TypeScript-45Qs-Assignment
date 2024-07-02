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

