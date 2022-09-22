// initializing variables
let spriteImage,
  sprites = [];
let spriteX = 5,
  spriteY = 2;
let count = 0;
let row = 0;
let x = 0,
  y = 0;
let xdir = 0,
  ydir = 0;

function preload() {
  // load the full sprite image
  spriteImage = loadImage("assets/bird1.png");
}

function setup() {
  createCanvas(1440, 1024 / 3);
  // break the sprite image into individual images and store it into a 2D array
  // w -> width of each individual image
  // h -> height of each individual image
  let w = spriteImage.width / spriteX;
  let h = spriteImage.height / spriteY;

  // loop through the rows
  for (let i = 0; i < spriteY; i++) {
    // create an empty array for each row
    sprites[i] = [];

    // within each row, loop through the columns
    for (let j = 0; j < spriteX; j++) {
      // store the images in the 2D array
      sprites[i][j] = spriteImage.get(j * w, i * h, w, h);
    }
  }
}

// shows images from 2D array
function draw() {
  background(0);
  image(sprites[row][count], x, y + 50);

  // ensures avatar is in constant motion to visually guide viewer
  if (frameCount % 4 == 0) {
    count = (count + 1) % spriteX;
  }

  // moves avatar right if right arrow pressed
  if (keyIsDown(RIGHT_ARROW)) {
    row = 1;
    xdir = 7;
    x = x + xdir;
  }

  // changes webpage based on x position of avatar
  if (x > 1440) {
    window.open("https://suedfood.github.io/desktop3.html", "_top");
  }
}


// link to project: https://editor.p5js.org/suedfood/sketches/2q5krPy0f
