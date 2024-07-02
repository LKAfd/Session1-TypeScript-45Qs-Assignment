// Prints the name of each magician in the given array.
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Returns a new array of magicians by adding "the Great" to each magician's name.
function make_great(magicians: string[]): string[] {
    let greatMagicians: string[] = [];
    for (let magician of magicians) {
        greatMagicians.push(`the Great ${magician}`);
    }
    return greatMagicians;
}

// Create an array of magician's names
let originalMagicians: string[] = ['Liang', 'Qiang', 'Mei', 'Shun', 'Zhen'];

// Create a new array with "the Great" added to each magician's name
let greatMagicians: string[] = make_great([...originalMagicians]); // Use spread operator to pass a copy

// Print the original array of magician names
console.log("Original Magicians:");
show_magicians(originalMagicians);

// Print the new array of modified magician names
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
