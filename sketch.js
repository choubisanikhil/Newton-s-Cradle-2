var roof,rope1,ballObject1,ballObject2,ballObject3,ballObject4,ballObject5,ballDiameter;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function setup() {
	createCanvas(1366, 656);

	engine = Engine.create();
	world = engine.world;

	roof = new Roof(683,228,300,30);
	World.add(world, roof);

	ballObject1 = new Pendulum(583,508);
	ballObject2 = new Pendulum(633,508);
	ballObject3 = new Pendulum(683,508);
	ballObject4 = new Pendulum(733,508);
	ballObject5 = new Pendulum(783,508);
	
	sling1 = new Sling(ballObject1.body,roof.body,-100,0);
	World.add(world, sling1);

	sling2 = new Sling(ballObject2.body,roof.body,-50,0);
	World.add(world, sling2);

	sling3 = new Sling(ballObject3.body,roof.body,0,0);
	World.add(world, sling3);

	sling4 = new Sling(ballObject4.body,roof.body,+50,0);
	World.add(world, sling4);

	sling5 = new Sling(ballObject5.body,roof.body,+100,0);
	World.add(world, sling5);

	Engine.run(engine);
}

function draw() {

  background(25);
  Engine.update(engine);

  roof.display();
 
  ballObject1.display();
  ballObject2.display();
  ballObject3.display();
  ballObject4.display();
  ballObject5.display();
 
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
  
  textSize(30);
  fill("Black");
  text("'Press Space To Apply Force'",500,150);
}

function keyPressed(){
if(keyCode===32){
Matter.Body.applyForce(ballObject1.body,ballObject1.body.position,{x:-730,y:0});
}}