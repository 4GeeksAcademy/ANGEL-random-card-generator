/* eslint-disable */
import "./style.css";

window.onload = function() {
  //write your code here
  let cardSymbols = ["♦", "♥", "♠", "♣"];
  let cardNumbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let cardColors = ["red", "black"];

  let randomSymbol = Math.floor(Math.random() * cardSymbols.length);
  let randomNumber = Math.floor(Math.random() * cardNumbers.length);
  let randomColor = Math.floor(Math.random() * cardColors.length);
  document.querySelector(".top").innerHTML = cardSymbols[randomSymbol];
  document.querySelector(".bottom").innerHTML = cardSymbols[randomSymbol];
  document.querySelector(".center").innerHTML = cardNumbers[randomNumber];
  const colorCard = document.getElementById("card");
  colorCard.style.color = cardColors[randomColor];
  const bottomCard = document.getElementById("bottom");
  bottomCard.style.transform = "rotate(180deg)";
};

const generateButton = document.querySelector(".generateButton");
const activateTimerButtom = document.querySelector(".activateTimmerButtom");
const timerElement = document.getElementById("timer");
const widthCard = document.getElementById("widthCard");
const heightCard = document.getElementById("heightCard");
const card = document.getElementById("card");
const changeSizeButton = document.getElementById("change-card-size");

//actualizar carta al dar click
generateButton.addEventListener("click", () => {
  window.onload();
});

//temporizador
let timmerInterval;
let seconds = 0;

activateTimerButtom.addEventListener("click", () => {
  if (timmerInterval) {
    clearInterval(timmerInterval);
  }
  seconds = 1;
  timerElement.textContent = `Tiempo: ${seconds} segundos`;
  timmerInterval = setInterval(() => {
    seconds++;
    timerElement.textContent = `Tiempo: ${seconds} segundos`;
    seconds === 10 ? (window.onload(), (seconds = 0)) : null;
  }, 1000);
});

//cambiar tamaño de la carta
changeSizeButton.addEventListener("click", () => {
  const width = widthCard.value;
  const height = heightCard.value;
  console.log(width);
  console.log(height);
  width ? (card.style.width = width + "px") : null;
  height ? (card.style.height = height + "px") : null;
});
