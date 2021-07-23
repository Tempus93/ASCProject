let bg;
let y = 0;

function preload() {
    bg = loadImage('images/background.jpeg');

}
function setup() {
  createCanvas(500, 500);
}

function draw() {
  image(bg,0,0,width,height);
}