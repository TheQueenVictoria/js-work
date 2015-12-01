$(document).ready(function() {

		var currentTime = new Date();
		var dayofWeek = currentTime.getDay();
		var hours = currentTime.getHours();
		var minutes = currentTime.getMinutes();
		var seconds = currentTime.getSeconds();

		if (dayofWeek = 1,2,3,4,5){
			if(hours < 20){
				if(hours > 8){
		 			$( "h2.open-message" ).html("Yes, we're open! <br> We close at 8pm tonight.");
		 			$("h2").css("color", "green");
		 		}
		 	}
		 	else {
				$("h2.open-message").html("Sorry we are closed right now");
				$("h2").css("color", "red");
			}
		}

		else if (dayofWeek = 6){
			if(hours < 22){
				if(hours > 9){
		 			$( "h2.open-message" ).html("We're open! <br> We close at 10pm tonight.");
		 			$("h2").css("color", "green");
		 		}
		 	}
		 	else {
				$("h2.open-message").html("Sorry we are closed right now");
				$("h2").css("color", "red");
			}
		}
		

		else if (dayofWeek = 7){
			if(hours < 17){
				if(hours > 10){
		 			$( "h2.open-message" ).html("We are currently open! <br> We close at 5pm tonight.");
		 			$("h2").css("color", "green");
		 		}
		 	}
		 	else {
				$("h2.open-message").html("Sorry we are closed right now");
				$("h2").css("color", "red");
			}
		}

});

// built from scratch :)

