let miPelota;
let frutas = ["manzana", miPelota, 234, "granadilla"];

for (let LQS = 0; LQS < 10; LQS += 1){
  console.log(LQS)
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  miPelota = new Pelota();
}

function draw() {
  background(255);
  circle(mouseX, mouseY, 20);
  miPelota.update(300);
  miPelota.display();
}
