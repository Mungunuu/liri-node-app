require('dotenv').config()
const commands = require('./commands')

// @example, node liri.js concert-this ladygaga
// Could be either "concert-this" or "this-song" or "movie-this"
var commandName = process.argv[2]

// It's name of the singer if it's concert-this
//      name of the song if it's this-song
//      name of the movie if it's movie-this
var commandValue = ''
// console.log(' "The Sign" by Ace of Base' )
if (process.argv.length >= 3) {
  commandValue = process.argv[3]
}

if (commandName === 'concert-this') {
  // e.g node liri.js concert-this ladygaga
  commands.concertThis(commandValue)
} else if (commandName === 'spotify-this-song') {
  // e.g node liri.js spotify-this-song ladygaga
  commands.spotifyThis(commandValue)
} else if (commandName === 'movie-this') {
  // e.g node liri.js movie-this friends
  commands.movieThis(commandValue)
}
