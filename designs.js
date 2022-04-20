var sizePicker = document.getElementById("sizePicker");
var table = document.getElementById("pixelCanvas");
var height = document.getElementById("inputHeight");
var width = document.getElementById("inputWidth");

$('#sizePicker').submit(function(event) {
  event.preventDefault();
  makeGrid(inputHeight, inputWidth);
} )
// When size is submitted by the user, call makeGrid()

function makeGrid(inputHeight, inputWidth) {

  for(let i = 0; i < inputHeight.value; i++) {
    let row = tableElement.insertRow(i);
  for(let j = 0; j < inputWidth.value; j++) {
    let cell = row.insertCell(j);
    cell.addEventListener("click", function(event) {
      cell.style.backgroundColor = color.value;
      cell.classList.add("colorful");
    let coloredCell = document.querySelectorAll('.colorful');
     });
   }
 }
}
function addColor () {
  let coloredCell = document.querySelector('colorful')
  for ( var o = 0; x < coloredCell.length; x++) {
    let color = document.getElementById('#colorPicker');
    addColor.addEventListener(click, function(event) {
      event.target.style.backgroundColor = color.value;
    });
  }
}
