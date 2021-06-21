function colorHandler(e) {
  const BODY = document.body;
  const ID = this.id;
  if (ID === "purple") {
    BODY.style.backgroundColor = "rgb(204, 153, 201, 0.6)";
  }
  if (ID === "blue") {
    BODY.style.backgroundColor = "rgb(158, 193, 207, 0.6)";
  }
  if (ID === "green") {
    BODY.style.backgroundColor = "rgb(158, 224, 158, 0.6)";
  }
  if (ID === "orange") {
    BODY.style.backgroundColor = "rgb(254, 177, 68, 0.6)";
  }
  if (ID === "red") {
    BODY.style.backgroundColor = "rgb(255, 102, 99, 0.6)";
  }
}

export { colorHandler };
