// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let pos,vel;
let music, bounceSound;
let started = false;
function preload(){
  music=loadSound("assets/background.mp3");
  bounceSound=loadSound("assets/bounceSound.wav");
}
function setup() {
  createCanvas(300, 200);
  pos = createVector(width/2,height/2);
  vel = createVector(5,3);
  textSize =  30;
  textAlign(CENTER);
}

function draw() {
  background(220);
  if(started=== false){
    text("click to begin", width/2, height/2);
    if (mouseIsPressed){
      started = true;
      music.setVolume(0.3);
      music.loop();
    }
  }
  else{
    updateball();
  }
}

function updateball(){
  pos.add(vel);

  if(pos.x<0||pos.x>width){
    bounceSound.play();
    vel.x*=-1;
  }
  if(pos.y<0||pos.y>height){
    bounceSound.play();
    vel.y*=-1;
  }
  circle(pos.x,pos.y,40);
}