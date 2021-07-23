function setup() {
    createCanvas(500,500);
    background(0);

}

function draw() {
    background(0);

    let ball1 = new ball(150,250,255,0,0);
    let ball2 = new ball(250,250,0,255,0);
    let ball3 = new ball(350,250,0,0,255);


    fill(ball1.redValue,ball1.greenValue,ball1.blueValue);
    ellipse(ball1.Xpos,ball1.Ypos,100);

    fill(ball2.redValue, ball2.greenValue,ball2.blueValue);
    ellipse(ball2.Xpos,ball2.Ypos,100);

    fill(ball3.redValue,ball3.greenValue,ball3.blueValue);
    ellipse(ball3.Xpos,ball3.Ypos,100);
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