// Stores information about a car in an object.
function store_car_info(manufacturer: string, model: string, options: { [key: string]: any }): { manufacturer: string, model: string, [key: string]: any } {
    let car = {
        manufacturer,
        model,
        ...options
    };
    return car;
}

// Call the function with required information and two other name-value pairs
let car1 = store_car_info('Toyota', 'Camry', { color: 'Blue', sunroof: true });
let car2 = store_car_info('Honda', 'Civic', { color: 'Red', navigation: true });
let car3 = store_car_info('Tesla', 'Model S', { color: 'Black', autopilot: true });

// Print the objects to make sure all the information was stored correctly
console.log(car1);
console.log(car2);
console.log(car3);
