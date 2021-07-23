let bg;

function preload() {
  bg = loadImage('images/background.jpeg');
  
}

function setup() {
  createCanvas(500, 500);
  background(220);
}

function draw() {
    image(bg,0,0);
}