// Function to format the name of a city and its country.
function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

// Call the "city_country" function with different city-country pairs and print the returned value
console.log(city_country('Karachi', 'Pakistan')); 
console.log(city_country('Jeddah', 'Saudi Arabia')); 
console.log(city_country('Kandahar', 'Afghanistan')); 
