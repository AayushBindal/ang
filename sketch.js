const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;
var box3 , box4 ,box5;
var pig1 ,pig2;
var log1 ,log2 ,log3 ,log4;
var bird;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box2 = new Box(350,300,50,50);
    box3 = new Box(200,200,50,50);
    box4 = new Box(335,200,50,50);
    box5 = new Box(275,130,50,50);
    ground = new Ground(width/2,height,1200,20);
    pig1 = new Pig(275,390);
    pig2 = new Pig(275,200);
    log1 = new Log(274,250,200,PI/2);
    log2 = new Log(275,150,200,PI/2);
    log3 = new Log(230,100,120,PI/4);
    log4 = new Log(260,100,120,-PI/4);
    bird = new Bird(20,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    ground.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    bird.display();
  /*  log3.display();
    log4.display();
    box5.display();*/
}