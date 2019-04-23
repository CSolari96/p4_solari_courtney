var button = document.getElementById("check");

button.addEventListener("click", 
	function() {

		var selection = document.getElementById("selection-menu").value;
		var score = 0;

		switch (selection) {

			case "1234":

				score = 48;

				break;

			case "1243":

				score = 50;

				break;

			case "1324":

				score = 43;

				break;

			case "1342":

				score = 40;

				break;

			case "1423":

				score = 47;	

				break;

			case "1432":

				score = 42;

				break;

			case "2134":

				score = 45;

				break;

			case "2143":

				score = 47;

				break;

			case "2314":

				score = 37;

				break;

			case "2341":

				score = 31;

				break;

			case "2413":

				score = 41;

				break;

			case "2431":

				score = 33;

				break;

			case "3124":

				score = 35;

				break;

			case "3142":

				score = 32;

				break;

			case "3214":

				score = 32;

				break;

			case "3241":

				score = 26;

				break;

			case "3412":

				score = 26;

				break;

			case "3421":

				score = 23;

				break;

			case "4123":

				score = 41;

				break;

			case "4132":

				score = 36;

				break;

			case "4213":

				score = 38.

				break;

			case "4231":

				score = 30;

				break;

			case "4312":

				score = 28;

				break;

			case "4321":

				score = 25;

				break;

			default:

				score = 0;
		}

		var message;
		var scoreNotice = "Your score was " + score + " out of 50.\nThe correct placing was 1-2-4-3 with cuts of 3-3-2.";

		if (score === 50) {

			message = "Congratulations! " + scoreNotice;

		} else if (score > 0) {

			message = scoreNotice;

		} else {

			message = "Oops! It looks like something went wrong";

		}

		alert(message);

	}, false 
);