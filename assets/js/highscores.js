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
/* var sortAlphaNum = function (a, b) {
    return a.localeCompare(b, 'en', { numeric: true });
}; */

// Retreives local stroage and creates #highScore list
var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);
/* allScores.sort(sortAlphaNum); */

if (allScores !== null) {

    for (var i = 0; i < allScores.length; i++) {

        var createLi = document.createElement("li");
        /* Æ | Need to make intials left aligned and score right aligned */
        createLi.textContent = allScores[i].initials + " " + allScores[i].score;
        highScore.appendChild(createLi);

    }
}

// Event listener to move to index.html home page to try again
goHome.addEventListener("click", function () {
    window.location.replace("./index.html");
});