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
        /* Æ | Need to make intials left aligned and score right aligned */
        createLi.textContent = allScores[i].initials + " " + allScores[i].score;
        highScore.appendChild(createLi);

    }
}

/* 
Æ | Need to make into an array that can auto sort new scores by integers negating the letters by highest integer value reguardless of how many letters are in front of it

const listScores = document.querySelectorAll('li');
Array.from(listScores)

var arr = ["", "", "", ""];
var sortAlphaNum = function(a, b) { 
    return a.localeCompare(b, 'en', { numeric: true });
};
arr.sort(sortAlphaNum);

© Alper G.
*/



// Event listener to move to index.html home page
goHome.addEventListener("click", function () {
    window.location.replace("./index.html");
});