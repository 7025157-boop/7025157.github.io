// Objects Assignment: Cars
// Jennifer L
// October 20, 2026

//Global variables
let startTime = 0;
let eastbound = [];
let westbound = [];
let c;
let light;

function setup() {
  createCanvas(1200, 800);
  let x = random(0, width);
  for (let i = 0; i < 10; i++) {
    c = color(random(255), random(255), random(255));
    eastbound.push(new Vehicle(random([0, 1]), c, x + random(- width, width), random(200, 350), 1, 2));
    westbound.push(new Vehicle(random([0, 1]), c, x + random(- width, width), random(400, 560), 0, 2));
  }

  light = new TrafficLight("green");
}

function draw() {
  background(230);
  drawRoad();
  for (let i = 0; i < eastbound.length; i++) {
    eastbound[i].display();
    eastbound[i].action();
  }

  for (let i = 0; i < westbound.length; i++) {
    westbound[i].display();
    westbound[i].action();
  }

  light.display();
  light.timer();

}

function keyPressed() {
  if (keyCode === 32) {
    light.updateColor();
  }
}

function mousePressed() {
  if (mouseButton.left) {
    c = color(random(255), random(255), random(255));
    eastbound.push(new Vehicle(random([0, 1]), c, mouseX, random(200, 350), 1, 2));
  }

  if (mouseButton.left && keyIsPressed && keyCode === 16) {
    westbound.push(new Vehicle(random([0, 1]), c, mouseX, random(400, 560), 0, 2));
  }
}


function drawRoad() {
  noStroke();
  fill("black");
  rect(0, 200, 1200, 400);

  //draw dividing lines
  let lineLength = 40;
  for (let x = 0; x < width; x += lineLength + 20) {
    fill("yellow");
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
        fill("white");
        rect(this.x + 2, this.y - 5, 5, 2);
        rect(this.x + 20, this.y - 5, 5, 2);
        rect(this.x + 2, this.y + 13, 5, 2);
        rect(this.x + 20, this.y + 13, 5, 2);
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

        if (this.x < 0) {
          this.x = width;
        }
        break;
      case 1:
        this.x += this.xSpeed;
        if (this.x > width) {
          this.x = 0;
        }
        break;
    }
  }

  speedUp() {
    if (this.xSpeed < 7) {
      this.xSpeed += 2;
    }

  }

  speedDown() {
    if (this.xSpeed > 2) {
      this.xSpeed -= 2;

    }
  }

  changeColor() {
    this.color = color(random(255), random(255), random(255));

  }

  action() {
    if (light.color === "green") {
      this.move();
      let r = random(100);
      if (r < 1) {
        this.speedUp();
      }
      else if (r < 2) {
        this.speedDown();
      }
      if (r < 1) {
        this.changeColor();
      }
    }
  }

}

class TrafficLight {
  constructor(color) {
    this.color = color;
    this.startCount = 0;
  }

  display() {
    fill(this.color);
    circle(65, 65, 60);
  }

  updateColor() {
    if (this.color === "green") {
      this.color = "red";
      this.startCount = frameCount;
    }
    else {
      this.color = "green";
    }
  }

  timer() {
    if (this.color === "red" && frameCount - this.startCount >= 120) {
      this.color = "green";
    }
  }
}