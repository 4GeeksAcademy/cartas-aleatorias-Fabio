import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const suits = ["♦", "♥", "♠", "♣"];
  const classes = ["diamond", "heart", "spade", "club"];
  const values = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

  const randomSuitIndex = Math.floor(Math.random() * suits.length);
  const randomValueIndex = Math.floor(Math.random() * values.length);
  const card = document.getElementById("card");

  card.className = "card";
  card.classList.add(classes[randomSuitIndex]);

  document.querySelector(".top-suit").innerHTML = suits[randomSuitIndex];
  document.querySelector(".value").innerHTML = values[randomValueIndex];
  document.querySelector(".bottom-suit").innerHTML = suits[randomSuitIndex];
};
