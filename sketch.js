function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  let anchura = 30;
  let spacing = 40;

  for (let x = 50; x < width; x += spacing) {
    for (let y = 50; y < height; y += spacing) {
      square(x, y, anchura);
    }
  }
}
 

