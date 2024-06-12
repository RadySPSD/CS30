let mainHubActive = true;
let snakeActive = false;
let flappyBirdActive = false;
let pongActive = false;
let game = new mainHub();

function setup() {
  createCanvas(900, 950);
  game = new mainHub();
}

function draw() {
  if (mainHubActive) {
    background(255);
    game.playSnake();
    game.playFlappyBird();
    game.playPong();
  } else if (snakeActive) {
    game.display();
    game.moveSnake();
    game.increaseScore();
  } else if (flappyBirdActive) {
    background(255);
    game.display();
  } else if (pongActive) {
    game.display();
  }
}

function keyPressed() {
  if (snakeActive) {
    game.controls();
  } else if (flappyBirdActive) {
    game.controls();
  }
}

function mousePressed() {
  if (mainHubActive) {
    game.playSnake();
    game.playFlappyBird();
  } else if (snakeActive) {
    game.restartButton();
    menuButton();
  } else if (flappyBirdActive) {
    game.restartButton();
    game.mainHubInFlappy();
  }
  else if (pongActive) {
    game.mainHubInPong();
    game.pauseButton();
    game.resumeButton();
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
    pongActive = false;
    clear();
    game = new mainHub();
  }
}