// Prints the name of each magician in the given array.
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Create an array of magician's names
let magicianNames: string[] = ['Liang', 'Qiang', 'Mei', 'Shun', 'Zhen'];

// Pass the array to the show_magicians function to print each name
show_magicians(magicianNames);
