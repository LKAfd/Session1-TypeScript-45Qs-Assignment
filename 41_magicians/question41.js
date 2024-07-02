// Prints the name of each magician in the given array.
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
// Create an array of magician's names
var magicianNames = ['Liang', 'Qiang', 'Mei', 'Shun', 'Zhen'];
// Pass the array to the show_magicians function to print each name
show_magicians(magicianNames);
