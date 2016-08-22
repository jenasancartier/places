//business logic
function Destination(destination, location, landmark, when, notes) {
  this.destination = destination;
  this.location = location;
  this.landmark = landmark;
  this.whenVisited = when;
  this.notes = notes;
}


//user interface logic
$(document).ready(function(){
  $("form#new-place").submit(function(event){
    event.preventDefault();

    //gives usuable names to various user inputs
    var inputtedDestination = $("input#new-destination").val()
    var inputtedLocation = $("input#new-location").val();
    var inputtedLandmark = $("input#new-landmark").val();
    var inputtedWhen = $("input#new-time").val();
    var inputtedNotes = $("input#new-notes").val();

    //adds new object data based on user input variables made
    var newDestination = new Destination(inputtedDestination, inputtedLocation, inputtedLandmark, inputtedWhen, inputtedNotes);

    $("ul#destinations").append("<li><span class='destination'>" + newDestination.destination + "</span></li>");

    //.destination corresponds to li span class above
    $(".destination").last().click(function() {
      //after you click on the destination ul class, the show-destination id that is currently hidden in the html, will show the following information
      $("#show-destination").show();
      $("#show-destination h2").text(newDestination.destination);
      $(".destination-name").text(newDestination.destination);
      $(".location-name").text(newDestination.location);
      $(".landmark-name").text(newDestination.landmark);
      $(".when-visited").text(newDestination.when);
      $(".notes").text(newDestination.notes);      
    });


  });
});
