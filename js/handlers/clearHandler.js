function clearHandler() {
  const CURRENT = document.querySelector("#current");
  const TOTAL = document.querySelector("#total");
  CURRENT.textContent = "";
  TOTAL.textContent = "";
}

export { clearHandler };
