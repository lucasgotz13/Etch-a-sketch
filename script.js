const container = document.querySelector(".container")
const boxes = document.querySelectorAll(".boxes")
const resetButton = document.querySelector("#reset")

function createGrid(gridSize) {
  for (i = 0; i < gridSize; i++) {
    const div = document.createElement("div");
    div.classList.add("row");
    container.appendChild(div);
    for (j = 0; j < gridSize; j++) {
      const boxDiv = document.createElement("div");
      boxDiv.classList.add("boxes");
      div.appendChild(boxDiv)
    }
  }
}



container.addEventListener('mouseover', e => {
  e.target.classList.add("boxes-painted")
})

resetButton.addEventListener('click', () => {
  document
    .querySelectorAll(".boxes")
    .forEach((e) => e.classList.remove("boxes-painted"));
})

let gridSize = parseInt(prompt("How big do you want the grid to be?"))
createGrid(gridSize)
