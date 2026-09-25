// Drawing with Single Loops
// Jen
// Sept 25, 2026

//global variable
// let x = 

async function setup() {
  createCanvas(1000, 1000);
}

function worm(y, size) {
  //use this function to draw a line of circles
  // y = (number)height at which to draw a line
  // size = (number) diameter
  for (let x = size / 2; x < width; x += size) {
    circle(x, y, size);
  }

}

function gradientBackground() {
  noStroke();

  let h = 50; let y = 0;
  while (y < height) {
    let mappedY = map(y, 0, height, 0, 255);
    fill(mappedY, mouseX / 5, mouseY / 5);
    rect(0, y, width, h);
    y += h;
  }

  stroke(0);

}

function horizontal(y, size) {
  for (let x = size / 2; x < width; x += size + size * 1.1) {
    circle(x, y, size);
  }
}

function vertical(x, size) {
  for (let y = size / 2; y < height; y += size + size * 1.1) {
    circle(x, y, size);
  }
}

function linesWhatever() {

}

function draw() {
  // background(220);
  // gradientBackground();
  // worm(50, 30);
  // worm(height / 2, 80);
  horizontal(0, 50);
  horizontal(1000, 50);
  vertical(0, 50);
  vertical(1000, 50);
}