import { screenGenerator } from "./screenGenerator.js";
import { buttonsGenerator } from "./buttonsGenerator.js";

function calculator() {
  const BODY = document.querySelector("body");
  const CALCULATOR = document.createElement("main");

  CALCULATOR.setAttribute("class", "calculator");

  BODY.prepend(CALCULATOR);

  screenGenerator();
  buttonsGenerator();
}

export { calculator };
