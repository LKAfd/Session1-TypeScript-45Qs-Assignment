// Create an array of numbers
let numbers: number[] = [10, 20, 30, 40, 50];

try {
    // Intentionally access an invalid index (index 10, which doesn't exist in the array)
    console.log("Accessing an invalid index:", numbers[10]);
} catch (error) {
    console.error("An error occurred:", error);
}

// Correct the error by accessing a valid index
// Accessing the first element (index 0)
console.log("Accessing a valid index (first element):", numbers[0]);

// Accessing the mid element (index 2)
console.log("Accessing a valid index (mid element):", numbers[2]);

// Accessing the last element (index length-1)
console.log("Accessing a valid index (last element):", numbers[numbers.length - 1]);

