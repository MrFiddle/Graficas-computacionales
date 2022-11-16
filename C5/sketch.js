function setup() {
  createCanvas(640, 480);
}


function myTranslate(x, y, tx, ty) {
  newX = x + tx;
  newY = y + ty;
  return [newX, newY];
}

// TODO: Fix it
function myRotate(x, y, angle) {
  angle =  angle * (PI / 180)
  newX = (x * cos(angle)) - (y * sin(angle))
  newY = (x * sin(angle)) + (y * cos(angle))
  return [newX, newY];
}

// TODO: Fix it
function myRotatePiv(x, y, angle, pivX, pivY) {
  angle =  angle * (PI / 180)
  newX = pivX + ((x - pivX) * cos(angle)) - 
    ((y - pivY) * sin(angle))
  newY = pivY + ((x - pivX) * sin(angle)) + 
    ((y - pivY) * cos(angle))
  return [newX, newY];
}


function myScale(x, y, sX, sY) {
  nX = x * sX //- (width / 2)
  nY = y * sY //- (height / 2)
  return [nX, nY];
}

function myReflection(x, y) {
  return [x, y];
}

function myShearX(x, y) {
  return [x, y];
}

function myShearY(x, y) {
  return [x, y];
}

function draw() {
  background(102);
  fill(255);
  polygon(width/2, height/2, 50, 6, null);
  fill(1);
  polygon(width/2, height/2, 50, 6, myTranslate, 50, 50);
  fill(1, 255, 1);
  polygon(width/2, height/2, 50, 6, myRotate, 20);
  fill(1, 1, 255);
  strokeWeight(4);
  point(50,50)
 strokeWeight(1);
  polygon(width/2, height/2, 50, 6, myRotatePiv, 50, 50, 50);
  fill(255, 1, 1);
  polygon(width/2, height/2, 50, 6, myScale, 2, 2);
}

function polygon(x, y, radius, npoints, transform, ...params) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    if (transform != null) {
      [sx, sy] = transform(sx,sy, ...params);
    }
    vertex(sx, sy);
  }
  endShape(CLOSE);
}