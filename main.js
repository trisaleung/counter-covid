//appends an "active" class to .popup and .popup-content when the "Open" button is clicked
$("#symptoms").on("click", function() {
  $("#popup-symptoms").addClass("active");
});

//removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
$(".close, #popup-symptoms").on("click", function() {
  $("#popup-symptoms").removeClass("active");
});

$("#safety").on("click", function() {
    $("#popup-safety").addClass("active");
  });

$(".close, #popup-safety").on("click", function() {
    $("#popup-safety").removeClass("active");
});