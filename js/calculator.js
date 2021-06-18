import { screenGenerator } from "./screenGenerator.js";
import { buttonGenerator } from "./buttonGenerator.js";

function calculator() {
  const BODY = document.querySelector("body");
  const CALCULATOR = document.createElement("main");

  CALCULATOR.setAttribute("class", "calculator");

  BODY.prepend(CALCULATOR);

  screenGenerator();
  buttonGenerator();
}

export { calculator };
