import { output } from "./UI/output.js";
import { buttons } from "./UI/buttons.js";

function calculator() {
  const BODY = document.querySelector("body");
  const CALCULATOR = document.createElement("main");

  CALCULATOR.setAttribute("class", "calculator");

  BODY.prepend(CALCULATOR);

  output();
  buttons();
}
calculator();
export { calculator };
