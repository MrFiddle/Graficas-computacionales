width = 400;
height = 400;

let sides = 5;
var color = Math.floor(Math.random()*16777215).toString(16);

function setup() {
  createCanvas(400, 400);
}

function mousePressed() {
  sides = sides + 1;
  color = Math.floor(Math.random()*16777215).toString(16);
  if (sides > 12) {
    sides = 5;
  }
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

function draw() {
  background('#fff');
  polygon(width/2, height/2, 50, sides, null);
  fill('#' + color);
}