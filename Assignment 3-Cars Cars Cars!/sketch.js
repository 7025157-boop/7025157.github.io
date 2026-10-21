// Objects Assignment: Cars
// Jennifer L
// October 20, 2026

//Global variables
let myCar;

async function setup() {
  createCanvas(1200, 800);
  // let x = random(0, width); let y = random(200, 400);
  let x = 100; let y = 300;
  // let c = color(random(255), random(255), random(255));

  myCar = new Vehicle(0, "red", x, y, 1, 2);
}

function draw() {
  background(230);
  drawRoad();
  myCar.display();

}

function drawRoad() {
  noStroke();
  fill("black");
  rect(0, 200, 1200, 400);

  //draw dividing lines
  let lineLength = 40;
  for (let x = 0; x < width; x += lineLength + 20) {
    fill("white");
    rect(x, 400, lineLength, 2);
  }
}

class Vehicle {
  constructor(type, color, x, y, direction, xSpeed) {
    this.type = type;
    this.color = color;
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.xSpeed = xSpeed;
  }

  display() {

    fill(this.color);

    switch (this.type) { //0-car; 1-trunk
      case 0:
        rect(this.x, this.y, 30, 10);
        break;
      case 1:
        rect(this.x, this.y, 50, 40);
        break;
    }

    switch (this.direction) {
      case 0:
        this.x -= this.xSpeed;
        break;
      case 1:
        this.x += this.xSpeed;
        break;
    }
  }
}


