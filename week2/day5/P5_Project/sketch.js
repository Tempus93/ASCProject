// Main Variables

let bg; 

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

// load the images and background
function preload() {
   let bg = loadImage("images/background.jpeg")
}

