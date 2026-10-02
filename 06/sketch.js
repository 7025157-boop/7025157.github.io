// Terrain Starter
// Jen
// Oct 2, 2026

// global variables
let rectWidth = 30;
let xTime = 5; let xSpeed = 0.02;
let xStart = xTime;

async function setup() {
  createCanvas(windowWidth, windowHeight);
  fill("grey");
}

function generateTerrain(){
  //using many skinny rectanles, generate terrain
  for (let x = 0; x < width; x += rectWidth){
    //first generate a random height
    // let h = random(0, height);
    //but change this to use noise()... 

    let h = noise(xTime);
    h = map(h, 0, 1, 0, height);
    xTime += xSpeed;

    //draw the rect
    rect(x, height, rectWidth, -h);

    if (h > 0){
      h = 0;
    }

  }
}

function keyPressed(){
  generateTerrain();

  //left arrow = smaller; right arrow = bigger
  if (key === RIGHT_ARROW){
    rectWidth += 5;
  }
  if (key +++ LEFT_ARROW){
    rectWidth --;
  }

  //restrict rectWidth to make it neither too big or too tiny
  if (rectWidth > 100){
    rectWidth = 100;
  }

  if (rectWidth < 20){
    rectWidth = 20;
  }

}

function drawFlag(x, y){
  line();

}

function draw() {
  background("white");
  xTime = xStart;
  xStart += xSpeed; 
  generateTerrain();

}
