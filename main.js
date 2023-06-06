var palabras = ["HTML", "CSS", "JAVASCRIPT"];
var sopaDeLetras = [
    ['H', 'T', 'M', 'L', 'R', 'P', 'S', 'T','H','K','R'],
    ['C', 'J', 'A', 'V', 'A', 'S', 'C', 'R','I','P','T'],
    ['S', 'R', 'C', 'C', 'S', 'S', 'M', 'T','B','A','C'],
    ['L', 'S', 'A', 'L', 'U', 'S', 'L', 'O','X','q','x'],
    ['C', 'U', 'E', 'R', 'O', 'R', 'P', 'E','N','Z','M'],
    ['A', 'J', 'P', 'X', 'A', 'M', 'E', 'A','J','G','B'],
    ['S', 'C', 'R', 'I', 'P', 'T', 'C', 'D','J','F','O'],
    ['S', 'N', 'M', 'M', 'F', 'A', 'O', 'J','G','D','E'],
];

function generarSopaDeLetras() {
    var sopaDiv = document.getElementById('sopa-de-letras');
    var palabrasDiv = document.getElementById('palabras');

    for (var i = 0; i < sopaDeLetras.length; i++) {
        var row = document.createElement('div');
        row.className = 'row';

        for (var j = 0; j < sopaDeLetras[i].length; j++) {
            var square = document.createElement('div');
            square.className = 'square';
            square.innerText = sopaDeLetras[i][j];
            square.dataset.row = i;
            square.dataset.col = j;
            square.onclick = checkWord;

            row.appendChild(square);
        }

        sopaDiv.appendChild(row);
    }

    for (var k = 0; k < palabras.length; k++) {
        var palabra = document.createElement('p');
        palabra.innerText = palabras[k];
        palabra.id = 'palabra-' + k;
        palabrasDiv.appendChild(palabra);
    }
}

function checkWord() {
    var row = parseInt(this.dataset.row);
    var col = parseInt(this.dataset.col);
    var selectedWord = "";

    // Horizontal hacia la derecha
    for (var i = col; i < sopaDeLetras[row].length; i++) {
        selectedWord += sopaDeLetras[row][i];
        highlightSquare(row, i);
    }

    // Vertical hacia abajo
    for (var i = row; i < sopaDeLetras.length; i++) {
        selectedWord += sopaDeLetras[i][col];
        highlightSquare(i, col);
    }

    // Comprobar si la palabra seleccionada está en la lista
    if (palabras.includes(selectedWord)) {
        var palabraIndex = palabras.indexOf(selectedWord);
        var palabraElement = document.getElementById('palabra-' + palabraIndex);
        palabraElement.classList.add('correct');
        alert("¡Correcto! Has encontrado la palabra: " + selectedWord);
    } else {
        alert("¡Error! La palabra seleccionada no está en la lista.");
    }
}

function highlightSquare(row, col) {
    var square = document.querySelector('[data-row="' + row + '"][data-col="' + col + '"]');
    square.classList.add('correct');
}
