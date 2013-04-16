// handle the button click
$('#show-games').on('click', function() {
  // pretend this came from an AJAX call
  var games = json_data.games;

  // call the display_games function, passing in games
  display_games(games);
});

// main function to display all the games
var display_games = function(games) {
  // variable to hold each game
  var game;

  // slide up (hide) the game list
  $('#game-list').slideUp('fast', function() {
    // empty the game list
    $('#game-list').empty();

    // build each game
    for (var i = 0; i < games.length; i++) {
      // TODO: Declare a variable called game
      // and set it equal to the result of calling
      // your ICanHaz template. Refer to the notes
      // if you need to.

      // TODO: Append the game variable to the
      // game-list <section>.

    }

    // TODO: Slide down (show) the list of games

  });
};