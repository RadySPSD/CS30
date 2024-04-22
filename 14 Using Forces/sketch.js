// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let particles = [];
let gravity;

function setup() {
  createCanvas(windowWidth, windowHeight);
  gravity = createVector(0,0.1);
}

function mousePressed(){  
  particles.push(new Particle(mouseX,mouseY));

}

function draw() {
  background(220);


  for(let i = 0; i < particles.length; i++){
    let p = particles[1];
    p.move();
    p.display();
  }
}

class Particle{
  constructor(x,y){
    this.position = createVector(x,y); this.s = 20;
    this.velocity = createVector(random(-3,3), random(5,-3));
    this.c = color(0,100,random(150,255),100);
  }

  move(){
    this.velocity.add(gravity);

    this.position.add(this.velocity);
  }

  display(){
    fill(this.c);
    push();
    translate(this.position.x, this.position.y);
    circle(0,0,this.size);
    pop();
  }
}