// //buttons
// const startBtn = document.querySelector('.startBtn')
 
// Define your questions and answers
const questions = [
    {
      question: "Is JavaScript Case Sensitive?",
      choices: ["Yes", "No", "I have no idea"],
      answer: "Yes"
    },

    {
      question: "How are comments added to JavaScript?",
      choices: ["//", "( )", "[]"],
      answer: "//"
    },
    
    {
        question: "What is the capital of France?",
        choices: ["Paris", "London", "Berlin"],
        answer: "Paris"
    },
    
    {
        question: "What is the largest planet in our solar system?",
        choices: ["Mars", "Jupiter", "Venus"],
        answer: "Jupiter"
    },
    
    {
        question: "What is the capital of France?",
        choices: ["Paris", "London", "Berlin"],
        answer: "Paris"
    },
    
    {
        question: "What is the largest planet in our solar system?",
        choices: ["Mars", "Jupiter", "Venus"],
        answer: "Jupiter"
    },
    
    {
        question: "What is the capital of France?",
        choices: ["Paris", "London", "Berlin"],
        answer: "Paris"
    },
    
    {
        question: "What is the largest planet in our solar system?",
        choices: ["Mars", "Jupiter", "Venus"],
        answer: "Jupiter"
    },
    
    // Add more questions here...
  ];
  
  // Set the initial timer value and score
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
          // Correct answer
          score++; // Increase the score by 1
        } else {
          // Wrong answer
          timer -= 10; // Deduct 10 seconds from the timer
        }
        
        // Move to the next question
        currentQuestionIndex++;
        
        if (currentQuestionIndex < questions.length) {
          displayQuestion(questions[currentQuestionIndex]);
        } else {
          // No more questions, display the final result
          displayResult();
        }
      });
      li.appendChild(button);
      choicesList.appendChild(li);
    });
  }
  
  // Function to start the quiz
  function startQuiz() {
    // Hide the start button
    document.getElementById("start-btn").style.display = "none";
    
    // Start the timer
    const timerInterval = setInterval(function() {
      document.getElementById("timer").textContent = timer;
      timer--;
      
      if (timer < 0) {
        clearInterval(timerInterval);
        alert('times up :(')  // Time's up, do something here
        displayResult();
      }
    }, 1000);
    
    // Display the first question
    displayQuestion(questions[0]);
  }
  
  // Function to display the final result
  function displayResult() {
    document.getElementById("question-container").style.display = "none";
    document.getElementById("timer").textContent = "Time's up!";
    document.getElementById("score").textContent = score;
    // Do something else with the score, like showing a leaderboard or saving it to a database
  }
  
  // Add event listener to the start button
  document.getElementById("start-btn").addEventListener("click", startQuiz);

//  function onButtonClick() {
//     alert('Start Test!');
//   }
  
//   const button = document.querySelector('button');
//   button.addEventListener('click', onButtonClick);

 //starts test timer
//   function startTimer(){
//     var counter = 60;
//     setInterval(function() {
//       counter--;
//       if (counter >= 0) {
//         span = document.getElementById("count");
//         span.innerHTML = counter;
//       }
//       if (counter === 0) {
//           alert('sorry, out of time');
//           clearInterval(counter);
//       }
//     }, 1000);
    
//   }
//   function start()
//   {
//       document.getElementById("count").style="color:black;";
//       startTimer();
      
//   };

//   let questions = [
//     {
//         number: 1,
//         question: 'question',
//         answer: 'answer',
//         options: [
//             'option 1',
//             'option 2',
//             'option 3',
//             'option 4',
//         ]
//     }

//   ]
  
// function showQuestions(){
    
// }

// function startTest() {
//      alert('test started');
//   }
//   console.log(startTest)
//   console.log(startBtn)
// startBtn.addEventListener('click', onButtonClick)

// var newBtn = document.createElement('button');
// newBtn.textContent = 'Start Test';
// document.body.appendChild(newBtn);

// function onButtonClick() {
//     alert('Button clicked!');
//   }
  
//   const button = document.querySelector('button');
//   button.addEventListener('click', onButtonClick);
  
//   const newButton = document.createElement('button');
//   newButton.textContent = 'Click me!';
//   document.body.appendChild(newButton);
  
//   newButton.addEventListener('click', () => {
//     alert('New button clicked!');
//   });







