function decimalHandler() {
  const CURRENT = document.querySelector("#current");
  if (/\./g.test(CURRENT.textContent) === false) {
    CURRENT.textContent += ".";
  }
}

export { decimalHandler };
