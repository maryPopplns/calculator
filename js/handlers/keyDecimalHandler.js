function keyDecimalHandler(e) {
  const CURRENT = document.querySelector("#current");
  if (/\./g.test(CURRENT.textContent) === false && e.key === ".") {
    CURRENT.textContent += ".";
  }
}

export { keyDecimalHandler };
