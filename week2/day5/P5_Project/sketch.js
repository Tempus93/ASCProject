// state
let state = "main_menu";

// Main Menu Image Variables
let bg; 
let title;
let T2;

// Game Image Variables\

// moves
const moves = ["Fire","Water","Grass"];

// image association
const images = {
  Fire: "Charzard",
  Water: "Blastoise",
  Grass: "Ivysaur",
  computer: "trainer",
  player: "ash"
};

//score and counter
let score_player = 0;
let score_computer = 0;
let play_counter = 0;

function preload() {
  bg = loadImage('images/bg.jpg');
  title = loadImage('images/T2.png')
  T2  = loadImage('images/T1.png')
  
}

function setup() {
  createCanvas(500,500);
  noStroke();

}

function draw() {
  if(state == "main_menu") {
    background(bg);
  
  imageMode(CENTER);
  image(title,240,60,300,100);
  image(T2,250,140,300,100);
  }


}

function mouseClicked() {

}