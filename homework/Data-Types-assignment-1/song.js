/*
Pirple Homework Assignment #1: Data Types
  By Nikolas Roberts
In this assignment I will be creating (and logging)
multiple variables to list a variety of
attributes describing one of my favorite songs
The song I've chosen for this assignment is
"Morph" by Twenty One Pilots
*/

// Name of song
const name = 'Morph';
// Length of song
const length = '4:19';
// Length of song in seconds
// (Calculated by multiplying the minutes(4) by 60 and adding the seconds(19))
const lengthInSeconds = (60 * 4) + 19;
// Length of song in milliseconds
// (Calculated by multiplying the length in seconds by 1000)
const lengthInMilliseconds = lengthInSeconds * 1000;
// Name of the artist
const artist = 'Twenty One Pilots';
// Array of credited songwriters
const writers = ['Tyler Joseph', 'Pual Meany'];
// Same as the writers
const producers = writers;
// Name of the album the song is featured on
const album = 'Trench';
// Track number of the song on the album
const trackNumber = 3;
// Lyrics to the chorus on the song 
const chorusLyrics = `
  If I keep moving, they wont know
  I'll morph to someone else
  What they throw at me's too slow
  I'll morph to someone else
  I'm just a ghost
  I'll morph to someone else
  Defense mechanism mode
`;
// Genres commonly associated with the band
let genres = [
  'Alternative HipHop',
  'ElectroPop',
  'Indie Pop',
  'Pop Rock',
  'Rap Rock',
  'Alternative Rock',
];
// If the song is available on streaming platforms such as Spotify, Tidal, etc.
let isOnStreamingPlatforms = true;
// Whether the song has an associated music video (unfortunately no :| )
let hasMusicVideo = false;
// Whether the song is AWESOME or not (It obviously is)
const isAwesome = true; // Very true
// Year the song was released
const yearReleased = 2018;
// Hometown of the band
const homeTown = 'Columbus, Ohio';
// Whether the band is still active and making music
let isStillActive = true;
// Record labels the band is/has-been signed to
let recordLabels = [
  'Fueled by Ramen',
  'WEA International',
  'Atlantic',
];
// Members of the band
let bandMembers = {
  currentMembers: {
    leadVocals: 'Tyler Joseph',
    drums: 'Josh Dun',
  },
  pastMembers: ['Nick Thomas', 'Chris Salih']
};


console.log(`Name: ${name}`);
console.log(`Length: ${length}`);
console.log(`Length in seconds: ${lengthInSeconds}`);
console.log(`Length in milliseconds: ${lengthInMilliseconds}`);
console.log(`Artist: ${artist}`);
console.log(`Songwriters: ${writers}`);
console.log(`Producers: ${producers}`);
console.log(`Album: ${album}`);
console.log(`Track Number: ${trackNumber}`);
console.log(`Chorus Lyrics: ${chorusLyrics}`);
console.log(`Genres: ${genres}`);
console.log(`Streaming: ${isOnStreamingPlatforms}`);
console.log(`Music Video: ${hasMusicVideo}`);
console.log(`Awesome: ${isAwesome}`);
console.log(`Year Released: ${yearReleased}`);
console.log(`Band Hometown: ${homeTown}`);
console.log(`Active: ${isStillActive}`);
console.log(`Record Labels: ${recordLabels}`);
console.log(`Band Members:`);
// Used to display the object as a browsable object as opposed to console.log printing '[object Object]'
console.log(bandMembers);