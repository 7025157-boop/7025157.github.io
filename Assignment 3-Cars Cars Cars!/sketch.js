// Objects Assignment: Cars
// Jennifer L
// October 20, 2026

//Global variables
let myCar; let myTrunk;
let startTime = 0;

async function setup() {
  createCanvas(1200, 800);
  let x = 0; let y = random(200, 400);
  // let x = 100; let y = 300;
  // let c = color(random(255), random(255), random(255));

  myCar = new Vehicle(0, color(random(255), random(255), random(255)), x, y, 1, 2);
  myTrunk = new Vehicle(1, color(random(255), random(255), random(255)), x, y + 70, 0, 5);
}

function draw() {
  background(230);
  drawRoad();
  myCar.display();
  myCar.action();
  myTrunk.display();
  myTrunk.action();

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
  }

  move() { 
    switch (this.direction) {
      case 0:
        this.x -= this.xSpeed;

        if (this. x < 0){
          this.x = width;
        }
        break;
      case 1:
        this.x += this.xSpeed;
        if (this.x > width){
          this.x = 0;
        }
        break;
    }
  }

  speedUp() {
    this.xSpeed += random(0, 5);
  }

  speedDown() {
    this.xSpeed -= random(0, 5);
  }

  changeColor() {
    this.color = color(random(255), random(255), random(255));

  }

  action() {
    this.move();
    if (random(100) < 1) {
      this.speedUp();
      this.speedDown();
      this.changeColor();
    }
  }
}


