const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var bgimg;
var engine, world;
var snow=[]
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  if(frameCount%50===0){
for(var i=0;i<200;i++){
  snow.push(new Snow(random(0,800),random(0,400)))
}
  }
}

function preload(){
  bgimg=loadImage("snow2.jpg")
  
}




function draw() {
background(bgimg)
Engine.update(engine);
for(var i=0;i<200;i++){
  snow[i].dropsnow()
snow[i].display()

}



  drawSprites();
}