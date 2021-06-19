function inverterHandler() {
  const CURRENT = document.querySelector("#current");
  const regex = /-/g;
  if (/-/g.test(CURRENT.textContent) === false) {
    CURRENT.innerText = "-" + CURRENT.innerText;
  } else {
    CURRENT.innerText = CURRENT.innerText.replace(regex, "");
  }
}

export { inverterHandler };
