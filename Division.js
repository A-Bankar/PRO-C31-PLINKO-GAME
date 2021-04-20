class Division {
  constructor(xInput, yInput, widthInput, heightInput) {
    var options = {
      isStatic: true,
    };
    this.x = xInput;
    this.y = yInput;
    this.width = widthInput;
    this.height = heightInput;
    this.body = Bodies.rectangle(
      this.x,
      this.y,
      this.width,
      this.height,
      options
    );
    World.add(userWorld, this.body);
  }
  display() {
    var divpos = this.body.position;
    this.color = color(random(0, 255), (0, 255), 0, 255);

    push();
    translate(divpos.x, divpos.y);
    rectMode(CENTER);
    strokeWeight(3);
    fill(69, 420, 892);
    rect(0, 0, this.width, this.height);
    pop();
  }
}
