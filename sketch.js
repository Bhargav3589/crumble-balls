
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(600,650,1200,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(22,200,225);
  ground.display();
  drawSprites();
 
}



