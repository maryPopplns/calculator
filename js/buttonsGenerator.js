function buttonsGenerator() {
  const CALCULATOR = document.querySelector(".calculator");
  const BUTTONS = document.createElement("ol");
  BUTTONS.setAttribute("class", "buttons");

  CALCULATOR.append(BUTTONS);
}

export { buttonsGenerator };
