let myXpos = 100;
let myYpos = 100;
let enXpos = 300;
let enYpos = 300;

let mytop,mybottom,myleft,myright;

let entop,enbottom,enleft,enright;

function setup(){
    createCanvas(500,500);
    background(0);
    noStroke();


    rectMode(CENTER);

}

function draw(){
    background(0);

    // enemy character
    fill('blue')
    rect(enXpos,enYpos,50)

     // My character
     fill('red')
     rect(myXpos,myYpos,50,50)

    // Hitboxes 
    myleft = myXpos - 25;
    myright = myXpos + 25;
    mytop = myYpos - 25;
    mybottom = myYpos + 25;

    enright = enXpos + 25
    enleft  = enXpos - 25
    entop = enYpos - 25
    enbottom = enYpos + 25
    
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
    if(myleft > enright || myright < enleft || mytop > enbottom || mybottom < entop){
        fill('yellow')
        textSize(22)
        text("No Collision",190,480)
    }

    else{    
        fill("red")
        textSize(22)
        text("THERES COLLISION!!!",140,480);
    }    
}