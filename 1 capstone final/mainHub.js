// parent class
// where you can choose the games you want
class mainHub {
  constructor() {
    this.bg;
  }

  playSnake() {
    
    fill(150);
    rect(windowWidth / 2 - 100, windowHeight / 2 - 25, 200, 50);
    textSize(50);
    fill(0);
    text("Snake", windowWidth / 2 - 60, windowHeight / 2 - 25, 890);

    if (mouseX >= windowWidth / 2 - 100 && mouseX <= windowWidth / 2 + 100 &&
      mouseY >= windowHeight / 2 - 25 && mouseY <= windowHeight / 2 + 25 &&
      mouseIsPressed === true) {

      snakeActive = true;
      mainHubActive = false;
      flappyBirdActive = false;

      game = new snakeGame();
    }
  }

  playFlappyBird() {

    fill(150);
    rect(windowWidth / 2 - 100, windowHeight / 2 + 50, 200, 50);
    textSize(50);
    fill(0);
    text("Flappy bird", windowWidth / 2 - 60, windowHeight / 2 + 50, 890);

    if (mouseX >= windowWidth / 2 - 100 && mouseX <= windowWidth / 2 + 100 &&
      mouseY >= windowHeight / 2 + 50 && mouseY <= windowHeight / 2 + 100 &&
      mouseIsPressed === true) {
      clear();

      flappyBirdActive = true;
      mainHubActive = false;
      snakeActive = false;
      
      game = new flappyBird();      
    }
  }

}