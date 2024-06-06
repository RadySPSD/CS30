// parent class
// where you can choose the games you want
class mainHub {
  constructor() {
    this.bg;
  }

  goToMenu(){

    game = new mainHub();    
    
    mainHubActive = true;
    snakeActive = false;
    flappyBirdActive = false;
  }

  playSnake() {

    //snake
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

      print("snake");
      game = new snakeGame();
      
    }
  }

  playFlappyBird() {

    //snake
    fill(150);
    rect(windowWidth / 2 - 100, windowHeight / 2 + 50, 200, 50);
    textSize(50);
    fill(0);
    text("Flappy bird", windowWidth / 2 - 60, windowHeight / 2 + 50, 890);
    if (mouseX >= windowWidth / 2 - 100 && mouseX <= windowWidth / 2 + 100 &&
      mouseY >= windowHeight / 2 + 50 && mouseY <= windowHeight / 2 + 100 &&
      mouseIsPressed === true) {
      clear();

      mainHubActive = false;
      snakeActive = false;
      flappyBirdActive = true;
      
      print("Flappy bird");
      game = new flappyBird();
      
    }
  }

}