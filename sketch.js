let visMap;
let prevHoveredElement = null;
let loading = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
  fetch("./notebook.json")
    .then((res) => res.json())
    .then((notebook) => {
      visMap = new Map(null, null, notebook);
      visMap.render();
      loading = false;
    });
  // frameRate(5);
}

function draw() {
  if (!loading) {
    handleHover();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  visMap.render();
}
