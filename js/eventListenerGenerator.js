function eventListenerGenerator() {
  const BUTTONS = document.querySelector(".buttons").children;
  const CURRENT = document.querySelector("#current");
  const SCREEN = document.querySelector(".screen");

  function eventResponder(e) {
    const NUMREGEX = /[0-9]/;
    if (NUMREGEX.test(e.target.textContent)) {
      if (CURRENT.textContent.length > 9) {
        const STATE = CURRENT.innerText;
        CURRENT.setAttribute("id", "error");
        CURRENT.innerText = "10 DIGIT LIMIT";
        SCREEN.setAttribute("class", "screen-error");
        setTimeout(() => {
          CURRENT.innerText = STATE;
          CURRENT.setAttribute("id", "current");
          SCREEN.setAttribute("class", "screen");
        }, 125);
      } else {
        CURRENT.textContent += e.target.textContent;
      }
    }
  }

  for (let i = 0; i < BUTTONS.length; i++) {
    BUTTONS[i].addEventListener("click", eventResponder);
  }
  // const ONE = document.querySelector("#one");
  // const TWO = document.querySelector("#two");
  // const THREE = document.querySelector("#three");
  // const FOUR = document.querySelector("#four");
  // const FIVE = document.querySelector("#five");
  // const SIX = document.querySelector("#six");
  // const SEVEN = document.querySelector("#seven");
  // const EIGHT = document.querySelector("#eight");
  // const NINE = document.querySelector("#nine");
  // const ZERO = document.querySelector("#zero");
  // const REMOVE_ONE = document.querySelector("#remove-one");
  // const CLEAR = document.querySelector("#clear");
  // const ADDITION = document.querySelector("#addition");
  // const SUBTRACTION = document.querySelector("#subtraction");
  // const MULTIPLICATION = document.querySelector("#multiplication");
  // const DIVISION = document.querySelector("#division");
  // const REVERSE = document.querySelector("#reverse");
  // const PERIOD = document.querySelector("#period");
  // const ENTER = document.querySelector("#enter");
  // ONE.addEventListener("click", () => console.log("one"));
  // TWO.addEventListener("click", () => console.log("one"));
  // THREE.addEventListener("click", () => console.log("one"));
  // FOUR.addEventListener("click", () => console.log("one"));
  // FIVE.addEventListener("click", () => console.log("one"));
  // SIX.addEventListener("click", () => console.log("one"));
  // SEVEN.addEventListener("click", () => console.log("one"));
  // EIGHT.addEventListener("click", () => console.log("one"));
  // NINE.addEventListener("click", () => console.log("one"));
  // ZERO.addEventListener("click", () => console.log("one"));
  // REMOVE_ONE.addEventListener("click", () => console.log("one"));
  // CLEAR.addEventListener("click", () => console.log("one"));
  // ADDITION.addEventListener("click", () => console.log("one"));
  // SUBTRACTION.addEventListener("click", () => console.log("one"));
  // MULTIPLICATION.addEventListener("click", () => console.log("one"));
  // DIVISION.addEventListener("click", () => console.log("one"));
  // REVERSE.addEventListener("click", () => console.log("one"));
  // PERIOD.addEventListener("click", () => console.log("one"));
  // ENTER.addEventListener("click", () => console.log("one"));
}

export { eventListenerGenerator };
