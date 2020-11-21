const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

  box1 = new Box(900, 100, 70, 70); 

}

function draw() {
  background(180);
  Engine.update(engine);
  box1.display();
}



