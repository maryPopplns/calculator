function colorSelector() {
  const BODY = document.querySelector("body");
  const SCRIPT = document.querySelector("#app");
  const PURPLE = document.createElement("div");
  const BLUE = document.createElement("div");
  const GREEN = document.createElement("div");
  const ORANGE = document.createElement("div");
  const RED = document.createElement("div");
  const CONTAINER = document.createElement("div");

  PURPLE.setAttribute("id", "purple");
  BLUE.setAttribute("id", "blue");
  GREEN.setAttribute("id", "green");
  ORANGE.setAttribute("id", "orange");
  RED.setAttribute("id", "red");
  CONTAINER.setAttribute("class", "color-container");

  BODY.insertBefore(CONTAINER, SCRIPT);
  CONTAINER.append(PURPLE);
  CONTAINER.append(BLUE);
  CONTAINER.append(GREEN);
  CONTAINER.append(ORANGE);
  CONTAINER.append(RED);
}

export { colorSelector };
