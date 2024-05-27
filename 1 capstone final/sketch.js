// Capstone multi game project
// Ahmed Rady
// 20 may 2024
// later

let square;
let whichgame;

//main setup function
function setup() {
  createCanvas(900, 950);
  playSnake();
  //whichgame = "snake";

  if (whichgame === "snake"){
    square = new snakeGame();
  }
  
}

// draw funcition that keeps on refreshing
function draw() {
  playSnake();

  if (whichgame === "snake"){
    square.display();
    square.moveSnake();    
    square.increaseScore();
  }

  
}

function playSnake(){
    //snake
    fill(150);
    rect(windowWidth/2 - 100,windowHeight/2 - 25,200,50);
    textSize(50);
    fill(0);
    text("Snake",windowWidth/2 - 60,windowHeight/2 - 25,890);
    if(mouseX >= windowWidth/2 - 100 && mouseX <= windowWidth/2 + 100 && 
      mouseY >= windowHeight / 2 - 25 && mouseY <= windowHeight / 2 + 25 && 
      mouseIsPressed === true){
      whichgame = "snake";
      print("snake");
    }
  }

function keyPressed() {
  if (whichgame === "snake") {
    square.controls();
  }
}

function mousePressed(){
  if (whichgame === "snake"){
    square.restartButton();
    square.MenuButton();   
  }
 
}