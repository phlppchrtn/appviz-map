const findHoveredElement = () => {
  for (let layer of visMap.layers.slice().reverse()) {
    for (let element of layer.elements) {
      if (element.isHovered(mouseX, mouseY)) return element;
    }
  }
  return null;
};

const handleHover = () => {
  let element = findHoveredElement();
  if (prevHoveredElement) {
    prevHoveredElement.style.fill = COLORS[prevHoveredElement.layer.level];
    visMap.render();
  }
  if (element) {
    document.querySelector("main").style.cursor = "pointer";
    element.style.fill = HOVER_COLOR;
    visMap.render();
  } else {
    document.querySelector("main").style.cursor = "default";
  }
  prevHoveredElement = element;
};

const applyStyle = (style) => {
  if (style.stroke) stroke(style.stroke);
  if (style.strokeWeight) strokeWeight(style.strokeWeight);
  if (style.fill) fill(...style.fill);
};

//Temporary function for testing purposes only.
const initTestLayers = () => {
  let layer1 = new Layer(4, 6);
  layer1.addElement(
    new Rectangle({ column: 0, row: 2, numOfColumns: 2, numOfRows: 2 })
  );
  layer1.addElement(
    new Hexagone({ column: 2, row: 1, numOfColumns: 2, numOfRows: 1 })
  );
  let layer2 = new Layer(4, 6);
  layer2.addElement(
    new Rectangle({ column: 0, row: 2, numOfColumns: 1, numOfRows: 1 })
  );
  layer2.addElement(
    new Rectangle({ column: 1, row: 2, numOfColumns: 1, numOfRows: 1 })
  );
  let layer3 = new Layer(4, 6);
  layer3.addElement(
    new Hexagone({ column: 0, row: 2, numOfColumns: 1, numOfRows: 1 })
  );
  return [layer1, layer2, layer3];
};

const extractPackages = (notebook) => {
  let packages = {};
  Object.keys(notebook).map((sketchName) => {
    if (sketchName.slice(0, 2) === "Dt") {
      let packageName = notebook[sketchName].packageName;
      if (packages[packageName]) packages[packageName].push(sketchName);
      else packages[packageName] = [sketchName];
    }
  });
  return packages;
};

const generateLayers = (packages) => {
  // Hardcoded for now
  let packagesLayer = new Layer(4, 7);
  packagesLayer.addElement(
    new Rectangle({ column: 3, row: 0, numOfColumns: 4, numOfRows: 3 })
  );
  packagesLayer.addElement(
    new Rectangle({ column: 1, row: 0, numOfColumns: 2, numOfRows: 2 })
  );
  packagesLayer.addElement(
    new Rectangle({ column: 3, row: 3, numOfColumns: 4, numOfRows: 1 })
  );
  packagesLayer.addElement(
    new Rectangle({ column: 0, row: 3, numOfColumns: 3, numOfRows: 1 })
  );
  packagesLayer.addElement(
    new Rectangle({ column: 0, row: 2, numOfColumns: 3, numOfRows: 1 })
  );
  packagesLayer.addElement(
    new Rectangle({ column: 0, row: 0, numOfColumns: 1, numOfRows: 2 })
  );
  let objectsLayer = new Layer(4, 7);
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 7; j++) {
      objectsLayer.addElement(
        new Rectangle({ column: j, row: i, numOfColumns: 1, numOfRows: 1 })
      );
    }
  }
  return [packagesLayer, objectsLayer];
};
