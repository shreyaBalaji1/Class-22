//NameSpacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic: true
  };
  ground = Bodies.rectangle(200, 390, 400, 20, options);
  World.add(world, ground);

  var ball_options = {
    restitution: 1
  };
  
  ball = Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);

  console.log(ground);
  
}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER); //will take the x & y at the centre of the rectangle
  rect(ground.position.x, ground.position.y, 400, 20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}

/*
PHYSICS ENGINE
-Matter
-Box2d
-p2.js



-ENGINE - Universe which follows laws of physics(Matter.Engine)
-WORLD - (Matter.World) - physical world with grounds added to it
-BODIES - bodies which live in the world - (Matter.Bodies)

Nicknames for long names - NameSpacing



rect(x, y, width, height)
ellipse(x, y, r1, r2) - r1=r2 ---> circle 
*/