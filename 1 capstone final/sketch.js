let mainHubActive = true;
let snakeActive = false;
let flappyBirdActive = false;
let pongActive = false;
let game = new mainHub();

function setup() {
  createCanvas(windowWidth, windowHeight);
  game = new mainHub();
}

function draw() {
  if (mainHubActive) {
    background(200);
    game.playSnake();
    game.playFlappyBird();
    game.playPong();
  } else if (snakeActive) {
    game.display();
    game.moveSnake();
    game.increaseScore();
  } else if (flappyBirdActive) {
    background(200);
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
  }
}

function menuButton() {
  fill(150);
  rect(50, 850, 200, 50);
  textSize(30);
  fill(0);
  text("Back To Menu", 60, 890);

  if (mouseX >= 50 && mouseX <= 250 && mouseY >= 850 && mouseY <= windowWidth && mouseIsPressed === true) {
    background(200);
    loop();
    mainHubActive = true;
    snakeActive = false;
    flappyBirdActive = false;
    pongActive = false;
    clear();
    game = new mainHub();
  }
}