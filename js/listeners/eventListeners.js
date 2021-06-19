import { digitHandler } from "../handlers/digitHandler.js";

function eventListeners() {
  const BUTTONS = document.querySelector(".buttons").children;
  const DECIMAL = document.querySelector("#period");

  for (let i = 0; i < BUTTONS.length; i++) {
    BUTTONS[i].addEventListener("click", (e) => digitHandler(e));
  }
  DECIMAL.addEventListener("click", (e) => {
    const CURRENT = document.querySelector("#current");
    const REGEX = /\./g;
    if (REGEX.test(CURRENT.textContent) === false) {
      if (CURRENT.textContent.length < 10) {
        CURRENT.textContent += ".";
      }
    }
  });
}

export { eventListeners };
