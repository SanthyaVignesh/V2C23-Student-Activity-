const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ball,box1,ground;
var box2;

function setup() {
  var canvas = createCanvas(600,400);
  
  engine = Engine.create();
  world = engine.world;

  box1 = new Box(200,300,100,50);
  box2 = new Box(200,100,100,150);
}

function draw() {
  background(0); 
  
  Engine.update(engine);

  box1.display();
  box2.display();

  drawSprites();
}