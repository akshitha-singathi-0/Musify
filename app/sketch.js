let img;
let c;

function preload() {
  img = loadImage('../src/sample.jpg');
}

function setup(){
  createCanvas(1000, 1000);
}

function draw() {
  let x = random(img.width);
  let y = random(img.height);
  c = img.get(x, y);
  fill(c);
  noStroke();
  ellipse(x, y, 7, 7);
}