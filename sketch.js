const layer = new Layer(3, 4, [
  new Element(1, 0, 1, 2),
  new Element(0, 2, 1, 1),
]);
const map = new Map(null, null, null, [layer]);
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(30, 61, 116);
  map.render();
}

function draw() {}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(30, 61, 116);
  map.render();
}