const Engine = Matter.Engine;
const World =Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var ground;
var ball

function setup() {
  createCanvas(800,400);

  engine=Engine.create();
  world=engine.world;

  var ground_options={
    isStatic:true
  }
  var ball_options={
    restitution:1.4
  }
   ground = Bodies.rectangle(400, 380, 800, 20,ground_options);

   World.add(world,ground)

   ball=Bodies.circle(300,40,25,ball_options)
  
   World.add(world,ball)

   console.log(ground);
   console.log(ball);
}  


function draw() {
  background(255,0,0);  
  Engine.update(engine);
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,20)
  ellipseMode(RADIUS)
 ellipse(ball.position.x,ball.position.y,25,25)
  drawSprites();
}