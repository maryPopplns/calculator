import { eventListeners } from "./../listeners/eventListeners.js";

function buttons() {
  const CALCULATOR = document.querySelector(".calculator");
  const BUTTONS = document.createElement("div");
  const ONE = document.createElement("div");
  const TWO = document.createElement("div");
  const THREE = document.createElement("div");
  const FOUR = document.createElement("div");
  const FIVE = document.createElement("div");
  const SIX = document.createElement("div");
  const SEVEN = document.createElement("div");
  const EIGHT = document.createElement("div");
  const NINE = document.createElement("div");
  const ZERO = document.createElement("div");
  const REMOVE_ONE = document.createElement("div");
  const CLEAR = document.createElement("div");
  const ADDITION = document.createElement("div");
  const SUBTRACTION = document.createElement("div");
  const MULTIPLICATION = document.createElement("div");
  const DIVISION = document.createElement("div");
  const REVERSE = document.createElement("div");
  const PERIOD = document.createElement("div");
  const ENTER = document.createElement("div");

  ONE.textContent = "1";
  TWO.textContent = "2";
  THREE.textContent = "3";
  FOUR.textContent = "4";
  FIVE.textContent = "5";
  SIX.textContent = "6";
  SEVEN.textContent = "7";
  EIGHT.textContent = "8";
  NINE.textContent = "9";
  ZERO.textContent = "0";
  REMOVE_ONE.textContent = "C";
  CLEAR.textContent = "a/c";
  ADDITION.textContent = "+";
  SUBTRACTION.textContent = "-";
  MULTIPLICATION.textContent = "x";
  DIVISION.textContent = "/";
  REVERSE.textContent = "-/+";
  PERIOD.textContent = ".";
  ENTER.textContent = "=";

  BUTTONS.setAttribute("class", "buttons");
  ONE.setAttribute("id", "one");
  TWO.setAttribute("id", "two");
  THREE.setAttribute("id", "three");
  FOUR.setAttribute("id", "four");
  FIVE.setAttribute("id", "five");
  SIX.setAttribute("id", "six");
  SEVEN.setAttribute("id", "seven");
  EIGHT.setAttribute("id", "eight");
  NINE.setAttribute("id", "nine");
  ZERO.setAttribute("id", "zero");
  REMOVE_ONE.setAttribute("id", "remove-one");
  CLEAR.setAttribute("id", "clear");
  ADDITION.setAttribute("id", "addition");
  SUBTRACTION.setAttribute("id", "subtraction");
  MULTIPLICATION.setAttribute("id", "multiplication");
  DIVISION.setAttribute("id", "division");
  REVERSE.setAttribute("id", "reverse");
  PERIOD.setAttribute("id", "period");
  ENTER.setAttribute("id", "enter");

  CALCULATOR.append(BUTTONS);
  BUTTONS.append(ONE);
  BUTTONS.append(TWO);
  BUTTONS.append(THREE);
  BUTTONS.append(REMOVE_ONE);
  BUTTONS.append(CLEAR);
  BUTTONS.append(FOUR);
  BUTTONS.append(FIVE);
  BUTTONS.append(SIX);
  BUTTONS.append(ADDITION);
  BUTTONS.append(SUBTRACTION);
  BUTTONS.append(SEVEN);
  BUTTONS.append(EIGHT);
  BUTTONS.append(NINE);
  BUTTONS.append(MULTIPLICATION);
  BUTTONS.append(DIVISION);
  BUTTONS.append(REVERSE);
  BUTTONS.append(ZERO);
  BUTTONS.append(PERIOD);
  BUTTONS.append(ENTER);

  for (let i = 0; i < BUTTONS.children.length; i++) {
    BUTTONS.children[i].setAttribute("class", "all-btns");
    if (/[0-9]/.test(BUTTONS.children[i].textContent) === true) {
      BUTTONS.children[i].className += " digits";
    } else {
      BUTTONS.children[i].className += " non-digits";
    }
  }

  eventListeners();
}

export { buttons };
