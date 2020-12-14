var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,wall1,wall2,wall3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , { isStatic:false});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	 wall2 = createSprite(400,630,200,10 );
	 wall2.shapeColor=color("red")

	
	 wall2 = Bodies.rectangle(400,600,200,10, {isStatic:true} );
	  World.add(world, wall2);
    
	  wall1 = createSprite(300,585,10,100 );
	  wall1.shapeColor=color("red")

	 
	  wall1 = Bodies.rectangle(300,585,10,100, {isStatic:true} );
	   World.add(world, wall2);

	  wall3 = createSprite(500,585,10,100 );
	  wall3.shapeColor=color("red")

	  wall3 = Bodies.rectangle(500,585,10,100, {isStatic:true} );
	  World.add(world, wall2);


Engine.run(engine);
  




}


function draw() {
  rectMode(CENTER);
  background(0);
 packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
  
  
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

	
	

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.8, isStatic:false});
	
	World.add(world, packageBody);
  }
}



