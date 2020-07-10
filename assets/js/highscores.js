// Declared variables
var highScore = document.querySelector("#highScore");
var clear = document.querySelector("#clear");
var goHome = document.querySelector("#goHome");

// Event listener - clears scores 
clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});

// Retreives local stroage 
var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

if (allScores !== null) {

    for (var i = 0; i < allScores.length; i++) {

        var createLi = document.createElement("li");
        createLi.textContent = allScores[i].initials + " " + allScores[i].score;
        highScore.appendChild(createLi);

    }
}

// Event listener to move to index.html home page
goHome.addEventListener("click", function () {
    window.location.replace("./index.html");
});