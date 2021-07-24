// Game States
const states = {
  MainMenu: "MainMenu",
  Game: "Game",
  Paused: "Paused",
  Win: "Winner",
  Lose: "Loser"
}

let mode = states.MainMenu

// Main Menu Image Variables
let bg; 
let title;
let T2;

// moves
const moves = ["Fire","Water","Grass"];

// image association
const images = {
  Fire: "Charzard",
  Water: "Blastoise",
  Grass: "Ivysaur",
  computer: "trainer",
  player: "You"
};

//score and counter
let score_player = 0;
let score_computer = 0;
let play_counter = 0;

function preload() {
  bg = loadImage('images/bg.jpg');
  title = loadImage('images/T2.png')
  T2  = loadImage('images/T1.png')
  Start = loadImage("images/Start.png")
  
}

function setup() {
  createCanvas(500,500);
  imageMode(CORNER);

  

}

function draw() {

  console.log(mode);
  background(bg);
  if(mode == states.MainMenu) {

    //"Pokemon Rock Paper Scissors!" image
    image(title,100,60,300,100);
    image(T2,110,150,300,100);
    
    // Start Image
    image(Start,110,300,300,100);
  }
 if(mode == states.Game){

  fill("black")
  textSize(50)
  text("Game",170,250);

 }

 if(mode == states.Paused) {

  fill("Black");
  textSize(50);
  text("Paused", 150,250);

   
  
  
 }

}

function mouseClicked() {

}

function keyPressed() {
  if(keyCode == ENTER && mode == states.MainMenu){
    mode = states.Game;
    if(keyCode != ENTER) {
      mode = states.MainMenu
    }
  }

  

  if(keyCode === ESCAPE && mode == states.Game){
    mode = states.Paused;
  }

  else{
    mode = states.Game;
  }
}

