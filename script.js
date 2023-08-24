const container = document.querySelector(".container");
const firstRow = document.querySelector("#first-row");
const secondRow = document.querySelector("#second-row");
const thirdRow = document.querySelector("#third-row");

container.addEventListener("click", function () {
  firstRow.classList.toggle("new-first-row");
  secondRow.classList.toggle("new-second-row");
  thirdRow.classList.toggle("new-third-row");
});
