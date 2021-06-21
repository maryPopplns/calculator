function arithmeticHandler(e) {
  const CURRENT = document.querySelector("#current");
  const TOTAL = document.querySelector("#total");
  const REGEX = /^[\+\-\/\*]$/g;
  const NUMREGEX = /[0-9]/;

  if (
    REGEX.test(e.target.textContent) &&
    CURRENT.textContent.length > 0 &&
    NUMREGEX.test(CURRENT.textContent)
  ) {
    TOTAL.textContent += CURRENT.textContent + ` ${e.target.textContent} `;
    CURRENT.textContent = "";
  }
}

export { arithmeticHandler };
