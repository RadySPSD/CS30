// Project Title
// Your Name
// Date
//
//loading images / animations

let lionL, lionR;
let pinImages = [];
let currentIndex = 0;

function preload(){
  lionL = loadImage("assets/lion-left.png");
  lionR = loadImage("assets/lion-right.png");
  //now the pinwheel images
  for(let i = 0; i < 9; i++){
    pinImages.push(loadImage("assets/pin-0" + i + ".png"));
  }
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  frameRate(1000);

}

function draw() {
  background(220);
  image(lionL,mouseX,mouseY,lionL.width/2,lionL.height/2);


  image(pinImages[currentIndex % 9],width/2,height/2);

  currentIndex ++;
}
