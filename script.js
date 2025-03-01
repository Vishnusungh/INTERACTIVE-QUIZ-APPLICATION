const questions = [
    {
      question: " 1. What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      correctAnswer: "Paris"
    },
    {
      question: "2. Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      correctAnswer: "Mars"
    },
    {
      question: "3. Who wrote 'Romeo and Juliet'?",
      options: ["Shakespeare", "Dickens", "Austen", "Hemingway"],
      correctAnswer: "Shakespeare"
    },
    {
      question: "4. What is the largest ocean on Earth?",
      options: ["Atlantic", "Indian", "Arctic", "Pacific"],
      correctAnswer: "Pacific"
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const nextButton = document.getElementById("next-button");
  const feedbackElement = document.getElementById("feedback");
  const scoreElement = document.getElementById("score");
  
  function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = currentQuestion.question;
    optionsElement.innerHTML = ""; 
    
    currentQuestion.options.forEach(option => {
      const optionElement = document.createElement("div");
      optionElement.classList.add("option");
      optionElement.textContent = option;
      optionElement.onclick = () => checkAnswer(option);
      optionsElement.appendChild(optionElement);
    });
    
    feedbackElement.textContent = "";
    nextButton.style.display = "none";
  }
  
  function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    
    if (selectedOption === currentQuestion.correctAnswer) {
      feedbackElement.textContent = "Correct!";
      feedbackElement.style.color = "green";
      score++;
    } else {
      feedbackElement.textContent = `Wrong! The correct answer is: ${currentQuestion.correctAnswer}`;
      feedbackElement.style.color = "red";
    }
    
    nextButton.style.display = "block"; 
  }
  
  function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      showFinalScore();
    }
  }
  
  function showFinalScore() {
    questionElement.innerHTML = "Quiz Over!";
    optionsElement.innerHTML = "";
    nextButton.style.display = "none";
    feedbackElement.innerHTML =`Your final score is ${score} out of ${questions.length}.`;
    scoreElement.innerHTML = "";
  }
  
  loadQuestion();
