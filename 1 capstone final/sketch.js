
// Capstone multi game project
// Ahmed Rady
// 20 may 2024
// later

//variables

let mainHubActive = true;
let snakeActive = false;
let flappyBirdActive = false;
let game = new mainHub;

//main setup function
function setup() {
  createCanvas(900, 950);
  game = new mainHub();
}

// draw funcition that keeps on refreshing
function draw() {
  if (mainHubActive) {
    background(255);
    game.playSnake();
    game.playFlappyBird();
  }
  else if (snakeActive) {
    game.display();
    game.moveSnake();
    game.increaseScore();
  }
  else if (flappyBirdActive) {
    background(255);
    game.display();
  }
}

function keyPressed() {
  if (snakeActive) {
    game.controls();
  }
  else if (flappyBirdActive) {
    game.controls();
  }
}

function mousePressed() {
  if (mainHubActive) {
    game.playSnake();
    //game.playFlappyBird();
  }
  else if (snakeActive) {
    game.restartButton();
    menuButton();
  }

  else if (flappyBirdActive) {
    game.restartButton();
    game.mainHubInFlappy();
  }
}

function menuButton() {
  fill(150);
  rect(50, 850, 200, 50);
  textSize(30);
  fill(0);
  text("Back To Menu", 60, 890);

  if (mouseX >= 50 && mouseX <= 250 && mouseY >= 850 && mouseY <= 900 && mouseIsPressed === true) {
    background(255);
    loop();
    mainHubActive = true;
    snakeActive = false;
    flappyBirdActive = false;
    clear();
    game = new mainHub;
  }
}

