pelotas = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  print(pelotas);
}
print(pelotas);

function draw() {
  background(10, 18, 125);
  for (let i = 0; i < pelotas.length; i++) {
    pelotas[i].update(windowHeight);
    pelotas[i].display();
}
}

function mousePressed() {
  let pelota = new Pelota();
  pelotas.push(pelota);
}