// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let racers = [];
const NUM_RACERS = 1;
let color = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  //set up some walker objects
  for(let i = 0; i < NUM_RACERS; i++){
      
    racers.push(new RoundRacer(height/2 - 70,color));
    racers.push(new RoundRacer(height/2,color));
    racers.push(new RoundRacer(height/2 + 70,color));
  }
}

function draw() {
  background(220);

  for(let w of racers){
    w.move();
    w.display();
  }
}

class RoundRacer {
  constructor (yPosition, color){
    this.xPosition = 0;
    this.yPosition = yPosition;
    this.xSpeed = random(3,15);
    this.color = color;
  }

  //class methods
  move(){
    this.xPosition += this.xSpeed;
    if (this.xPosition > width){
      this.xPosition = 0;
    }
  }

  display(){
    fill(color);
    circle(this.xPosition,this.yPosition, 50);
  }
}
