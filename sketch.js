var paper
var ground
var log,log2,log3
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

    paper = new Paper(100,650,50)
    ground=new Ground(400,700,1400,1)
    log=new Rectangle(950,650,100,20,PI/2)
    log2=new Rectangle(1150,650,100,20,PI/2)
    log3=new Rectangle(1050,700,20,200,PI/7)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  drawSprites();
 paper.display()
 ground.display()
 log.display()
 log2.display()
 log3.display()
}
function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:500,y:-550})
  }
}


