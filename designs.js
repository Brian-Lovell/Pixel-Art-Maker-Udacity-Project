// Set variables for table and form
let canvas = document.querySelector('#pixelCanvas');
let size = document.querySelector('#sizePicker');
// When clicking submit prevent page refresh and launch makeGrid function
size.addEventListener('submit', function(event) {
    event.preventDefault();
    makeGrid();
});

function makeGrid() {
    // First erase the current grid
    canvas.innerHTML = ""
    // Get current values for heigh and width from the form
    let height = document.getElementById('inputHeight').value;
    let width = document.getElementById('inputWidth').value;
    // create table rows and columns
    for (let ri = 0; ri < height; ri++){
        let row = canvas.insertRow(ri);
        for (let ci = 0; ci < width; ci++) {
            let cell = row.insertCell(ci);
            // update cells to use current color when clicked
            cell.addEventListener('click', function() {
                let color = document.getElementById('colorPicker').value;
                cell.style.backgroundColor = color
            });
        }
    }
}