$(document).ready(function() {
	function displayTime() {
		var meridiem = "AM";
		var currentTime = new Date();
		var hours = currentTime.getHours();
		if (hours < 10 ) {
			hours = "0" + hours;
			}

		if (hours >12 ){
			hours = hours- 12;
			meridiem = "PM";
			}

		if (hours === 0){
			hours = 12;
		}	
		var minutes = currentTime.getMinutes();
		if (minutes < 10 ) {
			minutes = "0" + minutes;
			}
		var seconds = currentTime.getSeconds();
		if (seconds < 10 ) {
			seconds = "0" + seconds;
			}
		var clockDiv = document.getElementById('clock');
		clockDiv.innerText = hours + ":" + minutes + ":" + seconds + " " + meridiem;
	
		if (seconds === 30) {
			document.body.style.backgroundColor = "red";
		}
		if (seconds === 40) {
			document.body.style.backgroundColor = "#80d4ea";
		}

	}

		setInterval(displayTime, 1000);
		
	

});