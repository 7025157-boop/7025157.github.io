// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


async function setup() {
  createCanvas(900, 600);
}

function draw() {
  //draw background
  background("#85D1C2");
  fill("#D5EBFF");
  noStroke();
  rect(0, 0, 900, 300);
  fill("#e9d9b8");
  noStroke();
  rect(0, 350, 900, 100);
  //trees
  fill("#47a8a0");
  noStroke();
  ellipse(70, 200, 80, 150);
  ellipse(260, 220, 70, 100);
  ellipse(450, 200, 80, 150);
  ellipse(640, 220, 60, 100);
  ellipse(830, 200, 80, 150);
  fill("#755f50");
  noStroke();
  rect(60, 200, 20, 120);
  rect(250, 220, 20, 100);
  rect(440, 200, 20, 120);
  rect(630, 220, 20, 100);
  rect(820, 200, 20, 120);
  //draw sun
  fill("#ffe0a7");
  noStroke();
  circle(800, 50, 80);
}
