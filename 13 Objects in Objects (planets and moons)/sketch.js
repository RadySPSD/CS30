// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let myPlanet

function setup() {
  createCanvas(windowWidth, windowHeight);
  myPlanet = new planet(width/2, height/2);
  angleMode(DEGREES);
}

function draw() {
  background(70);
  myPlanet.display();
}

class planet{
  constructor(x,y){
    this.x = x; this.y = y; this.s = 100;
    this.moons = [];
  }

  display(){
    circle(this.x,this.y,this.s)
  }
}
