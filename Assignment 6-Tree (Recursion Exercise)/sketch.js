//
let scale = 20; //the size of the tree
// let branchAngle = map(branchAngle, 0, mouseX, 30, 180);

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);

}

function draw() {
  drawTree(width / 2, height * 0.9, map(angle, 0, mouseX, 30, 180), 6);
}

function drawLine(x1, y1, x2, y2, depth) {
  //thicker line if closer to the trunk
  strokeWeight(depth);

  //draw a line segment connecting (x1,y1) to (x2,y2)
  line(x1, y1, x2, y2);
}


function drawTree(x1, y1, angle, depth) { //depth: branches
  //base: when the recursion meets this condition, it stops recursing (?)  
  let x2 = x1 + (cos(radians(angle)) * depth * scale);     //calculate *endpoints* of current branchusing trig ratios
  let y2 = y1 - (sin(radians(angle)) * depth * scale);     //Get shorter based on depth
  let leafSize = random(10, 20);

  if (depth > 0) {


    //inside the ():  

    drawLine(x1, y1, x2, y2, depth);

    //for a 3-branch tree:
    //recursive call
    drawTree(x2, y2, angle - 30, depth - 1);
    drawTree(x2, y2, angle + 30, depth - 1);
    drawTree(x2, y2, angle, depth - 1);
  }


  if (depth < 5) {
    drawLeaf(x2, y2, leafSize * depth * 0.5);
  }
}

function drawLeaf(x, y, size) {
  //bases, conditional statement
  fill(color(random(255), random(255), random(255)));

  circle(x, y, size);
}