// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
//variables
let eastCars = 20;
let westCars = 20;
let speed;

let eastbound = [];
let westbound = [];
let lightArray = [];
//let vehicles = [];
const NUM_VEHICLES = 1;

//functions
function setup() {
  createCanvas(windowWidth, windowHeight);
  //vehicles.push(new Vehicle());


  for (let i = 0; i < westCars; i++) {
    westbound.push(new Vehicle(0, 0, 0));
  }

  for (let i = 0; i < eastCars; i++) {
    eastbound.push(new Vehicle(0, 0, 1));
  }

  for (let i = 0; i < 1; i++) {
    lightArray.push(new light());
  }


}

function draw() {
  background(255);
  drawRoad();
  for (let w of westbound) {
    w.action();
  }
  for (let e of eastbound) {
    e.action();
  }
  for (let q of lightArray) {
    q.displayLights();
  }
}

function mousePressed() {
  if (mouseButton === LEFT && keyCode === SHIFT && keyIsPressed) {
    westbound.push(new Vehicle(0, 0, 0));
  }
  else if (mouseButton === LEFT) {
    eastbound.push(new Vehicle(0, 0, 1));
  }

}

//drawing the road
function drawRoad() {
  rectMode(CENTER);
  fill(40);
  rect(width / 2, height / 2, width, height * 0.75);
  let space = 50;
  //drawing the yellow line
  for (let i = 0; i < width; i += 40) {
    fill(255, 255, 0);
    rect(i += space, height / 2, 50, 5);
    space += 0.1;
  }
}


//the Vehicle class
class Vehicle {
  constructor(xPosition, yPosition, direction) {
    this.type = round(random(0, 1));
    this.carColor = color(random(255), random(255), random(255));
    this.xPosition = xPosition;
    this.yPosition = yPosition;
    this.direction = direction;
    this.speed = round(random(0, 10));
    this.spawn();
  }

  //class methods

  spawn() {
    this.yPosition = 0;
    if (this.direction === 0) { //coming from west
      this.yPosition = random(height / 6, height / 2.2);
      this.xPosition = random(0, width);
    }

    if (this.direction === 1) { //coming from east
      this.yPosition = random(height / 1.8, height - height / 6);
      this.xPosition = random(0, width);
    }
  }

  move() {

    if (lightArray[0].stop <= 0) {
      if (this.direction === 0) { //coming from west
        this.xPosition += this.speed;
        if (this.xPosition > width + 50) {
          this.xPosition = 0 - 50;
        }
      }

      if (this.direction === 1) { //coming from east
        this.xPosition += -1 * this.speed;
        if (this.xPosition < 0 - 50) {
          this.xPosition = width + 50;
        }
      }
    }


  }

  speedUp() {
    if (round(random(0, 101)) === 1) {
      if (this.speed < 15) {
        this.speed += 1;

      }
    }
  }

  speedDown() {
    if (round(random(0, 101)) === 1) {
      if (this.speed > 1) {
        this.speed -= 1;
        //console.log("slowu");
      }
    }
  }

  changeColor() {
    if (round(random(0, 101)) === 1) {
      this.carColor = color(random(255), random(255), random(255));
      //console.log("color");
    }
  }

  action() {
    this.display();
    this.move();
    this.speedUp();
    this.speedDown();
    this.changeColor();
  }

  //display
  display() {
    //drawing the car
    if (this.type === 0) {
      fill(this.carColor);
      rect(this.xPosition, this.yPosition, 100, 40);
      fill(255);
      rect(this.xPosition - 40, this.yPosition - 20, 20, 8);
      rect(this.xPosition + 40, this.yPosition - 20, 20, 8);
      rect(this.xPosition - 40, this.yPosition + 20, 20, 8);
      rect(this.xPosition + 40, this.yPosition + 20, 20, 8);
    }

    //drawing the truck
    if (this.type === 1) {
      fill(this.carColor);
      rect(this.xPosition, this.yPosition, 100, 60);
      rect(this.xPosition, this.yPosition, 30, 60);
    }
  }
}

class light {
  constructor(trafficLights) {
    this.trafficLights = trafficLights;
    this.greenOn = color(0, 255, 0);
    this.greenOff = color(0, 50, 0);
    this.redOn = color(255, 0, 0);
    this.redOff = color(50, 0, 0);
    this.redColor = this.redOff;
    this.greenColor = this.greenOn;
    this.stop = 0;
  }

  displayLights() {

    rectMode(CENTER);

    fill(255, 210, 0);
    rect(width / 2, height / 14, 200, 80);

    fill(this.redColor);
    circle(width / 2 + width / 16, height / 14, 70);

    fill(this.greenColor);
    circle(width / 2 - width / 16, height / 14, 70);

    if (keyCode === 32 && keyIsPressed) {

      this.redColor = this.redOn;
      this.greenColor = this.greenOff;


      this.stop = 120;
    }
    this.stop--;
  }
}
