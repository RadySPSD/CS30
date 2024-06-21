class mainHub {
  constructor() {
    this.bg; // Placeholder for background image or color
  }

  goToMenu() {
    game = new mainHub(); // Create new instance of mainHub game

    // Set game states
    mainHubActive = true;
    snakeActive = false;
    flappyBirdActive = false;
    pongActive = false;
  }

  playSnake() {
    // Draw Snake button
    fill(150);
    rect(windowWidth / 2 - 100, windowHeight / 2 - 25, 200, 50);
    textSize(50);
    fill(0);
    text("Snake", windowWidth / 2 - 60, windowHeight / 2 - 25, 890);

    // Check if mouse is pressed on Snake button
    if (mouseX >= windowWidth / 2 - 100 && mouseX <= windowWidth / 2 + 100 &&
        mouseY >= windowHeight / 2 - 25 && mouseY <= windowHeight / 2 + 25 &&
        mouseIsPressed === true) {

      // Activate Snake game and deactivate others
      snakeActive = true;
      mainHubActive = false;
      flappyBirdActive = false;
      pongActive = false;

      game = new snakeGame(); // Create new instance of Snake game
      print('omg');
    }
  }

  playFlappyBird() {
    // Draw Flappy Bird button
    fill(150);
    rect(windowWidth / 2 - 155, windowHeight / 2 + 50, 300, 50);
    textSize(50);
    fill(0);
    text("Flappy Bird", windowWidth / 2 - 125, windowHeight / 2 + 50, 890);

    // Check if mouse is pressed on Flappy Bird button
    if (mouseX >= windowWidth / 2 - 100 && mouseX <= windowWidth / 2 + 100 &&
        mouseY >= windowHeight / 2 + 50 && mouseY <= windowHeight / 2 + 100 &&
        mouseIsPressed === true) {

      // Activate Flappy Bird game and deactivate others
      clear();
      pongActive = false;
      flappyBirdActive = true;
      mainHubActive = false;
      snakeActive = false;

      game = new flappyBird(); // Create new instance of Flappy Bird game
      print("wow");
    }
  }

  playPong() {
    // Draw Pong button
    fill(150);
    rect(windowWidth / 2 - 100, windowHeight / 2 - 125, 200, 50);
    textSize(50);
    fill(0);
    text("Pong", windowWidth / 2 - 60, windowHeight / 2 - 125, 890);

    // Check if mouse is pressed on Pong button
    if (mouseX >= windowWidth / 2 - 100 && mouseX <= windowWidth / 2 + 100 &&
        mouseY >= windowHeight / 2 - 125 && mouseY <= windowHeight / 2 - 90 &&
        mouseIsPressed === true) {

      // Activate Pong game and deactivate others
      snakeActive = false;
      mainHubActive = false;
      flappyBirdActive = false;
      pongActive = true;

      game = new pongGame(); // Create new instance of Pong game
      print("not wow");
    }
  }
}
