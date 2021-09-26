// Var with array and object for questions
var questions=[
  {
      title:
      "What is HTML?",
      choices: [
         "A typical documents’ markup language for developing web pages to display on the web browser",
         "Tags used to place the content and format the pages",
         "A visual coding language",
         "Stands for 'How To Measure Love'",
      ],
      //Answer:A
      answer:"A typical documents’ markup language for developing web pages to display on the web browser",
  },
  
  {
    title:
      "What does CSS do?",
    choices: [
      "Writes'The Lion, The Witch, and the Wardrobe' ",
      "Describes the presentation of Web pages, including colors, layout, and fonts",
      "Styles the Website",
      "It doesn't do anything",
    ],
    // Answer: B
    answer: "Describes the presentation of Web pages, including colors, layout, and fonts",
  },
  
  {
    title: "What is GitHub?",
    choices: [
      "A centralized workflow used to edit code with team members and can be used to schedule releases.",
      "A workflow with a sequence of tasks that process a set of data",
      "a Git repository hosting service",
      "A phrase that stands for 'Git a Hubsand'",
    ],
    // Answer: C
    answer:
      "a Git repository hosting service",
  },

  {
    title: "What does Bootstrap do?",
    choices: [
      "Provides multiple frameworks for front end web developers",
      "A library that contains website and web app templates",
      "It's the blueprint for the Content Delivery Network (CDN)",
      "It's the mystical piece of clothing Americans must pull up to succeed in life",
    ],
    // Answer: A
    answer: "Provides multiple frameworks for front end web developers",
  },

  {
    title: "How is CSS related to Bootstrap?",
    choices: [
      "They both utilize a standardized system used for tagging text files to achieve various effects",
      "Both Bootstrap and CSS help to build presentable user interfaces",
      "Both utlize an alphabetical list of names, subjects, etc., with references to the places where they occur",
      "One is a library allowing for easier, more standards-compliant web design, the other makes a website more presentable",
    ],
    // Answer: B
    answer:
    "Both Bootstrap and CSS help to build presentable user interfaces",
  },

  {
    title:
      "what's an example of an HTML element?",
    choices: [
      "#id",
      ".class",
      "<body>",
      "var=",
    ],
    // Answer: C
    answer: "<body>",
  },

  {
    title:
      "What is not a tag utilized in Javascript?",
    choices: [
    "var=", 
    "function()",
    "}else if{",
    "goHome="
  ],
    // Answer: D
    answer: "goHome=",
  },

  {
    title:
      "Can Javascript be used to create video games?",
    choices: [
      "Absolutely, Yes!",
      "Kinda, but there are limitations",
      "Not really...",
      "I don't know",
    ],
    // Answer: A
    answer:
      "Absolutely, Yes!",
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
    listItem.addEventListener("click", compare);
  });
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
      createDiv.textContent =
        "Correct! The answer was:  " + questions[questionIndex].answer;
    } else {
      // -5 seconds for wrong selection
      secondsLeft = secondsLeft - penalty;
      createDiv.textContent =
        "Wrong! The correct answer was:  " + questions[questionIndex].answer;
    }
  }

  // What question user is on
  questionIndex++;

  if (questionIndex >= questions.length) {
    // Display Stats
    quizCompleted();
    createDiv.textContent =
      "That's all folks!" +
      " " +
      "You answered  " +
      score +
      "/" +
      questions.length +
      " Correctly!";
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
  createH1.textContent = "Complete!";

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
    var calcScore = parseInt(timeRemaining) * parseInt(score);
    console.log(typeof timeRemaining);
    console.log(typeof score);
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
  // Max character length of 4 for people who have 2 middle names
  createInput.setAttribute("maxlength", "4");
  // Placeholder text
  createInput.setAttribute("value", "ABC");
  // Uppercase only conversion
  createInput.setAttribute("style", "text-transform:uppercase");
  // © vishvendrasingh (GitHub)
  createInput.setAttribute(
    "onkeypress",
    "return ((event.charCode >= 65 && event.charCode <= 90) || (event.charCode >= 97 && event.charCode <= 122) || (event.charCode == 32))"
  );
  // Input my initials JMS is value is blank
  createInput.setAttribute(
    "onblur",
    "if (this.value == '') {this.value = 'JMS';}"
  );
  // Clear placeholder text onClick
  createInput.setAttribute(
    "onfocus",
    "if (this.value == 'ABC') {this.value = '';}"
  );

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
      var finalScore = {
        initials: initials,
        score: calcScore,
      };
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
