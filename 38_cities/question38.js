// Function to describe the location of a city in a specified country.
function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
// Calling the function for three different cities
describe_city("Karachi"); // Default country
describe_city("Peshawer"); // Default country
describe_city("Kabul", "Afghanistan"); // Specified country