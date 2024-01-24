 
// questions
const questions = [
    {
      question: "Is JavaScript Case Sensitive?",
      choices: ["Yes", "No", "I have no idea", "Maybe"],
      answer: "Yes"
    },

    {
      question: "How are comments added to JavaScript?",
      choices: [ "( )", "[]", "//", "Insert comment here"],
      answer: "//"
    },
    
    {
        question: "Which of these is used to create a variable?",
        choices: ["declare", "create", "=", "var"],
        answer: "var"
    },
    
    {
        question: "A text value is called what?",
        choices: ["content", "block", "value", "string"],
        answer: "string"
    },
    
    {
        question: "What values can Booleans have?",
        choices: ["Yes and No", "True and False", "Confirm and Deny", "hippo and potomas"],
        answer: "True and False"
    },
    
    {
        question: "A variable inside a function is ____?",
        choices: ["Local", "Global", "Inside", "Outside"],
        answer: "Local"
    },
    
    {
        question: "Variable outside a function are considered ____?",
        choices: ["Local", "Global", "Inside", "Outside"],
        answer: "Global"
    },
    
    {
        question: "What do you get if you add a string and numbers together?",
        choices: ["Undefined", "Number", "String", "Nothing"],
        answer: "String"
    },
  ];
  
  // Set the initial values 
  let timer = 60;
  let score = 0;
  let currentQuestionIndex = 0;
  
  // Function to display a question
  function displayQuestion(question) {
    document.getElementById("question").textContent = question.question;
    const choicesList = document.getElementById("choices");
    choicesList.innerHTML = "";
    
    question.choices.forEach(choice => {
      const li = document.createElement("li");
      const button = document.createElement("button");
      button.textContent = choice;
      button.addEventListener("click", function() {
        if (choice === question.answer) {
         
          score++; 
        } else {
         
          timer -= 10; 
        }   
        // Move to the next question
        currentQuestionIndex++;
        
        if (currentQuestionIndex < questions.length) {
          displayQuestion(questions[currentQuestionIndex]);
        } else {
          
          displayResult();
        }
      });
      li.appendChild(button);
      choicesList.appendChild(li);
    });
  }
  
  // Function to start the quiz
  function startQuiz() { 
    document.getElementById("start-btn").style.display = "none";
    // Start the timer
    const timerInterval = setInterval(function() {
      document.getElementById("timer").textContent = timer;
      timer--;
      
      if (timer < 0) {
        clearInterval(timerInterval);
       //lets maybe add this later alert('times up :(')  // Time's up
        displayResult();
      }
    }, 1000);  
    displayQuestion(questions[0]);
  }
  // Function to display the score
  function displayResult() {
    document.getElementById("question-container").style.display = "none";
    document.getElementById("timer").textContent = "Time's up!";
    document.getElementById("score").textContent = score;
   // this is where scores are saved
let highScores = [];

// Function to save high score
function saveHighScore() {
 const nameInput = document.getElementById('name'); // or prompt("Enter your name:")
 const playerName = nameInput.value;
 const playerScore = 100; //placeholder this represents a score of 100 not sure how to make it display the actual
localStorage.setItem('highscores', JSON.stringify(highScores));
 
  const score = {
    name: playerName,
    score: playerScore
  };

  highScores.push(score);
  
  highScores.sort((a, b) => b.score - a.score);

  updateScoreboard();
}

// Function to update the scoreboard
function updateScoreboard() {
  const scoresList = document.getElementById("scoresList");

  scoresList.innerHTML = "";

  // puts scores in order
  for (let i = 0; i < highScores.length; i++) {
    const score = highScores[i];
    const listItem = document.createElement("li");
    listItem.textContent = `${score.name}: ${score.score}`;
    scoresList.appendChild(listItem);
  }
}

saveHighScore();


  }
 
  // reset btn
  const restartButton = document.getElementById("restartButton");

  restartButton.addEventListener("click", function() {
    location.reload(); 
  });


//highscores need help 

// const scoreForm = document.getElementById('scoreForm');

// scoreForm.addEventListener('submit', function(event) {
//   event.preventDefault();

// });


// const nameInput = document.getElementById('name');
// const name = nameInput.value;



// localStorage.setItem('name', name);
// localStorage.setItem('score', score);

// const lastSubmissionName = localStorage.getItem('name');
// const lastSubmissionScore = localStorage.getItem('score');

// // Update the HTML to display the last submission
// document.getElementById('score').textContent = `Name: ${lastSubmissionName}, Score: ${lastSubmissionScore}`;



 
  document.getElementById("start-btn").addEventListener("click", startQuiz);








