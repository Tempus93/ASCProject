function setup() {
    createCanvas(500,500);
    background(0);

}

function draw() {
    background(0);
}
 
class ball {
    constructor(x,y,r,g,b) {
        this.Xpos = x;
        this.Ypos = y;
        this.redValue = r;
        this.greenValue = g;
        this.blueValue = b;

    }
}

let ball = {
    Xpos: 100,
    Ypos: 100,
    redValue: 255, 
    greenValue: 0,
    blueValue: 0

}
fill(ball.redValue,ball.greenValue,ball.blueValue);
ellipse(ball.Xpos,ball.Ypos,50);