// Objects Assignment: Cars
// Jennifer L
// October 20, 2026


async function setup() {
  createCanvas(1200, 800);
}

function draw() {
  background(230);
  drawRoad();
}

function drawRoad(){
  noStroke();
  fill("black");
  rect(0, 200, 1200, 400);

  //draw dividing lines
  let lineLength = 40;
  for (let x = 0; x < width; x += lineLength + 20){
    fill("white");
    noStroke;
    rect(x, 400, lineLength, 2);
  }
}

class Vehicle{
  constructor (x, y, carWidth, carLength){
    this.x = x;
    this.y = y;
    this.carWidth = carWidth;
    this.carLength = carLength;
  }
  display(){
    rect(this.x, this.y, this.carWidth, this.carLength); 
  }
}
