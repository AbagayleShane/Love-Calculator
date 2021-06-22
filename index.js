function generateScore(){
  var lover1 = document.getElementById("lover1").value;
  var lover2 = document.getElementById("lover2").value;
  var score = Math.floor(Math.random() * 100) + 1;

  var loverScore = "The love score for " + lover1 + " and " + lover2 + " is " + score + "%!"
  document.getElementById("score").innerHTML = loverScore;
};


