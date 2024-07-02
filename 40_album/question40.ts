// Define a type for the album object
function make_album(artist: string, title: string, tracks?: number):  { artist: string, title: string, tracks?: number } {
    let album: { artist: string, title: string, tracks?: number } = { artist, title };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}

// Create three album objects using make_album function
let album1 = make_album('Atif Aslam', 'Jal Pari');
let album2 = make_album('Bilal Khan', 'Umeed');
let album3 = make_album('Hadiqa Kiani', 'Raaz', 6); // includes the number of tracks

// Print each album object to show that the objects are storing the album information correctly
console.log(album1);
console.log(album2);
console.log(album3);

// Create another album object with the number of tracks
let album4 = make_album('Abida Parveen', 'Tere Ishq Nachaya', 4);

// Print the album object with the number of tracks
console.log(album4);
