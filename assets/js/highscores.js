// Declared variables
var highScore = document.querySelector("#highScore");
var clear = document.querySelector("#clear");
var goHome = document.querySelector("#goHome");

// Event listener - clears scores
clear.addEventListener("click", function () {
  localStorage.clear();
  location.reload();
});

/* © Alper G. & Joshua B. */
var sortAlphaNum = function (a, b) {
  /* adding toString() makes list show back up, but it's not sorted */
  return a.toString().localeCompare(b, "en", { numeric: true });
};

// Retreives local stroage and creates #highScore list
var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);
allScores.sort(sortAlphaNum);

console.log(allScores);
console.log(sortAlphaNum);

if (allScores !== null) {
  for (var i = 0; i < allScores.length; i++) {
    var createLi = document.createElement("li");
    createLi.textContent = allScores[i].initials + " - " + allScores[i].score;
    highScore.appendChild(createLi);
  }
}

// Event listener to move to index.html home page to try again
goHome.addEventListener("click", function () {
  window.location.replace("./index.html");
});
