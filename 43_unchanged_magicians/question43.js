var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Prints the name of each magician in the given array.
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
// Returns a new array of magicians by adding "the Great" to each magician's name.
function make_great(magicians) {
    var greatMagicians = [];
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        greatMagicians.push("the Great ".concat(magician));
    }
    return greatMagicians;
}
// Create an array of magician's names
var originalMagicians = ['Liang', 'Qiang', 'Mei', 'Shun', 'Zhen'];
// Create a new array with "the Great" added to each magician's name
var greatMagicians = make_great(__spreadArray([], originalMagicians, true)); // Use spread operator to pass a copy
// Print the original array of magician names
console.log("Original Magicians:");
show_magicians(originalMagicians);
// Print the new array of modified magician names
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
