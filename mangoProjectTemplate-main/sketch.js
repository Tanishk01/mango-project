
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1000,100,30)
	mango3=new mango(1000,150,30)
	mango4=new mango(1000,250,30)
	mango5=new mango(1150,200,30)
	
	stone=new stone(245,415,30)
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	launcherObject = new rubber(stone.body,{x:245,y:415})
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  
  
  treeObj.display();
  mango1.display();
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  launcherObject.display();

  stone.display()
  groundObject.display();
  detectcolision(stone,mango1)
  detectcolision(stone,mango2)
  detectcolision(stone,mango3)
  detectcolision(stone,mango4)
  detectcolision(stone,mango5)
}
function  mouseDragged (){
   Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
 function mouseReleased(){
	 launcherObject.fly ()

 }
 function detectcolision(lstone,lmango) {
  var mangoposition = lmango.body.position
  var stoneposition = lstone.body.position
  var distance = dist(stoneposition.x,stoneposition.y,mangoposition.x,mangoposition.y)
  if (distance <= lmango.r+lstone.r){
	  Matter.Body.setStatic(lmango.body,false)
  }
 }