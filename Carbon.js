class CarbonInTheTrees {
  constructor() {
    this.x = random(width);
    this.y = random(300,600);
    this.diameter = random(90,180);
    this.speed = 1;
  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  display() {
    image(carbonImage, this.x, this.y, this.diameter, this.diameter);

  }
}
