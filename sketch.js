let x = 100;


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  color(255);

  rotateX(frameCount * 0.3);
  rotateY(frameCount * 0.1);
  box(x,50);
  
  x = x+3;
  
}
