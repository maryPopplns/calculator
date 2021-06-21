function keyRemOne(e) {
  if (e.key === "Backspace") {
    const CURRENT = document.querySelector("#current");
    CURRENT.textContent = CURRENT.textContent
      .split("")
      .slice(0, CURRENT.textContent.length - 1)
      .join("");
  }
}

export { keyRemOne };
