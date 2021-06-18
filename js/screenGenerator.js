function screenGenerator() {
  const CALCULATOR = document.querySelector(".calculator");
  const SCREEN = document.createElement("output");
  const TOTAL = document.createElement("output");
  const CURRENT = document.createElement("output");

  SCREEN.setAttribute("class", "screen");
  TOTAL.setAttribute("id", "total");
  TOTAL.textContent = "total";
  CURRENT.setAttribute("id", "current");
  CURRENT.textContent = "current";

  CALCULATOR.prepend(SCREEN);
  SCREEN.append(CURRENT);
  SCREEN.prepend(TOTAL);
}

export { screenGenerator };
