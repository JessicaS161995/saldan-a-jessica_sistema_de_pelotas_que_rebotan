class Pelota {
    constructor() {
      this.posX = random(80, windowWidth - 80);
      this.posY = random(10, 200);
      this.velX = random(-2, 2);
      this.velY = 0.0;
      this.acelY = 0.98;
  
        this.diam = int(random(5, 25));
      this.rad = this.diam / 2;
  
      // Establece un color con opacidad aleatoria
      this.colorin = color(
        random(255),
        random(100),
        random(255),
        random(25, 180)
      );
    }
  
    update(_piso) {
      if (this.posY + this.rad <= _piso) {
        this.velY += this.acelY;
        this.posY += this.velY;
      } else {
        this.velY *= -1.0;
        this.posY += this.velY;
        this.colorin = color(
          random(255),
          random(100),
          random(255),
          random(25, 180)
        );
        this.diam = int(random(20, 80));
      }
  
      if (this.posX > windowWidth) {
        this.velX *= -1;
      }
      if (this.posX < 10) {
        this.velX *= -1;
      }
      this.posX += this.velX;
    }
  
    display() {
      fill(this.colorin);
      circle(this.posX, this.posY, this.diam);
    }
  }