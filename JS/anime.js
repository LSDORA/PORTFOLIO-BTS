function handleswitchButtons() {
  const activeElement = document.querySelector(".wor.active");
  const inactiveElement = document.querySelector(".wor:not(.active)");

  activeElement.classList.remove("active");

  inactiveElement.classList.add("active");
}