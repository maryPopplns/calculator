function keyArthHandler(e) {
  const CURRENT = document.querySelector("#current");
  const TOTAL = document.querySelector("#total");
  const REGEX = /^[\+\-\/\*]$/g;
  const NUMREGEX = /[0-9]/;

  if (REGEX.test(e.key) && NUMREGEX.test(CURRENT.textContent)) {
    TOTAL.textContent += CURRENT.textContent + ` ${e.key} `;
    CURRENT.textContent = "";
  }
}

export { keyArthHandler };
