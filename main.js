const questions = [
  {
    id: 1,
    question: "2 + 2 = ?",
    answers: ["1", "4", "5", "2"],
    correctAnswer: "B",
  },
  {
    id: 2,
    question: "4 + 4 = ?",
    answers: ["1", "4", "8", "2"],
    correctAnswer: "C",
  },
  {
    id: 3,
    question: "4 x 3 = ?",
    answers: ["12", "4", "5", "2"],
    correctAnswer: "A",
  },
];

let questionh1 = document.querySelector(".q");

let answers = document.querySelectorAll(".answer");

let answerBar = document.querySelector(".answers");
answerBar.style.display = "none";

let startBtn = document.querySelector("#start");

let i = 0;

let correct = 0;
let wrong = 0;

function renderQuestion() {
  if (i < questions.length) {
    questionh1.innerText = questions[i].question;

    questions[i].answers.forEach((answer, index) => {
      answers[index].innerText = answer;
    });
  } else if (correct == questions.length) {
    questionh1.innerText = "Milyoner!!!";
    answerBar.style.display = "none";
  } else {
    questionh1.innerText = `Doğru: ${correct}, Yanlış: ${wrong}`;
    answerBar.style.display = "none";
  }
}

function disableButtons(buttons) {
  buttons.forEach((a) => {
    if (a.disabled == true) {
      a.disabled = false;
    } else {
      a.disabled = true;
    }
  });
}

startBtn.addEventListener("click", () => {
  answerBar.style.display = "flex";
  startBtn.style.display = "none";
  renderQuestion();
});

answers.forEach((a) => {
  a.addEventListener("click", () => {
    if (questions[i].correctAnswer.includes(a.value)) {
      correct++;
      questionh1.innerText = "Doğru";
      disableButtons(answers);
      setTimeout(() => {
        disableButtons(answers);
        i++;
        renderQuestion();
      }, 300);
    } else {
      wrong++;
      questionh1.innerText = "Yanlış";
      disableButtons(answers);
      setTimeout(() => {
        disableButtons(answers);
        i++;
        renderQuestion();
      }, 300);
    }
  });
});
