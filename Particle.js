class Particle {
  constructor(x, y, r) {
    var options = {
      restitution: 0.3,
      friction: 0.5,
      density: 1.2,
    };
    this.x = x;
    this.y = y;
    this.radius = r;
    this.color = color(random(0, 255), (0, 255), 0, 255);
    this.body = Bodies.circle(this.x, this.y, this.radius, options);
    World.add(userWorld, this.body);
  }
  display() {
    var particlepos = this.body.position;

    push();
    translate(particlepos.x, particlepos.y);
    rotate(this.body.angle);
    ellipseMode(RADIUS);
    fill(this.color);
    strokeWeight(3);
    ellipse(0, 0, this.radius, this.radius);
    pop();
  }
}
