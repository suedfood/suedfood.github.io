let spriteImage, sprites =[];
let spriteX = 3, spriteY = 3;
let count = 0;
let row = 0;
let x = 0, y = 0;
let xdir = 0, ydir = 0;

function preload() {
  //load the full sprite image
  spriteImage = loadImage('images/birdie.png');
}

function setup() {
  createCanvas(1440, 1024/3);
  // break the sprite image into individual images and store it into a 2D array (Note - 2D array is basically where each element fo the arrat is another array)
  // w -> width of each individual image
  // h -> height of each individual image
  let w = spriteImage.width/spriteX;
  let h = spriteImage.height/spriteY;
  
  //loop through the 4 rows
  for(let i = 0; i<spriteY;i++) {
    //create an empty array for each row
    sprites[i] = [];
    
    //within each row, loop through the columns
     for(let j = 0;j<spriteX;j++) {
      // store the images in the 2D array
      sprites[i][j] = spriteImage.get(j*w, i*h, w, h ); 
    }
  }
  
}

function draw() {
  background(0);
  //draw the appropriate image from the array based on the row selected (check keyPressed) and the x and y position
  image(sprites[row][count],x,y+30);
  if(frameCount%5 == 0) {
    count = (count+1) % spriteX;
    row = (row + 1)%3
    count = (count + 1)%3
  }
  if (keyIsDown(RIGHT_ARROW)) {
    ydir = 0; // make sure the sprite doesnt move along y axis
    xdir = 7; // make sprite move left
    x = x + xdir;
    y = y + ydir;
  }
    if (x>1440) {
    window.open("https://www.javatpoint.com/how-to-change-text-color-in-html", "_blank")
  }
}