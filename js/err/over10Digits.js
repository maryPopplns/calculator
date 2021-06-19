function over10Digits() {
  const CURRENT = document.querySelector("#current");
  const SCREEN = document.querySelector(".screen");
  const STATE = CURRENT.innerText;
  CURRENT.setAttribute("id", "error");
  CURRENT.innerText = "10 DIGIT LIMIT";
  SCREEN.setAttribute("class", "screen-error");
  setTimeout(() => {
    CURRENT.innerText = STATE;
    CURRENT.setAttribute("id", "current");
    SCREEN.setAttribute("class", "screen");
  }, 125);
}

export { over10Digits };
