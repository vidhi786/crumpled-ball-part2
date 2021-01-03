
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var boxr;
var boxl;
var boxb;
var ball1;
var dustbinimage
function preload()
{
dustbinimage=loadImage("dustbingreen.png");
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  
   
    boxb=new Box(420,600,120,20);
    

    boxl=new Box(360,550,20,100);
    

    boxr=new Box(480,550,20,100);

    ball1=new Ball(100,600,20);
    
  
    ground = new Ground(400,620,800,20);
    

	
  
}


function draw() {
  
  background(255);
  Engine.update(engine)
 
  boxl.display();
  boxr.display();
  boxb.display();
 
  ground.display();
  imageMode(CENTER);
  image(dustbinimage,420,550,160,140);
  ball1.display();
}
function keyPressed(){
  if(keyCode===UP_ARROW)
  Matter.Body.applyForce(ball1.body,ball1.body.position,{x:25,y:-60});



}


