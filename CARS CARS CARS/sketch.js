// Cars Cars Cars
// Ahmed Rady
// 5/1/2024
// A program that has cars moving in opposite directions. left click adds an eastbound car. 
//Shift + left click adds a westbound car. Space stops the cars for 120 frames.

//variables
let eastCars = 20;
let westCars = 20;
let speed;
let eastbound = [];
let westbound = [];
let lightArray = [];


//functions
function setup() {
  createCanvas(800, windowHeight);
  //vehicles.push(new Vehicle());

  //pushing a certain amount of westbound cars
  for (let i = 0; i < westCars; i++) {
    westbound.push(new Vehicle(0, 0, 0));
  }

  //pushing a certain amount of eastbound cars
  for (let i = 0; i < eastCars; i++) {
    eastbound.push(new Vehicle(0, 0, 1));
  }

  //spawning in the trafficlights
  for (let i = 0; i < 1; i++) {
    lightArray.push(new light());
  }


}

function draw() {
  background(255);
  drawRoad();

  //westbound cars functions
  for (let w of westbound) {
    w.action();
  }

  //eastbound cars functions
  for (let e of eastbound) {
    e.action();
  }

  //traffic lights spawn
  for (let q of lightArray) {
    q.displayLights();
  }
}

// adds cars to westbound and/or eastbound
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

    //car or truck
    this.type = round(random(0, 1));

    //color
    this.carColor = color(random(255), random(255), random(255));

    //x position
    this.xPosition = xPosition;

    //y position
    this.yPosition = yPosition;

    //westbound or eastbound
    this.direction = direction;

    //setting the speed
    this.speed = round(random(1, 10));

    //spawning the cars
    this.spawn();
  }

  //class methods

  //spawning the car in a random position
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

  // moving the car
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

  //chance of speeding up
  speedUp() {
    if (round(random(0, 101)) === 1) {
      if (this.speed < 15) {
        this.speed += 1;

      }
    }
  }

  //chance of slowing down
  speedDown() {
    if (round(random(0, 101)) === 1) {
      if (this.speed > 1) {
        this.speed -= 1;
      }
    }
  }

  //chance of changing color
  changeColor() {
    if (round(random(0, 101)) === 1) {
      this.carColor = color(random(255), random(255), random(255));
    }
  }

  //all the past functions in one
  action() {
    this.display();
    this.move();
    this.speedUp();
    this.speedDown();
    this.changeColor();
  }

  //displaying the car depending on its type
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


//traffic light class
class light {
  constructor(trafficLights) {
    this.trafficLights = trafficLights;

    //light modes
    this.greenOn = color(0, 255, 0);
    this.greenOff = color(0, 50, 0);
    this.redOn = color(255, 0, 0);
    this.redOff = color(50, 0, 0);
    this.redColor = this.redOff;
    this.greenColor = this.greenOn;

    //for stoping the cars
    this.stop = 0;
  }

  //class methods
  displayLights() {

    //drawing the traffic light
    rectMode(CENTER);

    fill(255, 210, 0);
    rect(width / 2, height / 14, 200, 80);

    fill(this.redColor);
    circle(width / 2 + width / 16, height / 14, 70);

    fill(this.greenColor);
    circle(width / 2 - width / 16, height / 14, 70);

    //if space car is pressed, light turns red and the cars stop
    if (keyCode === 32 && keyIsPressed) {

      this.redColor = this.redOn;
      this.greenColor = this.greenOff;


      this.stop = 120;
    }

    //stoping the cars for 120 frames
    this.stop--;

    //if the 120 frames are done, light turns green
    if (this.stop === 0) {
      this.redColor = this.redOff;
      this.greenColor = this.greenOn;
    }
  }
}