"use strict";
/*document.querySelector(".message").textContent;
document.querySelector(".message").textContent = "Correct Nmber";
document.querySelector(".number").textContent = "???";*/

const secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

//Check buttom:
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No number!";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Well guessed! ✔ 🎉";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "300px";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    //Too low guess:
  } else if (guess < secretNumber) {
    document.querySelector(".message").textContent = "Too low! 🔻";
    score--;
    document.querySelector(".score").textContent = score;
    //Too high guess:
  } else if (guess > secretNumber) {
    document.querySelector(".message").textContent = "Too high! 🔺";
    score--;
    document.querySelector(".score").textContent = score;
    //Game over:
  } else if (score === 0) {
    document.querySelector(".message").textContent = "Game Over! 😬";
  }
  console.log(guess, typeof guess);
});
// Again button:
document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".score").textContent = "20";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
});
