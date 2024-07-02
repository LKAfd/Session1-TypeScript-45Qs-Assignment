// Alien Colors #3: Turn your if-else chain from Exercise 26 into an extended if-else chain.
// First version: alien_color is 'green'
var alienColor1 = "green";
// If-else chain to determine the points earned based on alien_color
if (alienColor1 === "green") {
    console.log("The player earned 5 points."); // This message will be printed for green.
}
else if (alienColor1 === "yellow") {
    console.log("The player earned 10 points."); // This message will not be printed for green.
}
else if (alienColor1 === "red") {
    console.log("The player earned 15 points."); // This message will not be printed for green.
}
// Second version: Change the alien_color to 'yellow'
var alienColor2 = "yellow";
// If-else chain to determine the points earned based on alien_color
if (alienColor2 === "green") {
    console.log("The player earned 5 points."); // This message will not be printed for yellow.
}
else if (alienColor2 === "yellow") {
    console.log("The player earned 10 points."); // This message will be printed for yellow.
}
else if (alienColor2 === "red") {
    console.log("The player earned 15 points."); // This message will not be printed for yellow.
}
// Third version: Change the alien_color to 'red'
var alienColor3 = "red";
// If-else chain to determine the points earned based on alien_color
if (alienColor3 === "green") {
    console.log("The player earned 5 points."); // This message will not be printed for red.
}
else if (alienColor3 === "yellow") {
    console.log("The player earned 10 points."); // This message will not be printed for red.
}
else if (alienColor3 === "red") {
    console.log("The player earned 15 points."); // This message will be printed for red.
}
