let state = "white";

function setup() { 
    createCanvas(500,500);
    background(0);

    noStroke();
}

function draw() {
    fill("red");
    rect(0,0,100);

    fill("green")
    rect(100,0,100);

    fill("blue");
    rect(200,0,100);

    if(state == "white"){
        fill("white")
    }

    else if(state == "red"){
        fill("red")
    }

    else if(state == "green"){
        fill("green")
    }

    else {
        fill("blue")
    }

    ellipse(250,250,200);
}

function mouseClicked() {
    if(mouseX > 0 && mouseX < 100 && mouseY > 0 && mouseY < 100) {
        state = "red"
    }
    else if(mouseX > 100 && mouseX < 200 && mouseY > 0 && mouseY < 100) {
        state = "green"
    }

    else if(mouseX > 200 && mouseX < 300 && mouseY > 0 && mouseY < 100) {
        state = "blue"
    }
    
}