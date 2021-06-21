function colorHandler(e) {
  const BODY = document.body;
  if (e.target.id === "purple") {
    BODY.style.backgroundColor = "#CC99C9";
  }
  if (e.target.id === "blue") {
    BODY.style.backgroundColor = "#9EC1CF";
  }
  if (e.target.id === "green") {
    BODY.style.backgroundColor = "#9EE09E";
  }
  if (e.target.id === "orange") {
    BODY.style.backgroundColor = "#FEB144";
  }
  if (e.target.id === "red") {
    BODY.style.backgroundColor = "#FF6663";
  }
}

export { colorHandler };
