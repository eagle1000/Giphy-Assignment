//Pseudocode
//Create topic variable array
//Using ajax, connect to Giphy API
//Create loop to randomly generate buttons for array items as well as any new search
//Create new containers and append to document for response results from button click events
//Create click event for gifs to pause and play 

//Variables
var topics = ["shark", "tiger", "lion", "monkey", "parrot", "seal", "bear", "frog", "dog", "cat"]

var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        "tiger" + "&api_key=dc6zaTOxFJmzC&limit=10";  //hardcoded to tiger

//Functions

 // Performing our AJAX GET request
      $.ajax({
          url: queryURL,
          method: "GET"
        })
        // After the data comes back from the API
        .done(function(response) {
          // Storing an array of results in the results variable
          var results = response.data[0].url;
          console.log(results);//hardcoded to element [0]
          renderButtons();

 // This function handles events where one button is clicked
      $("#addAnimal").on("click", function(event) {
        // event.preventDefault() prevents the form from trying to submit itself.
        // We're using a form so that the user can hit enter instead of clicking the button if they want
        event.preventDefault();
   // This line will grab the text from the input box
        var newAnimal = $("#animal-input").val().trim();
        // The animal from the textbox is then added to our array
        topics.push(newAnimal);
        renderButtons();
      });
 });
  // Function for displaying animal buttons
      function renderButtons() {

        // Deleting the movie buttons prior to adding new movie buttons
        // (this is necessary otherwise we will have repeat buttons)
        $("#animalButtons").empty();

        // Looping through the array of movies
        for (var i = 0; i < topics.length; i++) {

          // Then dynamicaly generating buttons for each movie in the array.
          // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
          var newButton = $("<button>");
          // Adding a class
          newButton.addClass("animalBtn");
          // Adding a data-attribute with a value of the movie at index i
          newButton.attr("data-name", topics[i]);
          // Providing the button's text with a value of the movie at index i
          newButton.text(topics[i]);
          // Adding the button to the HTML
          $("#animalButtons").append(newButton);
        }
      }

     

    
     