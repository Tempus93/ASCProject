// Game States
const states = {
    MainMenu: 0,
    Game: 1,
    Paused: 2,
    Win: 3,
    Lose: 4
}





// Selection
const selection = [
    {
        Pokemon = "Charzard",
        image = poke_fire,
        Beats = "Vensaur"
    },
    {
        Pokemon = "Vensaur",
        image = poke_grass,
        Beats = "Blastoise"
    },  
    {
        Pokemon = "Blastoise",
        image = poke_water,
        Beats = "Charzard"
    }
]

// Random Selection
function Random() {
    let RandonIndex = math.Random() * selection.length;
    RandonIndex;

}
// Preload image files
let bg;
let title_1;
let title_2;
let poke_fire;
let poke_grass;
let poke_water;
function preload(){
    bg  = Imageload("images/bg.jpg")
    title_1 = Imageload("images/T2.png")
    title_2 = Imageload("images/T1.png")
    poke_fire = Imageload("images/Charzard.png")
    poke_grass = Imageload("images/vensaur.png")
    poke_water = Imageload("images/blastoise.png")

}



function setup() {
    createCanvas(500,500);
    background(bg);
    imageMode(CENTER);

}

function draw() {

    image(title_1,100,60,300,100);
    image(title_2,110,150,300,100);
    


}

function keyPressed(){

}