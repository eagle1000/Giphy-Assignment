//Pseudocode
//Create topic variable array
//Using ajax, connect to Giphy API
//Create loop to randomly generate buttons for array items as well as any new search
//Create new containers and append to document for response results from button click events
//Create click event for gifs to pause and play 

//Variables
var topics = ["shark", "tiger", "lion", "monkey", "parrot", "seal", "bear", "frog", "dog", "cat"]

var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        "tiger" + "&api_key=dc6zaTOxFJmzC&limit=10";

//Functions

 // Performing our AJAX GET request
      $.ajax({
          url: queryURL,
          method: "GET"
        })
        // After the data comes back from the API
        .done(function(response) {
          // Storing an array of results in the results variable
          var results = response.data;
          console.log(results);
      });



//Startup/Main Logic