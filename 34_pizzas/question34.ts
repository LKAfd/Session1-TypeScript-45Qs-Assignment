// Define an array to store the names of my favorite pizzas
let favoritePizzas: string[] = ["Arabian Green", "Afghani Feast", "Creamy Cheese Pepperoni"];

// Loop through each pizza name in the array
for (let pizza of favoritePizzas) {
    // Print a sentence about each pizza
    if (pizza === "Arabian Green") {
        console.log("I enjoy the exotic flavors of Arabian Green pizza.");
    } else if (pizza === "Afghani Feast") {
        console.log("I love the rich and aromatic spices of Afghani Feast pizza.");
    } else if (pizza === "Creamy Cheese Pepperoni") {
        console.log("I can't resist the creamy cheese and pepperoni combination on the Creamy Cheese Pepperoni pizza.");
    }
}

// Add an additional statement outside the loop expressing my love for pizza
console.log("I really love pizza! It brings so much joy and deliciousness to my life.");
