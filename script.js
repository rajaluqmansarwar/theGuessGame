"use strict";
// #60b347

// Generating Random number
let realNum = Math.trunc(Math.random() * 20) + 1;
console.log(realNum);

// Setting variables to control the end of game
let lifeline = 5;
let score = 20;
let highscore = 0;

// Handling the event when user click the button
document.querySelector(".check").addEventListener("click", function () {
  // Storing Users guess to compare
  const guess = Number(document.querySelector(".guess").value);

  // Whene there is no guess
  if (!guess) {
    document.querySelector(".message").textContent = "No guess made";
  }
  // When the input is in range
  else if (guess >= 1 && guess <= 20) {
    // When Guess number is not equal to real number
    if (guess !== realNum && lifeline > 1) {
      lifeline--;
      score = score - 2;
      document.querySelector(".message").textContent =
        guess < realNum ? "Too Low!" : "Too High!";
      document.querySelector(".lifeline").textContent = lifeline;
      document.querySelector(".score").textContent = score;
    }
    // When Guess number is equal to real number
    else if (guess === realNum && lifeline > 1) {
      document.getElementById("main").style.visibility = "hidden";
      document.getElementById("between").style.visibility = "hidden";
      document.querySelector(".number").textContent = realNum;
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".mainHeading").textContent = "You Won! 🥳";
      if (score > highscore) {
        highscore = score;
        document.querySelector(".highscore").textContent = highscore;
      }
    }
    // Game is over due to lifelines
    else {
      document.getElementById("main").style.visibility = "hidden";
      document.getElementById("between").style.visibility = "hidden";
      document.querySelector(".number").textContent = realNum;
      document.querySelector("body").style.backgroundColor = "rgb(255, 41, 41)";
      document.querySelector(".mainHeading").textContent = "Game Over 😞";
    }
  }
  // When input is invalid
  else {
    document.querySelector(".message").textContent = "Invalid Input";
  }
});

// For New Game
document.querySelector(".again").addEventListener("click", function () {
  //   Displaying Content
  document.getElementById("main").style.visibility = "visible";
  document.getElementById("between").style.visibility = "visible";
  // Reseting background color
  document.querySelector("body").style.backgroundColor = "#222";
  //   Reseting Values and content
  realNum = Math.trunc(Math.random() * 20) + 1;
  console.log(realNum);
  lifeline = 5;
  score = 20;
  document.querySelector(".mainHeading").textContent = "Make Your Guess!";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "Begin...";
  document.querySelector(".guess").value = null;
});
