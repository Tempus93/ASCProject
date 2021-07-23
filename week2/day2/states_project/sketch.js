let state = "circle"


function setup() {
    createCanvas(500,500);
    
}

function draw() {
    background(220);
    let r = random(0,255);    
    let g = random(0,255);
    let b = random(0,255);
    let opacity = random(120,180);

    fill(r,g,b,opacity);
    

    
    fill("red")
    if(state == "circle"){
        ellispe(mouseX,mouseY,50,50);
    }
    else if(state == "rectangle") {
        rect(mouseX,mouseY,50,50);
    }
    
}