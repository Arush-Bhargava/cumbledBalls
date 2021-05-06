const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var groundSprite;
var ball;
var dustybin;

function preload() {}

function setup() {
  createCanvas(1000, 700);
  rectMode(CENTER);

  engine = Engine.create();
  world = engine.world;

  ball = new paper(100, 600, 20);

  dustybin = new dustbin(displayWidth/2,24);

  groundSprite = createSprite(width / 2, height - 35, width, 10);
  groundSprite.shapeColor = color("red");

  ground = Bodies.rectangle(width / 2, 655, width, 10, { isStatic: true });
  World.add(world, ground);

  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);

  drawSprites();

  ball.display();
  dustybin.display();
}

function keyPressed(){
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85}); 
   }
}
