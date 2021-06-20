function evaluateHandler() {
  const CURRENT = document.querySelector("#current");
  const TOTAL = document.querySelector("#total");
  const STRIPPED_TOTAL = TOTAL.textContent
    .split("")
    .splice(0, TOTAL.textContent.length - 3)
    .join("")
    .replace(/\s/g, "");
  const STRIPPED_OVERALL = (TOTAL.textContent + CURRENT.textContent).replace(
    /\s/g,
    ""
  );

  if (CURRENT.textContent.length === 0) {
    CURRENT.textContent = math.evaluate(STRIPPED_TOTAL);
    TOTAL.textContent = "";
  } else {
    CURRENT.textContent = math.evaluate(STRIPPED_OVERALL);
    TOTAL.textContent = "";
  }
}

export { evaluateHandler };
