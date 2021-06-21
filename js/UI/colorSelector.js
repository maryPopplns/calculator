function colorSelector() {
  const BODY = document.querySelector("body");
  const SCRIPT = document.querySelector("#app");
  const GOLD = document.createElement("div");
  const ANTIQUE_WHITE = document.createElement("div");
  const ROSY_BROWN = document.createElement("div");
  const DARK_STEEL_BLUE = document.createElement("div");
  const LIGHT_STEEL_BLUE = document.createElement("div");
  const CONTAINER = document.createElement("div");

  GOLD.setAttribute("id", "gold");
  ANTIQUE_WHITE.setAttribute("id", "pink");
  ROSY_BROWN.setAttribute("id", "brown");
  DARK_STEEL_BLUE.setAttribute("id", "dark-blue");
  LIGHT_STEEL_BLUE.setAttribute("id", "light-blue");
  CONTAINER.setAttribute("class", "color-container");

  BODY.insertBefore(CONTAINER, SCRIPT);
  CONTAINER.append(GOLD);
  CONTAINER.append(ANTIQUE_WHITE);
  CONTAINER.append(ROSY_BROWN);
  CONTAINER.append(DARK_STEEL_BLUE);
  CONTAINER.append(LIGHT_STEEL_BLUE);
}

export { colorSelector };
