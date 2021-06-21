import { over10Digits } from "./../err/over10Digits.js";

function keyDigHandler(e) {
  const CURRENT = document.querySelector("#current");
  const NUMREGEX = /[0-9]/;

  if (NUMREGEX.test(e.key)) {
    if (CURRENT.textContent.replace(/\./, "").length > 9) {
      over10Digits();
    } else {
      CURRENT.textContent += e.key;
    }
  }
}

export { keyDigHandler };
