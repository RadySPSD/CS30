
// Capstone multi game project
// Ahmed Rady
// 20 may 2024
// later

//variables

let mainHubActive = true;
let snakeActive = false;
let flappyBirdActive = false;
//variable that selects the class
let game;
//variable that tells where you are in the program
//main setup function
function setup() {
  createCanvas(900, 950);
  game = new mainHub();
}

// draw funcition that keeps on refreshing
function draw() {

  if (flappyBirdActive === true) {
    background(255);
    game.display();
    
  }

  //background(220);
  if (snakeActive ===true) {
    game.display();
    game.moveSnake();
    game.increaseScore();
  }

  if (mainHubActive === true) {
    game = new mainHub();

  }
}

function keyPressed() {
  if (snakeActive === true) {
    game.controls();
  }
  if (flappyBirdActive === true) {
    game.controls();
  }
}

function mousePressed() {
  if (mainHubActive === true) {
    clear();
    game.playSnake();
    game.playFlappyBird();
    print("54");
  }
  if (snakeActive === true) {
    game.restartButton();
    menuButton();
  }

  if (flappyBirdActive === true) {
    game.restartButton();
    menuButton();
  }
}

function menuButton() {
  fill(150);
  rect(50, 850, 200, 50);
  textSize(30);
  fill(0);
  text("Back To Menu", 60, 890);

  if (mouseX >= 50 && mouseX <= 250 && mouseY >= 850 && mouseY <= 900 && mouseIsPressed === true) {
    
    game = new mainHub();
    
    mainHubActive === true;
    snakeActive = false;
    flappyBirdActive = false;
    clear();

    print("77");
  }
}

