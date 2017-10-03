//Pseudocode
//Create topic variable array
//Using ajax, connect to Giphy API
//Create loop to randomly generate buttons for array items as well as any new search
//Create new containers and append to document for response results from button click events
//Create click event for gifs to pause and play 

//Variables
var topics = ["shark", "tiger", "lion", "monkey", "parrot", "seal", "bear", "frog", "dog", "cat"]


$(document).ready(function() { 


 $("#addAnimal").on("click", function(event) {

  event.preventDefault();

  var newAnimal = $("#animal-input").val().trim();

  topics.push(newAnimal);
  renderButtons();
});
   //  // Function for displaying animal buttons
   function renderButtons() {


    $("#animalButtons").empty();


    for (var i = 0; i < topics.length; i++) {


      var newButton = $("<button>");

      newButton.addClass("animalBtn");

      newButton.attr("data-name", topics[i]);

      newButton.text(topics[i]);

      $("#animalButtons").append(newButton);
    }
  }
var newAnimal = $(this).attr("data-name");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
  topics[2]   + "&api_key=dc6zaTOxFJmzC&limit=10";  

  $.ajax({
    url: queryURL,
    method: "GET"
  })

  .done(function(response) {
    var results = response.data;
    for (var i = 0; i < results.length; i++) {
      var img = $("<img class='gifImage' src="+results[i].images.original.url+">");
      $("#animals").append(img);
      
      console.log(newAnimal, "is this");
      console.log(results[i]);

    }
    
  });

  renderButtons();

});
