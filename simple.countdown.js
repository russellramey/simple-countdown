// Simple Countdown
function simple_countdown() {
	// Set target date
	var deadline = new Date("January 1, 2017");
	var now = new Date();

	// Set element id's
	var elmDays = "daysTxt",
	    elmHours = "hoursTxt",
	    elmMins = "minsTxt",
	    elmSecs = "secsTxt";

	// Set time difference
	var timeDiff = deadline.getTime() - now.getTime();

	if (timeDiff <= 0) {

		document.getElementById(elmDays).innerHTML = 0;
		document.getElementById(elmHours).innerHTML = 0;
		document.getElementById(elmMins).innerHTML = 0;
		document.getElementById(elmSecs).innerHTML = 0;

    } else {

    	// Calculate time digits
		var seconds = Math.floor(timeDiff / 1000),
			minutes = Math.floor(seconds / 60),
			hours = Math.floor(minutes / 60),
			days = Math.floor(hours / 24);

			hours %= 24;
	        minutes %= 60;
	        seconds %= 60;

	    // Print html
		document.getElementById(elmDays).innerHTML = days;
		document.getElementById(elmHours).innerHTML = hours;
		document.getElementById(elmMins).innerHTML = minutes;
		document.getElementById(elmSecs).innerHTML = seconds;

		// Set timer speed
		var timer = setTimeout(function(){
            simple_countdown();
        }, 1000);
	}
}

// Run function
simple_countdown();