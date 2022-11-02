function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(900);
  plotLine(1, 2, 100, 20)
  plotLine(10, 200, 50, 10)
  plotLine(300, 300,10,10)
  plotLine(200, 300, 250, 50)
  plotLine(350, 350, 100, 300)
  
}

function plotLine(x0, y0, x1, y1) {

  var dx = Math.abs(x1 - x0)
  var sx, sy
  
  if (x0 < x1) {
    sx = 1
  } else {
    sx = -1
  }
  
  var dy = -(Math.abs(y1 - y0))
  
  if (y0 < y1) {
    sy = 1
  } else {
    sy = -1
  }
  
  var error = dx + dy
  
  while(true) {
    point(x0, y0)
    
    if (x0 == x1 && y0 == y1) {break}
    var e2 = 2 * error
    if (e2 >= dy) {
      if (x0 == x1) {break}
      error = error + dy
      x0 = x0 + sx
    }
      
    if (e2 <= dx) {
      if (y0 == y1) {break}
      error = error + dx
      y0 = y0 + sy
    }
  }
  
}