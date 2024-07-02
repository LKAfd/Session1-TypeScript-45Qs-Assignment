// Prints the name of each magician in the given array.
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Modifies the array of magicians by adding "the Great" to each magician's name.
function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `the Great ${magicians[i]}`;
    }
}

// Create an array of magician's names
let magicianNames: string[] = ['Liang', 'Qiang', 'Mei', 'Shun', 'Zhen'];

// Modify the array by adding "the Great" to each magician's name
make_great(magicianNames);

// Print each modified magician name to show the changes
show_magicians(magicianNames);
