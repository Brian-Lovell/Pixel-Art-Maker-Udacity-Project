// Select color input
var color_input = document.getElementById(colorPicker);
// Select size input
var canvas_height = document.getElementById(inputHeight);
var canvas_width = document.getElementById(inputWidth);
// Select Canvas
var canvas = document.getElementById(pixelCanvas);

// When size is submitted by the user, call makeGrid()
var submit_button = document.getElementById(submitButton);
submit_button.addEventListener("click", makeGrid);


function makeGrid() {
    for (let i = 0; i < canvas_height; i++) {
        canvas.insertRow(i);
    }
        for (let x = 0; x < canvas_width; x++) {
            canvas.insertCell(x);
        }
}
