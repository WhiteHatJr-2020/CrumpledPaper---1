
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var d1,d2,d3;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	bi=loadImage("bg.png");

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	g=new Ground(800,690,1600,20);
	d1=new Dustbin(1300,665,170,20);
	d2=new Dustbin(1205,615,20,120);
	d3=new Dustbin(1395,615,20,120);
	p=new Paper(100,600,25);

	// Render is to show the backend objects
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1600,
		  height: 700,
		  wireframes: false
		}
	  });

	  //Render.run(render);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bi);
  d1.display();
  d2.display();
  d3.display();
  g.display();
  p.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(p.body,p.body.position,{x:85,y:-85});
  
	}
}


