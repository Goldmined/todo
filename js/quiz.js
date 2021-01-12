// DOM-элементы
const overlayEl = document.querySelector('.overlay');
const questionEl = document.querySelector('.overlay__question');
const formEl = document.querySelector('.overlay__form');
const answerEl = document.querySelector('.overlay__answer');
// порядковый номер активного вопроса
let index = 0;
// количество очков на текущий момент
let score = 0;
// база вопросов и ответов

/* ОБЪЯВЛЕНИЯ ФУНКЦИЙ */
// функции для работы с модальным окном
function showOverlay(question) {
  overlayEl.classList.remove('overlay_hidden');
  questionEl.innerText = question
}
function hideOverlay() {
  overlayEl.classList.add('overlay_hidden');
}

// добавляет на страницу отчёт с результатом
function addResult(question, answer, result) {
  const element = document.createElement('div');
  element.innerHTML = `
      <div><span>${question}</span></div>
      <div><b>Ответ</b>: <span>${answer}</span></div>
      <div><b>Результат</b>: <span>${result}</span></div>
  `
  document.querySelector('.results').append(element);
}

// отображение на странице результатов теста
function scoreView(score) {
  const scoreElement = document.createElement('div');
  scoreElement.classList.add('score');
  scoreElement.innerHTML = `
      <hr>
      <div><b>Счёт</b>: <span>${score}</span></div>
      `
  document.querySelector('.results').append(scoreElement);
}

// обработка формы (вызывается после нажатия на кнопку в форме)
function handleSubmit(e) {
  e.preventDefault();
  const answer = answerEl.value;
  const isCorrect = answer.toLowerCase() === quizArr[index].a.toLowerCase();
  if (isCorrect) {
    score+=1;
  }
  addResult(
    `${questionPrefix} ${quizArr[index].q}?`,
    answer,
    isCorrect ? "правильно" : "не правильно"
  );
  answerEl.value = "";
  if(index === quizArr.length - 1) {
    hideOverlay()
    scoreView(`${score}`)
  } else {
    index+=1;
    showOverlay(`${questionPrefix} ${quizArr[index].q}?`)
  }
}

/* ИСПОЛЬЗОВАНИЕ ФУНКЦИЙ */
function startTest(){
  // показ первого вопроса
  showOverlay(`${questionPrefix} ${quizArr[index].q}?`)
  // обработка формы
  formEl.addEventListener("submit", handleSubmit)
}


