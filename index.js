function generateScore() {
	var lover1 = document.getElementById("lover1").value;
	var lover2 = document.getElementById("lover2").value;

	var score = Math.floor(Math.random() * 100) + 1;

	var loverScore = "";

	if (score == 100) {
		loverScore =
			"The Love score for " +
			lover1 +
			" and " +
			lover2 +
			" is " +
			score +
			"%! TRUE LOVE! A perfect match! Expect an easy and blissful life together.";
	} else if (score >= 75) {
		loverScore =
			"The Love score for " +
			lover1 +
			" and " +
			lover2 +
			" is " +
			score +
			"%! A truly spectacular match! This love comes easy to you both!";
	} else if (score >= 40) {
		loverScore =
			"The Love score for " +
			lover1 +
			" and " +
			lover2 +
			" is " +
			score +
			"%! Expect a bumpy ride in this relationship.";
	} else if (score >= 25) {
		loverScore =
			"The Love score for " +
			lover1 +
			" and " +
			lover2 +
			" is " +
			score +
			"%! Save yourself time and energy and end it before it sucks the life out of you!";
	} else {
		loverScore =
			"The Love score for " +
			lover1 +
			" and " +
			lover2 +
			" is " +
			score +
			"%! RUN AS FAST AND FAR AS YOU CAN FROM THIS RELATIONSHIP! DON'T RISK YOUR SANITY!";
	}
	document.getElementById("score").innerHTML = loverScore;
}
