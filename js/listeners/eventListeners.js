import { calculatorListeners } from "./calculatorListeners.js";
import { colorSelectorListeners } from "./colorSelectorListeners.js";

function eventListeners() {
  calculatorListeners();
  colorSelectorListeners();
}

export { eventListeners };
