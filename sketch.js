var box1,box2,box3;
var ground,paper;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    box1 = new Dustbin(900,640,400,20);
	box2 = new Dustbin(700,600,20,200);
	box3 = new Dustbin(1100,600,20,200);
	paper = new Paper(200,200,30);
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  box1.display();
  box2.display();
  box3.display();  
  paper.display();
  drawSprites();
 
}

function keyPressed(){
       if(keyCode === UP_ARROW){
		   Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
	   }
}


