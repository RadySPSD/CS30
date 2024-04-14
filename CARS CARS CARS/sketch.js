// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let vehicles = [];
const NUM_VEHICLES = 1;

//functions
function setup() {
  createCanvas(windowWidth, windowHeight);
  vehicles.push(new Vehicle());
}

function draw() {
  background(255);
  drawRoad();
  for(let w of vehicles){
    w.move();
    w.display();
  }
}

//drawing the road
function drawRoad(){
  rectMode(CENTER);
  fill(0);
  rect(width/2,height/2,width,height*0.75);
  let space = 50
  //drawing the yellow line
  for (let i = 0; i < width; i += 40){
    fill(255,255,0);
    rect(i += space, height/2, 50, 5);
    space += 0.1    
  }
}

//the Vehicle class
class Vehicle{
  constructor(type,carColor,xPosition,yPosition,direction,Speed){
    this.type = round(random(0,1)); 
    this.carColor = color (random(255),random(255),random(255)); 
    this.xPosition = xPosition;
    this.yPosition = yPosition; 
    this.direction = round(random(0,1)); 
    this.speed = random(0,10);
  }

  //class methods

  move(){
    this.xPosition = 0;
    this.yPosition = 0;

    if (this.direction === 0 ){ //coming from west
    this.yPosition = random(0, height/2);
    this.xPosition += this.speed;
    }

    if (this.direction === 1){ //coming from east
      this.yPosition = random(height/2, height);
      this.xPosition -= this.speed;
    }
  }

  //display
  display(){
    //drawing the car. NOTE: change the width/2 and the height/2
    //to where ever you want the vehicles to be
    if (this.type === 0){
      fill(this.carColor);
      rect(this.xPosition,this.yPosition,100,40);
      fill(255);
      rect(this.xPosition + 10,this.yPosition +40,20,8);
      rect(this.xPosition + 70,this.yPosition +40,20,8);
      rect(this.xPosition + 10,this.yPosition -9,20,8);
      rect(this.xPosition + 70,this.yPosition -9,20,8);
    }

    //drawing the car
    if(this.type === 1){
      fill(this.carColor);
      rect(this.xPosition,this.yPosition,100,60);
      rect(this.xPosition,this.yPosition,30,60);
    }

  }
}
