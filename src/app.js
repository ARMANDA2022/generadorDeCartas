/* eslint-disable */
import { left } from "@popperjs/core";
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  const numero = document.querySelector(".card-body");
  const simbol01 = document.querySelector(".card-header");
  const simbol02 = document.querySelector(".card-footer");

  const numeros = ["A", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  const simbol = ["♠", "♥", "♦", "♣"];

  const getsimbol = array => {
    let valor = Math.floor(Math.random() * array.length);

    return array[valor];
  };
  let randonsimbol = getsimbol(simbol);
  if (randonsimbol == "♥" || randonsimbol == "♦") {
    simbol01.style.color = "red";
    simbol02.style.color = "red";
  }
  let randonnunber = getsimbol(numeros);

  numero.innerHTML = randonnunber;
  simbol01.innerHTML = randonsimbol;
  simbol02.innerHTML = simbol01.innerHTML;
};
