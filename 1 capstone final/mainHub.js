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
    pongActive = false;
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
      pongActive = false;

      game = new snakeGame();
      print('omg')
    }
  }

  playFlappyBird() {

    fill(150);
    rect(windowWidth / 2 - 155, windowHeight / 2 + 50, 300, 50);
    textSize(50);
    fill(0);
    text("Flappy bird", windowWidth / 2 - 125, windowHeight / 2 + 50, 890);

    if (mouseX >= windowWidth / 2 - 100 && mouseX <= windowWidth / 2 + 100 &&
      mouseY >= windowHeight / 2 + 50 && mouseY <= windowHeight / 2 + 100 &&
      mouseIsPressed === true) {
      clear();

      flappyBirdActive = true;
      mainHubActive = false;
      snakeActive = false;
      pongActive = false;
      
      game = new flappyBird();     
      print("wow");
    }
  }

  playPong() {
    
    fill(150);
    rect(windowWidth / 2 - 100, windowHeight / 2 - 125, 200, 50);
    textSize(50);
    fill(0);
    text("Pong", windowWidth / 2 - 60, windowHeight / 2 - 125, 890);

    if (mouseX >= windowWidth / 2 - 100 && mouseX <= windowWidth / 2 + 100 &&
      mouseY >= windowHeight / 2 - 125 && mouseY <= windowHeight / 2 - 90 &&
      mouseIsPressed === true) {

      snakeActive = false;
      mainHubActive = false;
      flappyBirdActive = false;
      pongActive = true;

      game = new pongGame();
      print("not wow");
    }
  }

}