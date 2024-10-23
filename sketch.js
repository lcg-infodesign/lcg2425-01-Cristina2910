let cols; //numero di colonne
let rows; //numero di righe
let cellSize;
let margin = 20; 

function setup() {
  //le dimensioni del canvas dipendono da quelle della finestra
  createCanvas(windowWidth, windowHeight); 
  cols = floor((width - 2 * margin) / 20); //calcola le colonne considerando il margine
  rows = floor((height - 2 * margin) / 20); //calcola le righe considerando il margine
  cellSize = (width - 2 * margin) / cols; //regola la dimensione delle celle
  strokeWeight(4); //spessore delle linee
  noLoop(); //disegna solo una volta
}

function draw() {
  background("white"); 
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * cellSize + margin; //aggiungi il margine all'asse X
      let y = j * cellSize + margin; //aggiungi il margine all'asse Y
      drawRandomLine(x, y, cellSize); //disegna le linee casuali
    }
  }
}

//funzione per disegnare linee casuali in una cella
function drawRandomLine(x, y, size) {
  let choice = int(random(4)); //serve a scegliere casualmente una delle 4 opzioni
  
  stroke(0); //riferito alle linee nere
  if (choice === 0) {
    //linea orizzontale
    line(x, y + size / 2, x + size, y + size / 2);
  } else if (choice === 1) {
    // inea verticale
    line(x + size / 2, y, x + size / 2, y + size);
  } else if (choice === 2) {
    //linea diagonale che va dall'angolo in alto sinistra a quello in basso destra
    line(x, y, x + size, y + size);
  } else if (choice === 3) {
    //linea diagonale che va dall'angolo in basso sinistra a quello in alto destra
    line(x, y + size, x + size, y);
  }
}

//voglio ridimensionare il canvas quando la finestra cambia dimensione
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  cols = floor((width - 2 * margin) / 20); //per ricalcolare le colonne considerando il margine
  rows = floor((height - 2 * margin) / 20); //per ricalcolare le righe considerando il margine
  cellSize = (width - 2 * margin) / cols; //per ricalcolare la dimensione delle celle
  redraw(); 
}
