// Simple Countdown
function simple_countdown(datetime) {
	// Set target date
	var deadline = new Date(datetime);

	// Get current date
	var now = new Date();

	// Set element id's
	var elmDays = "daysVal",
	    elmHours = "hoursVal",
	    elmMins = "minsVal",
	    elmSecs = "secsVal";

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

	    // Add leading 0 if single digit
        if(days.toString().length == 1) {
            days = "0" + days;
        }
        if(minutes.toString().length == 1) {
            minutes = "0" + minutes;
        }
        if(hours.toString().length == 1) {
            hours = "0" + hours;
        }
        if(seconds.toString().length == 1) {
            seconds = "0" + seconds;
        }

	    // Print html
		document.getElementById(elmDays).innerHTML = days;
		document.getElementById(elmHours).innerHTML = hours;
		document.getElementById(elmMins).innerHTML = minutes;
		document.getElementById(elmSecs).innerHTML = seconds;

		// Set timer speed
		var timer = setTimeout(function(){
            simple_countdown(datetime);
        }, 1000);
	}
}

// Run function
simple_countdown("January 1, 2018");