let img;
let c;

function preload() {
  createCanvas(1000, 1000);
  img = loadImage('../src/sample.jpg');
}

function draw() {
  let x = random(width);
  let y = random(height);
  c = img.get(x, y);
  fill(c);
  noStroke();
  ellipse(x, y, 4, 4);
}

/*
function setup() {
  size(900, 900)
  img = loadImage('../src/sample.jpg');
  background(0)
}

function draw() {

  let x = random(width);
  let y = random(height);
  c = img.get(int(x), int(y));
  fill(c);
  ellipse(c);
}*/