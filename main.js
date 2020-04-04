$(document).ready(function() {
    //Symptoms popup window appears on click, closes when x is clicked
    $(".symptoms").on("click", function(){
        $(".popupSymptoms").addClass("active");
        $(".safety").attr("disabled", true);
    });

    $(".popupSymptomsClose, #popupSymptoms").on("click", function(){
        $(".popupSymptoms").removeClass("active");
        $(".safety").attr("disabled", false);
    });

    //Safety popup window appears on click, closes when x is clicked
    $(".safety").on("click", function(){
        $(".popupSafety").addClass("active");
        $(".symptoms").attr("disabled", true);
    });

    $(".popupSafetyClose, #popupSafety").on("click", function(){
        $(".popupSafety").removeClass("active");
        $(".symptoms").attr("disabled", false);
    });
});