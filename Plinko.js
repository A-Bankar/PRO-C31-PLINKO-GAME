class Plinko {
  constructor(x, y, r) {
    var options = {
      restitution: 0.3,
      friction: 0.5,
      isStatic: true,
      density: 1.2,
    };
    this.x = x;
    this.y = y;
    this.radius = r;
    this.body = Bodies.circle(this.x, this.y, this.radius, options);
    World.add(userWorld, this.body);
  }
  display() {
    var Plinkpos = this.body.position;
    this.color = color(random(0, 255), (0, 255), 0, 255);

    push();
    translate(Plinkpos.x, Plinkpos.y);
    rectMode(CENTER);
    strokeWeight(3);
    fill(255, 0, 255);
    ellipse(0, 0, this.radius, this.radius);
    pop();
  }
}
