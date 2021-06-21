import { colorHandler } from "./../handlers/colorHandler.js";

function colorSelectorListeners() {
  setTimeout(() => {
    const PURPLE = document.querySelector("#purple");
    const BLUE = document.querySelector("#blue");
    const GREEN = document.querySelector("#green");
    const ORANGE = document.querySelector("#orange");
    const RED = document.querySelector("#red");
    PURPLE.addEventListener("mouseover", colorHandler);
    BLUE.addEventListener("mouseover", colorHandler);
    GREEN.addEventListener("mouseover", colorHandler);
    ORANGE.addEventListener("mouseover", colorHandler);
    RED.addEventListener("mouseover", colorHandler);
  }, 200);
}

export { colorSelectorListeners };
