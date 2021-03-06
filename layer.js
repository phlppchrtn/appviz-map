class Layer {
  constructor(rows, columns) {
    this.rows = rows;
    this.columns = columns;
    this.elements = [];
  }

  addElement(element) {
    this.elements.push(element);
    element.layer = this;
  }

  render() {
    this.elements
      .forEach( element => element.render());
  }

  selectElement(x, y) {
    for (let element of this.elements) {
      if (element.contains(x, y)) return element;
    }
  }  

  renderGrid(style = { stroke: 100, strokeWeight: 1 }) {
    applyStyle(style);
    const rowSize = windowHeight / this.rows;
    const columnSize = windowWidth / this.columns;
    for (let i = 0; i < this.rows; i++) {
      line(0, rowSize * (i + 1), windowWidth, rowSize * (i + 1));
    }
    for (let j = 0; j < this.columns; j++) {
      line(columnSize * (j + 1), 0, columnSize * (j + 1), windowHeight);
    }
  }

  initStyle() {
    this.elements
      .forEach(element => element.initStyle());
  }
}
