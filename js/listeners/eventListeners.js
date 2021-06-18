import { digitListeners } from "./digitListeners.js";

function eventListeners() {
  const BUTTONS = document.querySelector(".buttons").children;
  const PERIOD = document.querySelector("#period");

  for (let i = 0; i < BUTTONS.length; i++) {
    BUTTONS[i].addEventListener("click", (e) => digitListeners(e));
  }
  PERIOD.addEventListener("click", (e) => {
    const CURRENT = document.querySelector("#current");
    const REGEX = /\./g;
    if (REGEX.test(CURRENT.textContent) === false) {
      if (CURRENT.textContent.length > 9) {
        over10Digits();
      } else {
        CURRENT.textContent += ".";
      }
    }
  });
}

export { eventListeners };
