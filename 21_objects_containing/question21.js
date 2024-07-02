// Create objects for famous mountains in Pakistan
var k2 = {
    name: "K2",
    height: 8611,
    location: "Karakoram Range"
};
var nangaParbat = {
    name: "Nanga Parbat",
    height: 8126,
    location: "Himalayas"
};
var gasherbrumI = {
    name: "Gasherbrum I",
    height: 8080,
    location: "Karakoram Range"
};
var broadPeak = {
    name: "Broad Peak",
    height: 8051,
    location: "Karakoram Range"
};
var gasherbrumII = {
    name: "Gasherbrum II",
    height: 8035,
    location: "Karakoram Range"
};
// Store all mountain objects in an array
var famousMountains = [k2, nangaParbat, gasherbrumI, broadPeak, gasherbrumII];
// Function to display information about each mountain
function displayMountains(mountains) {
    mountains.forEach(function (mountain) {
        console.log("Name: ".concat(mountain.name));
        console.log("Height: ".concat(mountain.height, " meters"));
        console.log("Location: ".concat(mountain.location));
        console.log('---------------------------------');
    });
}
// Display information about famous mountains in Pakistan
displayMountains(famousMountains);
