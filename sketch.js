
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var chance = 0;

function preload()
{
	boyImage = loadImage("boy.png");
  treeImg = loadImage("tree1.png");
  grassImg = loadImage("Grass3.png");
}

function setup() {
	createCanvas(1000, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	GROUND = new Ground(500,536,1000,20);
	STONE = new Stone(180,376,20);
	MANGO_1 = new Mango(725,200,30);
	MANGO_2 = new Mango(775,145,30);
	MANGO_3 = new Mango(825,255,30);
	MANGO_4 = new Mango(945,245,30);
  MANGO_5 = new Mango(850,175,30);
  MANGO_6 = new Mango(685,130,30);
  MANGO_7 = new Mango(590,225,30);
  MANGO_8 = new Mango(660,250,30);
  ELASTIC = new Elastic(STONE.body,{x:150,y:370});
}


function draw() {
  background(102, 0, 120);

  textFont("Cursive");
  fill(179, 119, 249);
  stroke(179, 119, 249);
  textSize(40);
  text("Press Space To Get A Second Chance To PLAY!!",60,50);
  image(grassImg,0,460,1000,100);
  Engine.update(engine);
  drawSprites();
  push();
  imageMode(CENTER);
  image(boyImage,225,450,250,350);
  image(treeImg,750,310,500,500);
  pop();
  MANGO_1.display();
  MANGO_2.display();
  MANGO_3.display();
  MANGO_4.display();
  MANGO_5.display();
  MANGO_6.display();
  MANGO_7.display();
  MANGO_8.display();
  STONE.display();
  ELASTIC.display();
  Collision(STONE,MANGO_1);
  Collision(STONE,MANGO_2);
  Collision(STONE,MANGO_3);
  Collision(STONE,MANGO_4);
  Collision(STONE,MANGO_5);
  Collision(STONE,MANGO_6);
  Collision(STONE,MANGO_7);
  Collision(STONE,MANGO_8);
 
  text("Chances Taken - " + chance,60,200)
}
function mouseDragged(){
  Matter.Body.setPosition(STONE.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  ELASTIC.fly();
  chance = chance + 1;
}
function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(STONE.body, {x:180, y:376});
    ELASTIC.attach(STONE.body);
  }
}
function Collision(object1,object2){
  var distance = dist(object1.body.position.x,object1.body.position.y,
    object2.body.position.x,object2.body.position.y)
    if(distance <= object1.radius+object2.radius){
      Matter.Body.setStatic(object2.body,false);
    }
}

