let ballArray = [];

function setup() {
    createCanvas(500,500);

    for (let i = 0; i < 10; i++){
        let temp = new ball(random(0,500),250,0,255,0,random(2,5));
        ballArray.push(temp);
    }
}


function draw() {
    background(0);

    for(let i = 0;i < ballArray.length;i++){
        fill(ballArray[i].redValue,ballArray[i].greenValue,ballArray[i].blueValue);
        ellipse(ballArray[i].Xpos,ballArray[i].Ypos,50);
        ballArray[i].Ypos += ballArray[i].speedValue;

        if(ballArray[i].Ypos > 525){
            ballArray[i].Ypos = -25;
        }

    }

}

class ball {
    constructor(x,y,r,g,b,speed) {
        this.Xpos = x;
        this.Ypos = y;
        this.redValue = r;
        this.greenValue = g;
        this.blueValue = b;
        this.speedValue = speed;

    }
}
