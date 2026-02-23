import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  const simbolo = ["♥", "♦", "♣", "♠"];
  const numero = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  const simboloRandom = simbolo[Math.floor(Math.random() * simbolo.length)];
  const numeroRandom = numero[Math.floor(Math.random() * numero.length)];
  document.getElementById("simbolo").innerHTML = simboloRandom;
  document.getElementById("simbolo2").innerHTML = simboloRandom;
  document.getElementById("numero").innerHTML = numeroRandom;

  let color = "red";
  if (simboloRandom === "♥" || simboloRandom === "♦") {
    color = "red";
  } else {
    color = "black";
  }
  document.getElementById("simbolo").style.color = color;
  document.getElementById("simbolo2").style.color = color;
}