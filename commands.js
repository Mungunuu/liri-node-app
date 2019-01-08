var keys = require('./keys.js')
var Spotify = require('node-spotify-api')
var dateformat = require('dateformat')
var spotify = new Spotify(keys.spotify)

var axios = require('axios')

module.exports = {
  /**
   * Function that calls "bandistown" API 
   */
  concertThis: function (artistName) {
    const concertqueryUrl = `https://rest.bandsintown.com/artists/${artistName}/events?app_id=codingbootcamp`
    axios.get(concertqueryUrl).then(
      function (response) {
        for (var i = 0; i < response.data.length; i++) {
          // console.log(response)
          var artistData = response.data[i]
          console.log('---------------------------------------------------')
          console.log(`Name of the Event: ${artistData.venue.name}`)
          console.log(`Event location: ${artistData.venue.city}, ${artistData.venue.region}`)
          console.log(`Date of the Event: ${dateformat(artistData.datetime, "mm/dd/yyyy")}`)
        }
      })
  },

  /**
   * Function that calls spotify API to search track by song name.
   */
  spotifyThis: function (songName) {
    spotify.search({ type: 'track', query: songName}, function (err, data) {
      if (err) {
        return console.error('Error occurred: ' + err)
      }
      for (var i = 0; i < data.tracks.items.length; i++) {
        for (var j = 0; j < data.tracks.items[i].artists.length; j++) {
          console.log('--------------------------------------------------------')
          console.log(`Artist Name: ${data.tracks.items[i].artists[j].name}`)
          console.log(`Song Name: ${data.tracks.items[i].name}`)
          console.log(`Link: ${data.tracks.items[i].external_urls.spotify}`)
          console.log(`Album Name: ${data.tracks.items[i].album.name}`)
        }
      }
    })
  },

  movieThis: function (movieName) {
    var moviequeryUrl = `http://www.omdbapi.com/?apikey=b49cd7b5&t=${movieName}`
    axios.get(moviequeryUrl).then(
      function (response) {
        // console.log(response)
        console.log(`Title of the movie : ${response.data.Title}`)
        console.log(`Year: ${response.data.Year}`)
        console.log(`IMDB Rating: ${response.data.imdbRating}`)
        console.log(`Rating: ${response.data.Rated}`)
        console.log(`Country where the movie was produced: ${response.data.Country}`)
        console.log(`Language of the movies: ${response.data.Language}`)
        console.log(`Plot: ${response.data.Plot}`)
        console.log(`Title: ${response.data.Title}`)
        console.log(`Actors: ${response.data.Actors}`)
      }
    )
  }
}
