// 2D Arrays
// Jennifer
// November 3, 2026

// grid sized 6 * 5
// 0 (black)       255 (white)
let r = 0;
let grid = [ //generate a 2D array
  [r, r, r, r, r, r],
  [r, r, r, r, r, r],
  [r, r, r, r, r, r],
  [r, r, r, r, r, r],
  [r, r, r, r, r, r]
];

let rows = grid.length;
let cols = grid[0].length;
const tileSize = 100;
let move = 0; let startTime = 0;
let textBar = 250;



async function setup() {
  createCanvas(cols * tileSize + textBar, rows * tileSize);
  randomize();
}

function draw() {
  textSize(40);

  background(220);
  renderGrid();
  getCurrentX();
  getCurrentY();
  win();
  overlay();
}

function randomize() { //make a random arragement at the start. called inside of setup()
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      grid[y][x] = random([0, 255]);
    }
  }
}

function win() { //win condition: all 255 or all 0
  //showing the number of movement
  fill("blue");
  text("Steps:" + move, width - textBar, 50);
  let allsame = true;
  let firstSquare = grid[0][0];

  //timer
  let elapsed = millis() - startTime;
  fill("blue");
  text("Time:" + round(elapsed / 1000), width - textBar, 100);

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (grid[y][x] !== firstSquare) {
        //check if there is any tile different from the first square. 
        //if so, allsame is not true. 
        allsame = false;
      }
    }
  }
  if (allsame === true) { //text appear if allsame is true
    fill("blue");
    textSize(48);
    textAlign(CENTER);
    text("You Win", width / 2, height / 2);
    startTime = elapsed();


  }
}

function getCurrentX() {
  //determine current col.pos of the mouse
  let constrainedX = constrain(mouseX, 0, width - 1);
  return int(constrainedX / tileSize);
}

function getCurrentY() {
  //determine current row.pos of the mouse
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
  if (mouseX < width - textBar && mouseY < height) {
    let x = getCurrentX();
    let y = getCurrentY();

    if (keyIsPressed && keyCode === 16) { //only flip the current square
      flip(x, y);
    }

    if (keyIsPressed && keyCode === 32) { //change the overlay shape by pressing space
      flip(x, y);
      flip(x, y + 1);
      flip(x - 1, y + 1);
      flip(x - 1, y);
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

  move++;
}

function overlay() { //generate a colored overlay to indicate which rectangles will be impacted on a click
  if (mouseX < width - textBar && mouseY < height) {
    let x = getCurrentX();
    let y = getCurrentY();

    fill(136, 216, 230, 110);

    if (!keyIsPressed) {

      square(x * tileSize, y * tileSize, tileSize);

      if (x - 1 >= 0) {
        square((x - 1) * tileSize, y * tileSize, tileSize);
      }
      if (y - 1 >= 0) {
        square(x * tileSize, (y - 1) * tileSize, tileSize);
      }

      if (x + 1 < cols) {
        square((x + 1) * tileSize, y * tileSize, tileSize);
      }

      if (y + 1 < rows) {
        square(x * tileSize, (y + 1) * tileSize, tileSize);
      }
    }
    if (keyIsPressed && keyCode === 32) { //change the overlay shape by pressing space
      square(x * tileSize, y * tileSize, tileSize);
      square(x * tileSize, (y + 1) * tileSize, tileSize);
      square((x - 1) * tileSize, (y + 1) * tileSize, tileSize);
      square((x - 1) * tileSize, y * tileSize, tileSize);
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

