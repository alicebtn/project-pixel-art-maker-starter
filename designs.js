var sizePicker = document.getElementById("sizePicker");
var table = document.getElementById("pixelCanvas");
var height = document.getElementById("inputHeight");
var width = document.getElementById("inputWidth");

function makeGrid() {
  // Size inputs
  // Remove the old grid if there is one
  table.innerHTML = "";
  // Create grid
  for (var r = 0; r < height.value; r++) {
    let row = document.createElement("tr");
    for (var c = 0; c < width.value; c++) {
      let cell = document.createElement("td");
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
}

  // Size inputs
  var sizePicker = document.getElementById("sizePicker");
  var height = document.getElementById("inputHeight").value;
  var width = document.getElementById("inputWidth").value;

  // Remove the old grid if there is one
  table.chiilder().remove();

  // Create grid
  for (var r = 0; r < height ; r++) {
        table.append("<tr></tr>");
        for (var c = 0; c < width; c++) {
            table.children().last().append("<td></td>");

  // Create drawing function
    table.addEventListener("click", function () {
      this.style.background = colorPicker.value;
        });
        }
    event.preventDefault();
   sizePicker.addEventListener("submit", ()=>{
    makeGrid(height, width);
});
    };
