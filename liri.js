// At the top of the liri.js file, add code to read and set any environment variables with the dotenv package:
require("dotenv").config();

var Spotify = require("node-spotify-api");
var Twitter = require("twitter");

// Add the code required to import the keys.js file and store it in a variable
var keys = require("./keys.js")

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

// make it so liri can take in one of the following commands

// my tweets=node liri.js my-tweets , should show last 20 tweets and when they were created at in terminal window

// spotify-this-song= node liri.js spotify-this-song '<song name here>", this wil show song info in terminal window: artist, 
// song name, preview link of song from spotify, album song is from, if no song provided use " the sign " ace of base


// movie-this

// do what it says

