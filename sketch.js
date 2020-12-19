var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var wall1, wall2, wall3;

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

	


	engine = Engine.create();
	world = engine.world;


groundSprite=createSprite(width/2, height-35, width,10);


packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.0, isStatic:true,density : 1});

	World.add(world, packageBody);
	groundSprite.shapeColor=color(255);
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	wall1 = new wall(400,650,200,10);
	wall2 = new wall(300,580,10,150);
	wall3 = new wall(500,580,10,150);
	 
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x; 
  packageSprite.y= packageBody.position.y;
  
  wall1.display();
  wall3.display();
 wall2.display();
  drawSprites();
  
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
Matter.Body.setStatic(packageBody, false);
  }
}



