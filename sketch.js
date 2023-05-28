const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball, ball_options;
var up, right;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  up = createImg("up.png");
  up.position(20, 30);
  up.size(50, 50);
  up.mouseClicked(yForce);

  right = createImg("right.png");
  right.position(70, 80);
  right.size(50, 50);
  right.mouseClicked(xForce);


  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
  ball_options = {
    resitution:0.95

  }

  ball = Bodies.circle(200, 100, 20, ball_options)
  World.add(world, ball);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ellipse(ball.position.x, ball.position.y, 20)
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);

}
function xForce(){
  Matter.Body.applyForce(ball,{x:0, y:0},{x:0.05, y:0})
}

function yForce(){
  Matter.Body.applyForce(ball, {x:0, y:0}, {x:0, y:-0.05})
}



