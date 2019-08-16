function getRandomColors() {
  const colors = [
    "light",
    "error",
    "error-alt",
    "success",
    "success-alt",
    "warning",
    "warning-alt",
    "info",
    "active",
    "string",
    "purple"
  ];
  const index = parseInt(Math.random() * (colors.length - 1 - 0 + 1), 10);

  let classList = document.getElementsByClassName("nav-title")[0].classList;
  classList.forEach(classname => {
    if (typeof classname === "string" && classname !== "nav-title")
      classList.remove(classname);
  });
  classList.add(colors[index]);
}

setInterval(getRandomColors, 2500);
