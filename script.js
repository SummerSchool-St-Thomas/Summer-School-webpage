// script.js

let questions = [
    {
        // Question 1
        prompt: `1. How do you add an element to the end of an array?`,
        options: [
            "append(element)",
            "push(element)",
            "add(element)",
            "insert(element)"
        ],
        answer: "push(element)"
    },
    {
        // Question 2
        prompt: `2. How do you access the first element of an array named 'myArray'?`,
        options: [
            "myArray[0]",
            "myArray[1]",
            "myArray.first()",
            "myArray(0)"
        ],
        answer: "myArray[0]"
    },
    {
        // Question 3
        prompt: ` 3. What is the output of len(myArray) if myArray is an array with 3 elements?`,
        options: [
            "2",
            "3",
            "4",
            "Error"
        ],
        answer: "3"
    },
    {
        // Question 4
        prompt: `4. How do you remove the last element from an array?`,
        options: [
            "pop()",
            "removeLast()",
            "delete()",
            "cut()"
        ],
        answer: "pop()"
    },
    {
        // Question 5
        prompt: `5. What will be the output of the following code?\n
            myArray = array.array('i', [1, 2, 3])\n
            myArray.append(4)\n
            print(myArray)`,
        options: [
            "array('i', [4, 1, 2, 3])",
            "array('i', [1, 2, 3, 4])",
            "array('i', [1, 2, 3])",
            "Error"
        ],
        answer: "array('i', [1, 2, 3, 4])"
    },
    {
        // Question 6
        prompt: `6. What does the following code do?\n
            myArray.reverse()`,
        options: [
            "Sorts the array in ascending order",
            "Sorts the array in descending order",
            "Reverses the order of elements in the array",
            "Does nothing"
        ],
        answer: "Reverses the order of elements in the array"
    },
    {
        // Question 7
        prompt: `7. Can you change the value of an existing element in an array?`,
        options: [
            "Yes",
            "No",
            "Only if it is an integer",
            "Only if it is the last element"
        ],
        answer: "Yes"
    },
    {
        // Question 8
        prompt: `8. How do you concatenate two arrays in Python?`,
        options: [
            "Using the concatenate() method",
            "Using the append() method",
            "Using the extend() method",
            "Using the + operator"
        ],
        answer: "Using the + operator"
    },
    {
        // Question 9
        prompt: `9. How do you copy the elements of an array to a list in Python?`,
        options: [
            "myList = myArray",
            "myArray.toList()",
            "list.copy(myArray)",
            "list(myArray)"
        ],
        answer: "list(myArray)"
    },
    {
        // Question 10
        prompt: `10. What is the correct way to iterate over an array in Python?`,
        options: [
            "while element in myArray: ...",
            "for i in range(myArray.length()): ...",
            "for element in myArray: ...",
            "for each element in myArray: ."
        ],
        answer: "for element in myArray: ..."
    },
    // New questions start here
    {
        // Question 11
        prompt: `11. What is a variable in Python?`,
        options: [
            "a) A container to store data",
            "b) A function to perform mathematical operations",
            "c) A loop to iterate through data",
            "d) A conditional statement for decision-making"
        ],
        answer: "A container to store data"
    },
    {
        // Question 12
        prompt: `12. Which symbol is used to assign a value to a variable in Python?`,
        options: [
            "a) =",
            "b) :",
            "c) #",
            "d) $"
        ],
        answer: "="
    },
    {
        // Question 13
        prompt: `13. What is the correct way to create an integer variable named “x” with the value 5 in Python?`,
        options: [
            "a) x = 5",
            "b) int x = 5",
            "c) x := 5",
            "d) 5 = x"
        ],
        answer: "x = 5"
    },
    {
        // Question 14
        prompt: `14. In Python, variable names are case-sensitive. What does this mean?`,
        options: [
            "a) Variable names cannot contain uppercase letters.",
            "b) Variable names must always start with an uppercase letter.",
            "c) Variable names must always be written in uppercase letters.",
            "d) Variable names are distinguished by uppercase and lowercase letters."
        ],
        answer: "Variable names are distinguished by uppercase and lowercase letters"
    },
    {
        // Question 15
        prompt: `15. Which of the following is a valid variable name in Python?`,
        options: [
            "a) 3total",
            "b) my_variable",
            "c) global",
            "d) class"
        ],
        answer: "my_variable"
    },
    {
        // Question 16
        prompt: `16. What is the type of the variable “x” after executing the following code: x = 5.0?`,
        options: [
            "a) int",
            "b) str",
            "c) float",
            "d) bool"
        ],
        answer: "float"
    }
    // Remaining questions from your original code...
];


// Rest of the code remains the same...

	

let questionsEl = document.querySelector("#questions");
let choicesEl = document.querySelector("#options");
let submitBtn = document.querySelector("#submit-score");
let startBtn = document.querySelector("#start");
let nameEl = document.querySelector("#name");
let feedbackEl = document.querySelector("#feedback");
let reStartBtn = document.querySelector("#restart");

// Quiz's initial state
let currentQuestionIndex = 0;
let score = 0;

// Start quiz and hide frontpage
function quizStart() {
    let landingScreenEl = document.getElementById("start-screen");
    landingScreenEl.setAttribute("class", "hide");
    questionsEl.removeAttribute("class");
    getQuestion();
}

// Loop through array of questions and Answers and create list with buttons
function getQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let promptEl = document.getElementById("question-words");
    promptEl.textContent = currentQuestion.prompt;
    choicesEl.innerHTML = "";
    currentQuestion.options.forEach(function (choice, i) {
        let choiceBtn = document.createElement("button");
        choiceBtn.setAttribute("value", choice);
        choiceBtn.textContent = i + 1 + ". " + choice;
        choiceBtn.onclick = questionClick;
        choicesEl.appendChild(choiceBtn);
    });
}

// Check for right answers and update score
function questionClick() {
    if (this.value !== questions[currentQuestionIndex].answer) {
        score -= 1;
        feedbackEl.textContent = `Wrong! The correct answer was ${questions[currentQuestionIndex].answer}.`;
        feedbackEl.style.color = "red";
    } else {
        score += 2;
        feedbackEl.textContent = "Correct!";
        feedbackEl.style.color = "green";
    }
    feedbackEl.setAttribute("class", "feedback");
    setTimeout(function () {
        feedbackEl.setAttribute("class", "feedback hide");
    }, 2000);
    currentQuestionIndex++;
    if (currentQuestionIndex === questions.length) {
        quizEnd();
    } else {
        getQuestion();
    }
}

// End quiz and show final score
function quizEnd() {
    let endScreenEl = document.getElementById("quiz-end");
    endScreenEl.removeAttribute("class");
    let finalScoreEl = document.getElementById("score-final");
    finalScoreEl.textContent = score;
    questionsEl.setAttribute("class", "hide");
}

// Save score in local storage along with users' name
function saveHighscore() {
    let name = nameEl.value.trim();
    if (name !== "") {
        let highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
        let newScore = {
            score: score,
            name: name,
        };
        highscores.push(newScore);
        window.localStorage.setItem("highscores", JSON.stringify(highscores));
        alert("Your Score has been Submitted");
    }
}

// Save users' score after pressing enter
function checkForEnter(event) {
    if (event.key === "Enter") {
        saveHighscore();
        alert("Your Score has been Submitted");
    }
}
nameEl.onkeyup = checkForEnter;

// Save users' score after clicking submit
submitBtn.onclick = saveHighscore;

// Start quiz after clicking start quiz
startBtn.onclick = quizStart;

