let sun = document.querySelector(".bx bx-sun");
let moon = document.querySelector(".bx bx-moon");

function myFunction() {
  let element = document.body;
  element.classList.toggle("dark");
}

const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});
