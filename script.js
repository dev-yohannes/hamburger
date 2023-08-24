let container = document.querySelector(".container");
let firstRow = document.querySelector("#first-row");
let secondRow = document.querySelector("#second-row");
let thirdRow = document.querySelector("#third-row");

container.addEventListener("click", function () {
  firstRow.classList.toggle("new-first-row");
  secondRow.classList.toggle("new-second-row");
  thirdRow.classList.toggle("new-third-row");
});
