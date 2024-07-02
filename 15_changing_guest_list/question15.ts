// Initial guest list
let guestList = ["Liaqat", "Misbah", "Rahat", "Rafi", "Rasool"];

let unableToAttend = guestList[0]; // Guest who can't make it
console.log(`${unableToAttend} can't make it to the dinner.`);

// Replace the guest who can't make it with a new guest
guestList.splice(0, 1, "Asif");
// print
guestList.forEach(guest => console.log(`Assalam-u-Alaikum ${guest}, would you like to Dinner with me?`));
