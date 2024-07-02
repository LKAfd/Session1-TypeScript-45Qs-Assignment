var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Stores information about a car in an object.
function store_car_info(manufacturer, model, options) {
    var car = __assign({ manufacturer: manufacturer, model: model }, options);
    return car;
}
// Call the function with required information and two other name-value pairs
var car1 = store_car_info('Toyota', 'Camry', { color: 'Blue', sunroof: true });
var car2 = store_car_info('Honda', 'Civic', { color: 'Red', navigation: true });
var car3 = store_car_info('Tesla', 'Model S', { color: 'Black', autopilot: true });
// Print the objects to make sure all the information was stored correctly
console.log(car1);
console.log(car2);
console.log(car3);
