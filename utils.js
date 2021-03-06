
const handleHover = (element) => {
  if (prevHoveredElement) {
    prevHoveredElement.style.fill = COLORS[prevHoveredElement.layer.level];
  }
  if (element) {
    document.querySelector("main").style.cursor = "pointer";
    element.style.fill = HOVER_COLOR;
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
const initLayers = () => {
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
