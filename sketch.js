const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1;
var ground2;

var particles;
var plinkos;
var divisions;
var divisionHeight;

function setup() {
  createCanvas(480, 800);

  userEngine = Engine.create();
  userWorld = userEngine.world;

  //Creating the bodies

  //ground
  ground1 = new Ground(width / 2, height, width, 30);

  particles = [];
  plinkos = [];
  divisions = [];
  divisionHeight = 300;

  //for looop for creating the divisions
  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(
      new Division(k, height - divisionHeight / 2, 10, divisionHeight)
    );
  }

  //for loop for creating the plinkos
  for (var j = 40; j <= width - 10; j = j + 100) {
    plinkos.push(new Plinko(j, 75, 20));
  }
  for (var j = 90; j <= width - 10; j = j + 100) {
    plinkos.push(new Plinko(j, 175, 20));
  }

  for (var j = 40; j <= width - 20; j = j + 100) {
    plinkos.push(new Plinko(j, 275, 20));
  }
  for (var j = 90; j <= width - 10; j = j + 100) {
    plinkos.push(new Plinko(j, 375, 20));
  }

  Engine.run(userEngine);
}

function draw() {
  rectMode(CENTER);
  background(0);

  if (frameCount % 60 === 0) {
    particles.push(new Particle(random(width / 2 - 10, width / 2 + 10), 10, 10));
  }

  //display
  ground1.display();

  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  for (var j = 0; j < plinkos.length; j++) {
    plinkos[j].display();
  }

  for(var o = 0; o < particles.length; o++){
    particles[o].display();
  }

}
