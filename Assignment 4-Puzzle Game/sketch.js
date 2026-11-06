// 2D Arrays
// Jennifer
// November 3, 2026

// grid sized 6 * 5
// 0 (black)       255 (white)
let r;

let grid = [
  // [255, 0, 255, 0, 255, 0],
  // [0, 255, 0, 255, 0, 255],
  // [255, 0, 255, 0, 255, 0],
  // [0, 255, 0, 255, 0, 255],
  // [255, 0, 255, 0, 255, 0]
  [r, r, r, r, r, r],
  [r, r, r, r, r, r],
  [r, r, r, r, r, r],
  [r, r, r, r, r, r],
  [r, r, r, r, r, r]
];

let rows = grid.length;
let cols = grid[0].length;
const tileSize = 60;


function setup() {
  createCanvas(cols * tileSize, rows * tileSize);
  randomize();
}

function draw() {
  background(220);
  renderGrid();
  getCurrentX();
  getCurrentY();
  win();
}

function randomize(){
  for(let i = 0; i < rows; i++){
    for(let j = 0; j < cols; j++){
      r = grid[i][j];
      r = random([0, 255]);
    }
  }
}

function getCurrentX() {
  //determine current col.pos of the mouse
  fill("red");
  let constrainedX = constrain(mouseX, 0, width - 1);
  return int(constrainedX / tileSize);
}

function getCurrentY() {
  let constrainY = constrain(mouseY, 0, height - 1);
  return int(constrainY / tileSize);
}

function flip(x, y) {
  //flip the tile at position x, y
  if (grid[y][x] === 255) {
    grid[y][x] = 0;
  }
  else {
    grid[y][x] = 255;
  }
}

function mousePressed() {
  //only do a flip if mouse is on canva
  if (mouseX < width && mouseY < height) {
    let x = getCurrentX();
    let y = getCurrentY();

    if (keyIsPressed && keyCode === 16) {
      flip(x, y);
    }

    if (!keyIsPressed) {
      //if they exists, flip the cardinal neighbours

      flip(x, y);

      if (x - 1 >= 0) {
        flip(x - 1, y);
      }

      if (y - 1 >= 0) {
        flip(x, y - 1);
      }

      if (x + 1 < cols) {
        flip(x + 1, y);
      }

      if (y + 1 < rows) {
        flip(x, y + 1);
      }
    }

  }



}

function renderGrid() {
  //interpret the data stored in 2d array and draw a matrix to square to reflect it
  for (let y = 0; y < rows; y++) { //y-01234
    for (let x = 0; x < cols; x++) { //x-012345
      let fillColor = grid[y][x];
      fill(fillColor);
      square(x * tileSize, y * tileSize, tileSize);

    }
  }
}



function win() {
  let allsame = true;
  let firstSquare = grid[0][0];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] !== firstSquare) {
        allsame = false;
      }
    }
  }
  if (allsame === true) {
    fill("blue");
    textSize(48);
    textAlign(CENTER);
    text("you win", width / 2, height / 2);
  }


}

