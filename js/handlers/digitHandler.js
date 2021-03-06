import { over10Digits } from "./../err/over10Digits.js";

function digitHandler(e) {
  const CURRENT = document.querySelector("#current");
  const NUMREGEX = /[0-9]/;

  if (NUMREGEX.test(e.target.textContent)) {
    if (CURRENT.textContent.replace(/\./, "").length > 9) {
      over10Digits();
    } else {
      CURRENT.textContent += e.target.textContent;
    }
  }
}

export { digitHandler };
