$(document).ready(function() {
    $(".symptoms").on("click", function(){
        $(".popupSymptoms, .popupSymptomsContent").addClass("active");
    });

    $(".popupSymptomsClose, #popupSymptoms").on("click", function(){
        $(".popupSymptoms, .popupSymptomsContent").removeClass("active");
    });
});