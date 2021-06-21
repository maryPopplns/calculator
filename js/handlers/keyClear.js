function keyClear(e) {
  if (e.key === "Clear") {
    const CURRENT = document.querySelector("#current");
    const TOTAL = document.querySelector("#total");
    CURRENT.textContent = "";
    TOTAL.textContent = "";
  }
}

export { keyClear };
