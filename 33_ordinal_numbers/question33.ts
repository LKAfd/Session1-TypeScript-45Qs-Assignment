// Store the numbers 1 through 9 in an array
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Loop through the array
for (const number of numbers) {
    // Declare an empty variable to store the ordinal suffix
    let ordinalSuffix: string;

    // Determine the appropriate ordinal suffix based on the number
    if (number === 1) {
        ordinalSuffix = 'st';   // 1st

    } else if (number === 2) {
        ordinalSuffix = 'nd';   // 2nd

    } else if (number === 3) {
        ordinalSuffix = 'rd';   // 3rd

    } else {
        // For all other numbers, use 'th' suffix
        ordinalSuffix = 'th';
    }

    // Print the number with the appropriate ordinal suffix
    console.log(`${number}${ordinalSuffix}`);
} 
