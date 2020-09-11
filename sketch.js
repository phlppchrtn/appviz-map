let vizMap;
let prevHoveredElement;

function setup() {
  createCanvas(windowWidth, windowHeight);
  let notebook = loadJSON("./notebook.json");
  vizMap = new Map(null, null, notebook);
  // console.log(vizMap);
  // frameRate(5);
}

function draw() {
   let element = vizMap.selectElement(mouseX, mouseY);
   handleHover(element);
  
   vizMap.render();
  }

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
