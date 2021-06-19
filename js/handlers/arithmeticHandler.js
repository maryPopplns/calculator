function arithmeticHandler(e) {
  const CURRENT = document.querySelector("#current");
  const TOTAL = document.querySelector("#total");
  const REGEX = /^[\+\-\/x]$/g;

  if (REGEX.test(e.target.textContent) && CURRENT.textContent.length > 0) {
    TOTAL.textContent += CURRENT.textContent + ` ${e.target.textContent} `;
    CURRENT.textContent = "";
  }
}

export { arithmeticHandler };
