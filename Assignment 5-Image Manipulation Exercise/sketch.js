// Image Manipulation Exercise
// Jennifer
// November 16

async function loadAssets() {
  chip = await loadImage("/assets/chip.jpg");
  hand = await loadImage("/assets/hand.jpg");
  nuit = await loadImage("/assets/nuit.jpg");
  race = await loadImage("/assets/race.jpg");
}

async function setup() {
  await loadAssets();
  createCanvas(chip.width, chip.height);
}

function draw() {
  background(220);
  loadPixels();
  image(chip, 0, 0);
  majorityColor();
  chip.updatePixels();
}

function majorityColor() {
  for (let i = 0; i < pixels.length; i += 4) {
    let r = pixels[i];
    let g = pixels[i + 1];
    let b = pixels[i + 2];

    if (r >= g && r >= b){
      setPixelOneD(i, 255, 0, 0);
    }

    if (g > r && g > b){
      setPixelOneD(i, 0, 255, 0);
    }

    if (b > g && b > r){
      setPixelOneD(i, 0, 0, 255);
    }
  }
}

function setPixelOneD(pos, r, g, b) {
  //pos - 1D lication of pixel's red component
  //r, g, b: new color values 0-255
  pixels[pos] = r;
  pixels[pos + 1] = g;
  pixels[pos + 2] = b;
}