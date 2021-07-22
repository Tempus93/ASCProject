let MyXpos = 100;
let MyYpos = 100;

function setup(){
    createCanvas(500,500);
    background(0);

    noStroke();
    rectMode(CENTER);
}

function draw(){
    background(0);

    fill('red')
    rect(MyXpos,MyYpos,50)

    if(keyIsDown(LEFT_ARROW)){
        MyXpos -= 3;
    }
    
    if(keyIsDown(RIGHT_ARROW)){
        MyXpos += 3;
    }

    if(keyIsDown(UP_ARROW)){
        MyYpos -= 3;
    }
    
    if(keyIsDown(DOWN_ARROW)){
        MyYpos += 3;
    }



}