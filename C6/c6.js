let width = 400;
let height = 400;

function setup() {
  createCanvas(width, height);
}

let value = 10239;
let sX = 0;
let sY = 0;
let fX = width/2;
let fY = height/2;

let isLineDone = false;

let firstPointDone = false;
let secondPointDone = false;

let firstX = 0;
let firstY = 0;

let secondX = 0;
let secondY = 0;

let dragging = false;
let dragging2 = false;

function mousePressed() {
    if (isLineDone === true && firstPointDone === false && secondPointDone === false) {
        firstX = mouseX;
        firstY = mouseY;
        firstPointDone = true;
        console.log("first point done");
        circle(firstX, firstY, 10);
        return;
    }

    if (isLineDone === true && firstPointDone === true && secondPointDone === false) {
        secondX = mouseX;
        secondY = mouseY;
        secondPointDone = true;
        console.log("second point done");
        circle(secondX, secondY, 10);
    }

    if(dist(firstX, firstY, mouseX, mouseY) < 10/2) {
        console.log("circle 1");
        dragging = true;
    }

    if(dist(secondX, secondY, mouseX, mouseY) < 10/2) {
        console.log("circle 2");
        dragging2 = true;
    }
}

function mouseReleased() { 

    if (firstPointDone === false) {
        isLineDone = true;
    }

    dragging = false;
    dragging2 = false;
    
}

function draw() {
  background(800);
  fill(value);
//   mouseReleased();
  if (mouseIsPressed === true && isLineDone === false) {
    //line(width/2, height/2, mouseX, mouseY);
    
    fX = mouseX;
    fY = mouseY;

  }

  let sX = width/2;
  let sY = height/2;
  
  line(sX, sY, fX, fY);

  if (isLineDone === true && firstPointDone === true && secondPointDone === true) {
    
    circle(firstX, firstY, 10);
    circle(secondX, secondY, 10);
    bezier(sX, sY, firstX, firstY, secondX, secondY, fX, fY);

  }

  if(dragging) {
    firstX = mouseX;
    firstY = mouseY;
    circle(firstX, firstY, 10);
  }

  if (dragging2) { 
    secondX = mouseX;
    secondY = mouseY;
    circle(secondX, secondY, 10);
  }

    // if (firstPointDone === True && (secondPointDone === True)  && (dist(firstX, firstY, mouseX, mouseY) < 10/2 && mousePressed)) {
    //     firstX = mouseX;
    //     firstY = mouseY;
    //     circle(firstX, firstY, 10);
    //   }

  
}