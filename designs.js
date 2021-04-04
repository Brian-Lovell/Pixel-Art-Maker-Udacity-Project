// Select color input
let color = document.getElementById('colorPicker').value;
console.log(color);
// Select size input
let height = document.getElementById('inputHeight').value;
console.log(height);
let width = document.getElementById('inputWidth').value;
console.log(width);
let canvas = document.querySelector('#pixelCanvas');
// When size is submitted by the user, call makeGrid()
let size = document.querySelector('#sizePicker');
size.addEventListener('submit', function(event) {
    event.preventDefault();
    makeGrid(height,width);
});

function makeGrid(height,width) {
    canvas.innerHTML = ""
    for (let ri = 0; ri < height; ri++){
        let row = canvas.insertRow(ri);
        for (let ci = 0; ci < width; ci++) {
            let cell = row.insertCell(ci);
            cell.addEventListener('click', function() {
                cell.style.backgroundColor = color
            });
        }
    }
}