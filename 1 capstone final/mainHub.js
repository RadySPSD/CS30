// parent class
// where you can choose the games you want
class mainHub{
    constructor(){
        this.bg;
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
          whichgame = "snake";
          print("snake");
          if (whichgame === "snake") {
            square = new snakeGame();
          }
        }
      }

      playFlappyBird() {

        //snake
        fill(150);
        rect(windowWidth / 2 - 100, windowHeight / 2 - 25, 200, 50);
        textSize(50);
        fill(0);
        text("Flappy bird", windowWidth / 2 - 60, windowHeight / 2 - 25, 890);
        if (mouseX >= windowWidth / 2 - 100 && mouseX <= windowWidth / 2 + 100 &&
          mouseY >= windowHeight / 2 - 25 && mouseY <= windowHeight / 2 + 25 &&
          mouseIsPressed === true) {
          whichgame = "Flappy Bird";
          print("Flappy bird");
          if (whichgame === "Flappy bird") {
            square = new flappyBird();
          }
        }
      }

    display(){
        fill(100,255,100)
        rect(windowWidth/2,windowHeight/2,200,200);
    }
  }
