let myXpos = 100;
let myYpos = 100;
let enXpos = 300;
let enYpos = 300;

let mytop,mybottom,myleft,myright;
let entop,enbottom,enleft,enright;
let enSize  =25;
let score = 0;

let img1;
let img2;

function preload(){
    img1 = loadImage("Images/poke1.png");
    img2 = loadImage("Images/poke2.png");

}
function setup(){
    createCanvas(500,500);
    background(0);
    noStroke();


    imageMode(CENTER);

}


function draw(){
    background(0);

    // enemy character
    image(img1,enXpos,enYpos,enSize,enSize);

    // My character
    image(img2,myXpos,myYpos,25,25);

    // Hitboxes 
    myleft = myXpos - 25;
    myright = myXpos + 25;
    mytop = myYpos - 25;
    mybottom = myYpos + 25;

    enright = enXpos + 25;
    enleft  = enXpos - 25;
    entop = enYpos - 25;
    enbottom = enYpos + 25;
    
    // Scoreboard
    fill('white');
    textSize(22);
    text(`Score: ${score}`,1,20);

    // Movement
    if(keyIsDown(LEFT_ARROW)){
        myXpos -= 3;
    }
    
    if(keyIsDown(RIGHT_ARROW)){
        myXpos += 3;
    }

    if(keyIsDown(UP_ARROW)){
        myYpos -= 3;
    }
    
    if(keyIsDown(DOWN_ARROW)){
        myYpos += 3;
    }

    // Collision Detection
    if (myleft > enright || myright < enleft || mytop > enbottom || mybottom < entop){

    }
    
    else {
        enSize = random(25,100);
        score += 1;    
        enXpos = random(1,500);
        enYpos = random(1,500);
    }    
}