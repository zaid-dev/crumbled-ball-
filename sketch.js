
	const Engine = Matter.Engine;
	const World = Matter.World;
	const Bodies = Matter.Bodies;
	const Body = Matter.Body;

	function preload()
	{
	
	}
	var engine,world;

	var ground;
	var ball1;
	var dustbin;
	var dustbin1;
	var dustbin2;
	var dustbin3;

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	var ground_options ={
        isStatic: true
    }


	dustbin1 = new Dustbin(680,650);

    ground = Bodies.rectangle(400,650,800,50,ground_options);
    World.add(world,ground);




	var ballop={
		isStatic:false,
		restitution:0.7,
		friction:0.5,
		density:1.2
    }

    ball = Bodies.circle(100,100,20,ballop);
	World.add(world,ball);
	

	//Create the Bodies Here.
	Engine.run(engine);

	




}


function draw() {
  rectMode(CENTER);
  background(0);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);



  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);

  dustbin1.show();
 // dustbin2.show();
 // dustbin3.show();
  
  drawSprites();
	
}

function keyPressed() { 
	if (keyCode === UP_ARROW) { 
	Matter.Body.applyForce(ball,ball.position,{x:35,y:-35}); 

}
}