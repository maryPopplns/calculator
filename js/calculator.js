import { output } from "./UI/output.js";
import { buttons } from "./UI/buttons.js";
import { colorSelector } from "./UI/colorSelector.js";

function calculator() {
  const BODY = document.querySelector("body");
  const CALCULATOR = document.createElement("main");

  CALCULATOR.setAttribute("class", "calculator");

  BODY.prepend(CALCULATOR);

  output();
  buttons();
  colorSelector();
}
calculator();

export { calculator };
