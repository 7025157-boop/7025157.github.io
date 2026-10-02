// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


// global variables
let x = 100; y = 100;

// 0-light blue; 1-yellow; 2-pink; 3-dark blue
let currentBack = 0;

function setup() {
  createCanvas(900, 600);
}

function drawTrees(y, size) {
  //draw a line of trees with spaces between
  for (let x = size / 2; x < width; x += size + 190) {
    ellipse(x, y, size, size * 1.2);

  }

}

function draw() {
  //draw background
  changeBackgroundColor();

  //draw sun with changing color
  gradientSun();

  //drawCloud
  undateEllipse();

  fill("#c4dce0");
  noStroke();
  rect(0, 300, 900, 300);
  fill("#eee2d9");
  noStroke();
  rect(0, 350, 900, 100);
  //trees
  fill("#80b1ce");
  noStroke();
  drawTrees(200, 120);
  fill("#aa9c9d");
  noStroke();
  rect(50, 200, 20, 120);
  rect(360, 200, 20, 120);
  rect(670, 200, 20, 120);
  

  // draw character
  fill("rgb(255, 223, 223)");
  noStroke();
  ellipse(mouseX, mouseY, 70, 80);
  fill("rgb(121, 105, 109)");
  noStroke();
  circle(mouseX + 15, mouseY - 10, 9);
  fill("rgb(240, 151, 156)");
  noStroke();
  triangle(mouseX + 30, mouseY - 10, mouseX + 40, mouseY - 15, mouseX + 30, mouseY - 20);
  triangle(mouseX, mouseY, mouseX - 35, mouseY + 5, mouseX - 40, mouseY + 30);

  // add name
  fill("#676c7a")
  textSize(25);
  text("Jennifer Li", 5, 595);
}

  

function gradientSun() { //color changes based on the position of the mouse
  noStroke();

  let h = 50; let y = 0;
  while (y < height) {
    let mappedY = map(y, 0, height, 0, 255);
    fill(mappedY, mouseX / 7, mouseY / 7);
    circle(800, 50, 80);
    y += h;
  }

  stroke(0);

}

function undateEllipse() {
  //movement code
  if (keyIsPressed) { //down
    y += 2;
    if (keyIsDown(LEFT_ARROW)) {
      x -= 5;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      x += 5;
    }
    if (keyIsDown(UP_ARROW)) {
      y -= 5;
    }

  }
  fill("white");
  noStroke();
  ellipse(x, y, 180, 60);
  ellipse(x + 300, y + 20, 80, 50);
  ellipse(x + 500, y + 20, 150, 50);
}

function updateState() {
  currentBack++;
  // add logic to keep variable in range 0-3
  if (currentBack > 3) {
    currentBack = 0;
  }
}

function mousePressed() {
  if (mouseButton === CENTER){
    updateState();
  }
}

function changeBackgroundColor() {
  // inspect varialble objectType
  // and draw one of three possible shapes on the Cnavas
  switch (currentBack) {
    case 0:
      background("#e4ecf5");
      break;
    case 1:
      background("#f8efd7");
      break;
    case 2:
      background("#e283af");
      break;
    case 3:
      background("#464a81");
      break;
  }

}

