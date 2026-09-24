// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


// global variables
let bgColor = 0;
// 0-blue; 1-darkblue; 2-grey; 3-purple

async function setup() {
  createCanvas(900, 600);
}

function draw() {
  //draw background
  background("#c4dce0");
  fill("#e4ecf5");
  noStroke();
  rect(0, 0, 900, 300);
  fill("#eed9d9");
  noStroke();
  rect(0, 350, 900, 100);
  //trees
  fill("#80b1ce");
  noStroke();
  ellipse(70, 200, 80, 150);
  ellipse(260, 220, 70, 100);
  ellipse(450, 200, 80, 150);
  ellipse(640, 220, 60, 100);
  ellipse(830, 200, 80, 150);
  fill("#aa9c9d");
  noStroke();
  rect(60, 200, 20, 120);
  rect(250, 220, 20, 100);
  rect(440, 200, 20, 120);
  rect(630, 220, 20, 100);
  rect(820, 200, 20, 120);
  //draw sun
  fill("#ffc4c4");
  noStroke();
  circle(800, 50, 80);

  // draw character
  fill("rgb(255, 223, 223)");
  noStroke();
  ellipse(mouseX, mouseY, 70, 80);
  fill("rgb(121, 105, 109)");
  noStroke();
  circle(mouseX + 15, mouseY - 10, 9);
  fill("rgb(240, 151, 156)");
  noStroke();
  triangle(mouseX+30,mouseY-10, mouseX+40,mouseY-15, mouseX+30,mouseY-20);
  triangle(mouseX,mouseY, mouseX-35,mouseY+5, mouseX-40,mouseY+30);
}

function keyPressed(){
  updateState();
}

function updateState(){
  bgColor++;
  // add logic to keep variable in range 0-3
  if(bgColor > 3){
    bgColor = 0;
  }
}