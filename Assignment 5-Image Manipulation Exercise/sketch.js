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
  image(chip, 0, 0);
}
