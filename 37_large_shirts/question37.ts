// Define a function named make_shirt
function make_shirt(size: string = "Large", message: string = "I love TypeScript") {
    // Print a message indicating the selected size and message for the shirt
    console.log(`The shirt size is ${size} and it will have the message: "${message}" printed on it.`);
}

// Call the make_shirt function with default arguments
make_shirt();

// Call the make_shirt function with medium size and a default message
make_shirt("Medium");

// Call the make_shirt function with small size and a different message
make_shirt("Small",  "Code like a pro!");
