import { calculatorListeners } from "./calculatorListeners.js";
import { colorSelectorListeners } from "./colorSelectorListeners.js";
import { keyboardListeners } from "./keyboardListeners.js";

function eventListeners() {
  calculatorListeners();
  colorSelectorListeners();
  keyboardListeners();
}
export { eventListeners };
