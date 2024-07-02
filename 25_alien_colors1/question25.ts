// Alien Colors #1: Imagine an alien was just shot down in a game.

// Define a variable 
let alien_color: string = 'green';

// First version: The if statement test passes (alien_color is 'green').
if (alien_color === 'green') {
    console.log("The player just earned 5 points."); // This message will be printed.
}

// Change the alien_color to 'red' to create a version that fails the if test.
alien_color = 'red';

// Second version: The if statement test fails (alien_color is 'red').
if (alien_color === 'green') {
    console.log("The player just earned 5 points."); // This message will not be printed.
}
