// Alien Colors #2: Choose a color for an alien as in Exercise 25 and write an if-else chain.

// Define variable 
let alien_color: string = "green";

// First version: 
if (alien_color === "green") {
    console.log("The player just earned 5 points for shooting the alien."); // This message will be printed.
} else {
    console.log("The player just earned 10 points."); // This message will not be printed.
}

// Change the alien_color to 'yellow' to create a version that runs the else block.
alien_color = "yellow";

// Second version: The if statement test fails (alien_color is not 'green'), so the else block will run.
if (alien_color === "green") {
    console.log("The player just earned 5 points for shooting the alien."); // This message will not be printed.
} else {
    console.log("The player just earned 10 points."); // This message will be printed.
}
