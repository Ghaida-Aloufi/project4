let timeRemaining = 30;
let timerInterval;

function startTimer() {
  const timerDisplay = document.getElementById("question-timer");

  timerInterval = setInterval(() => {
    timeRemaining--;

    timerDisplay.textContent = timeRemaining;

    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      nextQuestion();
    }
  }, 1000);
}

function handleAnswer(selectedOption) {
  clearInterval(timerInterval); 

  const correctAnswer = 'الدمام';  
  if (selectedOption === correctAnswer) {
    saveCorrectAnswer(1);  
  }
  
  nextQuestion();
}

function nextQuestion() {
  window.location.href = "quzepage2.html";  
}

function saveCorrectAnswer(questionNumber) {
  let correctAnswers = JSON.parse(localStorage.getItem('correctAnswers')) || [];
  correctAnswers.push(questionNumber);  
  localStorage.setItem('correctAnswers', JSON.stringify(correctAnswers));
}

window.onload = startTimer;
