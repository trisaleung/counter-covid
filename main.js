//Styling/animating front-end
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

//API
var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=Canada",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
		"x-rapidapi-key": "de9e1637b8mshd81421165585da7p1e53a9jsn2e7c41779c92"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});