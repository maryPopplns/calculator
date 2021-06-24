import { keyDecimalHandler } from "../handlers/keyDecimalHandler.js";
import { keyArthHandler } from "../handlers/keyArthHandler.js";
import { keyDigHandler } from "../handlers/keyDigHandler.js";
import { keyEvaluateHandler } from "../handlers/keyEvaluateHandler.js";
import { keyClear } from "../handlers/keyClear.js";
import { keyRemOne } from "../handlers/keyRemOne.js";

function keyboardListeners() {
  window.addEventListener("keypress", keyDigHandler);
  window.addEventListener("keypress", keyArthHandler);
  window.addEventListener("keypress", keyDecimalHandler);
  window.addEventListener("keypress", keyEvaluateHandler);
  window.addEventListener("keydown", keyClear);
  window.addEventListener("keydown", keyRemOne);
}

export { keyboardListeners };
