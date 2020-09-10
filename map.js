class Map {
  constructor(state, config, notebook) {
    // this.layers = initTestLayers();

    // Packages Views (To be moved later)
    this.layers = generateLayers(extractPackages(notebook.sketches));

    let level = 0;
    for (let layer of this.layers) {
      layer.level = level;
      layer.initStyle();
      level += 1;
    }
  }

  render() {
    background(3, 4, 94);
    // for (let layer of this.layers) {
    //   layer.renderGrid(); // Drawing grid for testing purposes only
    // }

    let level = 0;
    for (let layer of this.layers) {
      layer.level = level;
      layer.render();
      level += 1;
    }
  }
}
