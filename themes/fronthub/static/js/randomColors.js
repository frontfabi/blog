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

  return colors[index];
}
(function() {
  const titleColor = getRandomColors();
  document.getElementsByClassName("nav-title")[0].classList.add(titleColor);
})();
