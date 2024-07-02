// Define an interface for Mountain to ensure type safety and consistency
interface Mountain {
    name: string;
    height: number; // height in meters
    location: string;
}

// Create objects for famous mountains in Pakistan
const k2: Mountain = {
    name: "K2",
    height: 8611,
    location: "Karakoram Range"
};

const nangaParbat: Mountain = {
    name: "Nanga Parbat",
    height: 8126,
    location: "Himalayas"
};

const gasherbrumI: Mountain = {
    name: "Gasherbrum I",
    height: 8080,
    location: "Karakoram Range"
};

const broadPeak: Mountain = {
    name: "Broad Peak",
    height: 8051,
    location: "Karakoram Range"
};

const gasherbrumII: Mountain = {
    name: "Gasherbrum II",
    height: 8035,
    location: "Karakoram Range"
};

// Store all mountain objects in an array
const famousMountains: Mountain[] = [k2, nangaParbat, gasherbrumI, broadPeak, gasherbrumII];

// Function to display information about each mountain
function displayMountains(mountains: Mountain[]): void {
    mountains.forEach(mountain => {
        console.log(`Name: ${mountain.name}`);
        console.log(`Height: ${mountain.height} meters`);
        console.log(`Location: ${mountain.location}`);
        console.log('---------------------------------');
    });
}

// Display information about famous mountains in Pakistan
displayMountains(famousMountains);
