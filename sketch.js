const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//Namespacing

var engine,world;
var ball,box1,ground;

function setup() {
  var canvas = createCanvas(600,400);
  
  engine = Engine.create();
  world = engine.world;

  var groundOptions = {
    isStatic : true
  }

  ground = Bodies.rectangle(300,360,600,10,groundOptions);
  World.add(world,ground);
  console.log(ground);

  box1 = new Box(200,200,50,100);
  box2 = new Box(200,50,50,150);

  // objname = new className();

}

function draw() {
  background(0); 
  
  Engine.update(engine);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,600,10);

  box1.display();
  box2.display();


}