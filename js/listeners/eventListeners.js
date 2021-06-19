import { digitHandler } from "../handlers/digitHandler.js";
import { decimalHandler } from "../handlers/decimalHandler.js";

function eventListeners() {
  const BUTTONS = document.querySelector(".buttons").children;
  const DECIMAL = document.querySelector("#period");

  for (let i = 0; i < BUTTONS.length; i++) {
    BUTTONS[i].addEventListener("click", (e) => digitHandler(e));
  }
  DECIMAL.addEventListener("click", decimalHandler);
}

export { eventListeners };
