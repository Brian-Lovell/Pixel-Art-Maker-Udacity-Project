let canvas = document.querySelector('#pixelCanvas');
let size = document.querySelector('#sizePicker');
size.addEventListener('submit', function(event) {
    event.preventDefault();
    makeGrid();
});

function makeGrid() {
    canvas.innerHTML = ""
    let height = document.getElementById('inputHeight').value;
    let width = document.getElementById('inputWidth').value;
    for (let ri = 0; ri < height; ri++){
        let row = canvas.insertRow(ri);
        for (let ci = 0; ci < width; ci++) {
            let cell = row.insertCell(ci);
            cell.addEventListener('click', function() {
                let color = document.getElementById('colorPicker').value;
                cell.style.backgroundColor = color
            });
        }
    }
}