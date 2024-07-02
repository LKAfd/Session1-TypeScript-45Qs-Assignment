// Create an array to store the locastions I would like to visit.
// Ensure the array is not in alphabetical order.
let countriesToVisit: string[] = ["Saudi Arabia", "Palestine", "Afghanistan", "Egypt", "Lybia"];
// Print the array its original order
console.log("Original Order:", countriesToVisit);

// Print the array in alphabetical order without modifying the actual array list
console.log("Alphabetical Order:", [...countriesToVisit].sort());

// Show that the array is still in its original order
console.log("Still in Original Order:", countriesToVisit);

// Print the array in reversed order without modifying the actual array list
console.log("Reverse Order:", [...countriesToVisit].reverse());

// Show that the array is still in its original order
console.log("Still in Original Order:", countriesToVisit);

// We have changed the original array order now
console.log("Original Array Reversed:", countriesToVisit.reverse());

// Print the array to show that its back to it's original order
console.log("Back to Original Order:", countriesToVisit.reverse());

// Print the array to show that its order has been changed in Alphabetical Order
console.log("Sorted in Alphabetical Order:", countriesToVisit.sort());

// We have changed again the original array order now in reverse order again
console.log("Original Array Reversed Again:", countriesToVisit.reverse());