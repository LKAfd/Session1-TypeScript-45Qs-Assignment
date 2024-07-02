// Prints a summary of the sandwich being ordered.
function order_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("You have ordered a sandwich with the following items:");
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        console.log("- ".concat(item));
    }
    console.log(); // Add a newline for better readability between orders
}
// Call the function three times with different numbers of arguments
order_sandwich('Chicken Tikka', 'Mint Chutney', 'Onions'); // Making a sandwich with Chicken Tikka, Mint Chutney, and Onions
order_sandwich('Chapli Kebab', 'Raita (Yogurt Sauce)', 'Tomatoes'); // Making a sandwich with
order_sandwich('Boiled Eggs', 'Mayonnaise', 'Lettuce'); // Making a sandwich with
