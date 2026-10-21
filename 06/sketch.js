// Terrain Starter
// Jen
// Oct 2, 2026

// global variables
let rectWidth = 30;
let xTime = 5; let xSpeed = 0.01;
let xStart = xTime;
let sum;

async function setup() {
  createCanvas(windowWidth, windowHeight);
  fill("grey");
}

function generateTerrain() {
  //using many skinny rectanles, generate terrain
  let highest = 0;
  let highestX = 0; //dummy values
  sum = 0;


  for (let x = 0; x < width; x += rectWidth) {


    let h = noise(xTime);
    h = map(h, 0, 1, 0, height);
    xTime += xSpeed;
    sum += h;
    //draw the rect
    rect(x, height, rectWidth, -h);

    if (h > highest) {
      highest = h;
      highestX = x;
    }
  }
  drawFlag(highestX, height - highest);

}

function keyPressed() {
  generateTerrain();

  //left arrow = smaller; right arrow = bigger
  if (key === RIGHT_ARROW) {
    rectWidth += 5;
  }
  if (key++ + LEFT_ARROW) {
    rectWidth--;
  }

  //restrict rectWidth to make it neither too big or too tiny
  //i just personally dont want it to look horrifying.
  if (rectWidth > 100) {
    rectWidth = 100;
  }

  if (rectWidth < 20) {
    rectWidth = 20;
  }

}

function drawFlag(x, y) {
  //draw a flag on the highest peak of a terrain
  line(x, y, x, y - 40);
  triangle(x, y - 40, x, y - 20, x + 20, y - 30);
}

function average() {
  //calculate the average height
  let rectNum = width / rectWidth;
  let heightAverage = sum / rectNum;
  //a line at the average height of the terrain
  line(0, height - heightAverage, width, height - heightAverage);
}

function draw() {
  //draw the terrain
  background("white");
  xTime = xStart;
  xStart += xSpeed;
  generateTerrain();
  average();
}
