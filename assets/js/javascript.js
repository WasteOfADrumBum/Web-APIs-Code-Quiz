// Var with array and object for questions 
var questions = [
    {
        title: "Ch. 1: HTML/CSS/GIT - What does it mean to be a full-stack web developer?",
        choices: ["Handles server systems", "Handles clients", "Developes the back-end", "Handles workflows of server systems and clients"],
        answer: "Handles workflows of server systems and clients"
    },
    {
        title: "Ch. 1: HTML/CSS/GIT - What is the relationship between HTML and CSS?",
        choices: ["HTML is responsible for the desgin and CSS creates the content", "HTML needs CSS to be able to function", "HTML creates the content and CSS is responsible for the design", "There is no relationship between HTML and CSS"],
        answer: "HTML creates the content and CSS is responsible for the design"
    },
    {
        title: "Ch. 1: HTML/CSS/GIT - What is Git workflow?",
        choices: ["Centralized workflow used to edit code with team members and can be used to schedule releases.", "A workflow with a sequence of tasks that process a set of data", "Decentralized workflow to be used solo wihout schedule releases", "It's when you go git that workflow!"],
        answer: "Centralized workflow used to edit code with team members and can be used to schedule releases."
    },
    {
        title: "Ch. 2: CSS/BootStrap - What is a CDN?",
        choices: ["Control Directory Number", "Connect Direct Network", "Content Delivery Network", "Canadian Dairy Network"],
        answer: "Content Delivery Network"
    },
    {
        title: "Ch. 2: CSS/BootStrap - What is a CSS framework?",
        choices: ["A standardized system for tagging text files to achieve various effects", "An object-oriented computer programming language commonly used to create interactive effects", "An alphabetical list of names, subjects, etc., with references to the places where they occur", "A library allowing for easier, more standards-compliant web design"],
        answer: "A library allowing for easier, more standards-compliant web design"
    },
    {
        title: "Ch. 2: CSS/BootStrap - Which is not one of the benefits of using a CSS framework?",
        choices: ["Provides code that you just don’t need to write from scratch every time, like resets.", "Allows you to forgo HTML.", "Relieves cross-browser concerns.", "Lays the groundwork and encourage grid-based design."],
        answer: "Allows you to forgo HTML."
    },
    {
        title: "Ch. 3: JavaScript - Which is not one of the fundamental concepts of programming?",
        choices: ["Variables", "Data Structures", "Syntax", "Neural Networks"],
        answer: "Neural Networks"
    },
    {
        title: "Ch. 3: JavaScript - What are objects in JavaScript and why are they important?",
        choices: ["Collection of properties, that provides nutrients and energy to develop and grow", "Commonly used built-in constructs, they form the building blocks for modern JavaScript.", "A 2-dimensional system, applies rules both to a parent element and that element’s children.", "Machines capable of carrying out complex series of actions, they're technology is used to onnect people in the modern world"],
        answer: "Commonly used built-in constructs, they form the building blocks for modern JavaScript."
    },
    {
        title: "Ch. 3: JavaScript - What is a function?",
        choices: ["An individual's interactions with their environment and the ability to fulfill their role within such environments.", "A special relation which maps each element of set (A) with one and only one element of set (B).", "A student's ability to perform important functional activities that support or enable participation in the academic and related social aspects of an educational program.", "A set of statements that performs a task or calculates a value."],
        answer: "A set of statements that performs a task or calculates a value."
    },
    {
        title: "Ch. 4: Web API’s - What is the DOM API?",
        choices: ["The role takes partial or total control over the the other person in a power dynamic between participants.", "A DOM API's is a dirty old man's skin cream made from beeswax.", "The way a logical structure of documents are accessed and manipulated using an application programming interface for HTML and XML document", "The practice of defending computers, servers, mobile devices, electronic systems, networks, and data from malicious attacks."],
        answer: "The way a logical structure of documents are accessed and manipulated using an application programming interface for HTML and XML documents"
    },
    {
        title: "Ch. 4: Web API’s - What is event delegation?",
        choices: ["A technique by which you add a single event handler to a parent element in order to avoid having to add event handlers to multiple child elements.", "A skill aquired when planing social gatherings.", "Empowering to act for another at planned public or social occasion", "It's not the end of the world, but I can see it from here."],
        answer: "A technique by which you add a single event handler to a parent element in order to avoid having to add event handlers to multiple child elements."
    },
    {
        title: "Ch. 4: Web API’s - What is not a purpose of client-side storage?",
        choices: ["Personalizing site preferences", "Saving data and assets locally so a site will be quicker", "Installs modifications to gain unfair advantages", "Saving web application generated documents locally for use offline"],
        answer: ""
    },
];

// Declared variables
var score = 0;
var questionIndex = 0;
var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("#startTime");
var questionsDiv = document.querySelector("#questionsDiv");
var wrapper = document.querySelector("#wrapper");

// Seconds left is 15 seconds per question:
var secondsLeft = 180;
// Iinterval time
var holdInterval = 0;
// Penalty time
var penalty = 10;
// Creates "ul"
var ulCreate = document.createElement("ul");

// Triggers timer on button & shows user
timer.addEventListener("click", function () {
    /* Hide Start Button */
    var x = document.getElementById("startTime");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    // Checking zero, originally set to zero
    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            secondsLeft--;
            currentTime.textContent = "Time: " + secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(holdInterval);
                quizCompleted();
                currentTime.textContent = "Time's up!";
            }
        }, 1000);
    }
    render(questionIndex);
});

// Questions and choices on page 
function render(questionIndex) {

    // Clears existing data 
    questionsDiv.innerHTML = "";
    ulCreate.innerHTML = "";

    // Loop through all info in array
    for (var i = 0; i < questions.length; i++) {
        // Appends question title only
        var userQuestion = questions[questionIndex].title;
        var userChoices = questions[questionIndex].choices;
        questionsDiv.textContent = userQuestion;
    }

    // New forEach question choices
    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionsDiv.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })
}

// Event to compare choices with selection
function compare(event) {

    var element = event.target;

    if (element.matches("li")) {

        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");
        // Correct condition 
        if (element.textContent == questions[questionIndex].answer) {
            score++;
            createDiv.textContent = "Correct! The answer was:  " + questions[questionIndex].answer;
        } else {
            // -5 seconds for wrong selection
            secondsLeft = secondsLeft - penalty;
            createDiv.textContent = "Wrong! The correct answer was:  " + questions[questionIndex].answer;
        }

    }

    // What question user is on
    questionIndex++;

    if (questionIndex >= questions.length) {
        // Display Stats
        quizCompleted();
        createDiv.textContent = "That's all folks!" + " " + "You answered  " + score + "/" + questions.length + " Correctly!";
    } else {
        render(questionIndex);
    }

    questionsDiv.appendChild(createDiv);

}

function quizCompleted() {
    questionsDiv.innerHTML = "";
    currentTime.innerHTML = "";

    // Heading
    var createH1 = document.createElement("h1");
    createH1.setAttribute("id", "createH1");
    createH1.textContent = "Complete!"

    questionsDiv.appendChild(createH1);

    // <hr> element
    var createTitleLine = document.createElement("hr");
    createTitleLine.setAttribute("id", "titleline");

    questionsDiv.appendChild(createTitleLine);

    // Create Paragraph
    var createP = document.createElement("p");
    createP.setAttribute("id", "createP");

    questionsDiv.appendChild(createP);

    // Calculates time remaining and replaces it with score
    if (secondsLeft >= 0) {
        /* timeRemaining Calc */
        var timeRemaining = secondsLeft;
        var createP2 = document.createElement("p");
        clearInterval(holdInterval);
        var calcScore = parseInt(timeRemaining) * parseInt(score)
        console.log(typeof timeRemaining)
        console.log(typeof score)
        createP.textContent = "Your final score is: " + calcScore;

        questionsDiv.appendChild(createP2);
    }

    // Label: Enter Initials
    var createLabel = document.createElement("label");
    createLabel.setAttribute("id", "createLabel");
    createLabel.textContent = "Enter your initials: ";

    questionsDiv.appendChild(createLabel);

    // input intials box
    var createInput = document.createElement("input");
    createInput.setAttribute("type", "text");
    createInput.setAttribute("id", "initials");
    createInput.textContent = "";

    questionsDiv.appendChild(createInput);

    // create submit button
    var createSubmit = document.createElement("button");
    createSubmit.setAttribute("type", "submit");
    createSubmit.setAttribute("id", "Submit");
    createSubmit.textContent = "Submit";

    questionsDiv.appendChild(createSubmit);

    // Event listener for initials & local storage for initials and score
    createSubmit.addEventListener("click", function () {
        var initials = createInput.value;

        /* Æ | Make initials only take max 4 letters & force only alpha-char */

        if (initials === null) {

            console.log("No value entered!");

        } else {
            /* Æ | Need to make finalScore = timeRemaining * score */
            var finalScore = {
                initials: initials,
                score: calcScore
            }
            console.log(finalScore);
            /* Adds current finalScore to allScores */
            var allScores = localStorage.getItem("allScores");
            if (allScores === null) {
                allScores = [];
            } else {
                allScores = JSON.parse(allScores);
            }
            allScores.push(finalScore);
            var newScore = JSON.stringify(allScores);
            localStorage.setItem("allScores", newScore);
            // view highscores
            window.location.replace("./highscores.html");
        }
    });

}