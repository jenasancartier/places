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

    var inputtedDestination = $("input#new-destination").val()
    var inputtedLocation = $("input#new-location").val();
    var inputtedLandmark = $("input#new-landmark").val();
    var inputtedWhen = $("input#new-time").val();
    var inputtedNotes = $("input#new-notes").val();

    var newDestination = new Destination(inputtedDestination, inputtedLocation, inputtedLandmark, inputtedWhen, inputtedNotes);

    $("ul#destinations").append("<li><span class='destination'>" + newDestination.destination + "</span></li>");


  })
})
