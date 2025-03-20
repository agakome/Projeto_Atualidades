const quizData = [
    {
      question: "Qual é a capital da França?",
      options: ["Paris", "Madri", "Roma", "Berlim"],
      answer: "Paris"
    },
    {
      question: "Qual é o maior planeta do nosso sistema solar?",
      options: ["Jupiter", "Saturno", "Marte", "Terra"],
      answer: "Jupiter"
    },
    // Adicione mais perguntas aqui...
  ];
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const submitButton = document.getElementById("submit");
  
  let currentQuestion = 0;
  let score = 0;
  
  function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;
  
    optionsElement.innerHTML = "";
    question.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      optionsElement.appendChild(button);
      button.addEventListener("click", selectAnswer);
    });
  }
  
  function selectAnswer(e) {
    const selectedButton = e.target;
    const answer = quizData[currentQuestion].answer;
  
    if (selectedButton.innerText === answer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    quiz.innerHTML = `
      <h1>Quiz Completed!</h1>
      <p>Sua Pontuação: ${Pontuação}/${quizData.length}</p>
    `;
  }
  
  showQuestion();