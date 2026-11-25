//
let scale = 20; //the size of the tree


function setup() {
  createCanvas(500, 500);
  background(255);

}

function draw() {
  drawTree(width / 2, height * 0.9, 90, 6);
  drawLeaf(width / 2, height *0.9, 10, 6);
}

function drawLine(x1, y1, x2, y2, depth) {
  //draw a line segment connecting (x1,y1) to (x2,y2)
  line(x1, y1, x2, y2);
}
function drawCircle(x, y, size, depth) {
  //draw a line segment connecting (x1,y1) to (x2,y2)
  circle(x, y, size, depth);
}

function drawTree(x1, y1, angle, depth) { //depth: branches
  //base: when the recursion meets this condition, it stops recursing (?)
  if (depth > 0) {
    let x2 = x1 + (cos(radians(angle)) * depth * scale);     //calculate *endpoints* of current branchusing trig ratios
    let y2 = y1 - (sin(radians(angle)) * depth * scale);     //Get shorter based on depth

    //inside the ():  

    drawLine(x1, y1, x2, y2, depth);

    //for a 2-branch tree:
    //recursive call
    drawTree(x2, y2, angle - 30, depth - 1);
    drawTree(x2, y2, angle + 30, depth - 1);
    drawTree(x2, y2, angle, depth - 1);
  }
}

function drawLeaf(x, y, size, depth){
  //bases, conditional statement
  if (depth < 5){
    drawCircle(x, y, size, depth*scale);
  }
}