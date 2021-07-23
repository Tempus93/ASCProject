let ballArray = [];

function setup() {
    createCanvas(500,500);
    noStroke();

    for (let i = 0; i < 100; i++){
        let temp = new ball(random(0,500),250,random(0,255),random(0,255),random(0,255),random(2,5),random(25,50));
        ballArray.push(temp);
    }
}


function draw() {
    background(0);

    for(let i = 0;i < ballArray.length;i++){
        fill(ballArray[i].redValue,ballArray[i].greenValue,ballArray[i].blueValue);
        ellipse(ballArray[i].Xpos,ballArray[i].Ypos,ballArray[i].sizeValue);
        ballArray[i].Ypos += ballArray[i].speedValue;

        if(ballArray[i].Ypos > 525){
            ballArray[i].Ypos = -25;
        }

    }

}


class ball {
    constructor(x,y,r,g,b,speed,size) {
        this.Xpos = x;
        this.Ypos = y;
        this.redValue = r;
        this.greenValue = g;
        this.blueValue = b;
        this.speedValue = speed;
        this.sizeValue = size;

    }
}
