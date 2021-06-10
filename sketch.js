const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var snow = [];
var bgMusic;
 var bg;
 
function preload(){
  bg = loadImage("snow3.jpg");
  
  bgMusic = loadSound("JoyMusic.mp3");
}

function setup() {
  createCanvas(displayWidth,displayHeight);

  bgMusic.play();
 
 engine = Engine.create();
 world = engine.world;

}

function draw() {
  background(bg);  
  Engine.update(engine);

  fill("white");
  stroke("black");
  textSize(20);
  text("Press SPACE for Snowfall",80,100);

if(keyCode === 32){
  if(frameCount%50===0){
    snow.push(new Snow(random(800,10),20,20));
    }  

for (var a = 0; a < snow.length; a++) {
  snow[a].display();   
}
}

  drawSprites();
}
