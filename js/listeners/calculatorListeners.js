import { digitHandler } from "../handlers/digitHandler.js";
import { decimalHandler } from "../handlers/decimalHandler.js";
import { inverterHandler } from "../handlers/inverterHandler.js";
import { clearHandler } from "../handlers/clearHandler.js";
import { removeOneHandler } from "../handlers/removeOneHandler.js";
import { arithmeticHandler } from "../handlers/arithmeticHandler.js";
import { evaluateHandler } from "../handlers/evaluateHandler.js";

function calculatorListeners() {
  var CURRENT = document.querySelector("#current");
  const BUTTONS = document.querySelector(".buttons").children;
  const DECIMAL = document.querySelector("#period");
  const NUMBER_INVERTER = document.querySelector("#inverter");
  const REMOVE_ONE = document.querySelector("#remove-one");
  const CLEAR = document.querySelector("#clear");
  const EVALUATE = document.querySelector("#evaluate");

  for (let i = 0; i < BUTTONS.length; i++) {
    BUTTONS[i].addEventListener("click", (e) => digitHandler(e));
  }
  DECIMAL.addEventListener("click", decimalHandler);
  NUMBER_INVERTER.addEventListener("click", inverterHandler);
  REMOVE_ONE.addEventListener("click", removeOneHandler);
  CLEAR.addEventListener("click", clearHandler);
  for (let i = 0; i < BUTTONS.length; i++) {
    BUTTONS[i].addEventListener("click", (e) => arithmeticHandler(e));
  }
  EVALUATE.addEventListener("click", evaluateHandler);
}
export { calculatorListeners };
