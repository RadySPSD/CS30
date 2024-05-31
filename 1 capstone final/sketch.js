
// Capstone multi game project
// Ahmed Rady
// 20 may 2024
// later

let square;
let whichgame = "menu";
let playerLocation = "menu";

//main setup function
function setup() {
  createCanvas(900, 950);

  if (whichgame === "flappy bird") {
    square = new flappyBird();
  }

  if (whichgame === "snake") {
    square = new snakeGame();
  }

  if (whichgame === "flappy bird") {
    square = new snakeGame();
  }
}

// draw funcition that keeps on refreshing
function draw() {

  if (whichgame === "flappy bird") {
    square.display();
    print('flap')
  }

  //background(220);
  if (whichgame === "snake") {
    square.display();
    square.moveSnake();
    square.increaseScore();
  }

  if (whichgame === "menu") {
    square = new mainHub();
  }
}



function keyPressed() {
  if (whichgame === "snake") {
    square.controls();
  }
}

function mousePressed() {
  if (whichgame === "menu"){
    square.playSnake();
    square.playFlappyBird();
    //whichgame === "snake";
  }
   if (whichgame === "snake") {
     square.restartButton();
     menuButton();
   }
  

}

function menuButton(){
  fill(150);
  rect(50, 850, 200, 50);
  textSize(30);
  fill(0);
  text("Back To Menu", 60, 890);

  if (mouseX >= 50 && mouseX <= 250 && mouseY >= 850 && mouseY <= 900 && mouseIsPressed === true) {
    // print('menu');
    whichgame = "menu";
    background(255);
    square.playSnake();
    square.playFlappyBird();
  }
}
