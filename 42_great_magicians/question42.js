// Prints the name of each magician in the given array.
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
// Modifies the array of magicians by adding "the Great" to each magician's name.
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great ".concat(magicians[i]);
    }
}
// Create an array of magician's names
var magicianNames = ['Liang', 'Qiang', 'Mei', 'Shun', 'Zhen'];
// Modify the array by adding "the Great" to each magician's name
make_great(magicianNames);
// Print each modified magician name to show the changes
show_magicians(magicianNames);
