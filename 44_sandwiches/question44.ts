// Prints a summary of the sandwich being ordered.
function order_sandwich(...items: string[]): void {
    console.log("You have ordered a sandwich with the following items:");
    for (let item of items) {
        console.log(`- ${item}`);
    }
    console.log(); // Add a newline for better readability between orders
}

// Call the function three times with different numbers of arguments
order_sandwich('Chicken Tikka', 'Mint Chutney', 'Onions');  // Making a sandwich with Chicken Tikka, Mint Chutney, and Onions
order_sandwich('Chapli Kebab', 'Raita (Yogurt Sauce)', 'Tomatoes');  // Making a sandwich with
order_sandwich('Boiled Eggs', 'Mayonnaise', 'Lettuce');  // Making a sandwich with
