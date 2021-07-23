let Xpos = 50 ;
let Ypos = 50;
let Xspeed = 5;
let Yspeed = 5;
let Xdirection = 1;
let Ydirection = 1;

function setup(){
    createCanvas(500,500);
    
    background(0);
    noStroke();
}

function draw(){
    fill(0,100);
    rect(0,0,width,height);

    fill('green');
    ellipse(Xpos,Ypos,25);

    if(Xpos > 475 || Xpos < 25){
        Xdirection *= -1
    }

    if(Ypos > 475 || Ypos < -25){
        Ydirection *= -1
    }
    Xpos += Xspeed * Xdirection;
    Ypos += Yspeed * Ydirection;
    
    

}