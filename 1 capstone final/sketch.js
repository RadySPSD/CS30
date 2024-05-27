// Capstone multi game project
// Ahmed Rady
// 20 may 2024
// later

let square;
let whichgame;

//main setup function
function setup() {
  createCanvas(900, 950);
  square = new snakeGame();
  playSnake();
  //whichgame = "snake"
  
}

// draw funcition that keeps on refreshing
function draw() {

  if (whichgame === "snake"){
    square.display();
    square.moveSnake();    
    square.increaseScore();
  }

  
}

function playSnake(){
    //snake
    fill(150);
    rect(windowWidth/2,windowHeight/2,200,50);
    textSize(50)
    fill(0)
    text("Snake",windowWidth/2 + 35,windowHeight/2,890)
    if(mouseX >= windowWidth/2 && mouseX <= windowWidth/2 + 200 && mouseY >= windowHeight / 2 && mouseY <= windowHeight / 2 + 50 && mouseIsPressed === true){
      whichgame = "snake"
    }
  }

function keyPressed() {
  if (whichgame === "snake") {
    square.controls(); 
  }
}

function mousePressed(){
  square.restartButton();
  square.MenuButton();    
}

