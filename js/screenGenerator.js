function screenGenerator() {
  const CALCULATOR = document.querySelector(".calculator");
  const SCREEN = document.createElement("output");
  SCREEN.setAttribute("class", "screen");

  CALCULATOR.prepend(SCREEN);
}

export { screenGenerator };
