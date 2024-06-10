class flappyBird {
  constructor() {
    this.speed = 5;
    this.score = 0;
    this.gameOver = false;

    this.bird = new Sprite(50, windowHeight / 2, 20, "d");

    this.obstacles = new Group();

    this.obstacles.collider = 'k';
    this.obstacles.h = 700;
    this.obstacles.w = 50;
    this.obstacles.color = "green";
    world.gravity.y = 10;
    this.gapSize = this.gapSize;
    this.top = top;
    this.bottom = this.bottom;

  }

  lose() {
    noLoop();
    this.gameOver = true;
    this.score = 0;
  }

  display() {

    this.showScore();
    if (frameCount % 60 === 0){
      this.score ++;
    }

    if (this.bird.overlaps(this.obstacles)) {
      this.lose();
    }
    world.step();
    camera.x = this.bird.x + 100;
    fill(100, 255, 100);

    if (this.bird.y > height ) {
      this.bird.y = height / 2;
      this.bird.x = 100;
      this.bird.vel.x = 0;
      this.bird.vel.y = 0;
      this.lose();
    }

    else if (this.bird.y < 50) {
      this.bird.y = height / 2;
      this.bird.x = 100;
      this.bird.vel.x = 0;
      this.bird.vel.y = 0;
      this.lose();
    }

    //making obstacles
    if (this.gameOver === true) {
      fill(0, 255, 0);
      rect(windowWidth / 2 - 205, windowHeight / 2 - 65, 430, 100);
      fill(255, 0, 0);
      textSize(100);
      text("game over", windowWidth / 2 - 200, windowHeight / 2);
    }


    else {
      this.pipes();

    }
  }

  showScore(){
    fill(0);
    textSize(60);
    text(this.score,50,50)
  }

  controls() {
    if (kb.presses('space')) {
      this.bird.vel.y = 0;
      this.bird.vel.y -= 4;
    }
  }

  restartButton() {

    fill(150);
    rect(windowWidth / 2 - 100, 850, 200, 50);
    textSize(60);
    fill(0);
    text("restart", windowWidth / 2 - 80, 890);

    if (mouseX >= windowWidth / 2 - 100 && mouseX <= windowWidth / 2 + 100 && mouseY >= 850 && mouseY <= 900 && mouseIsPressed === true) {

      this.gameOver = false;
      loop();

      //reseting the bird
      this.bird.y = height / 2;
      this.bird.x = 100;
      this.bird.vel.x = 0;
      this.bird.vel.y = 0;

      //reseting the pipes
      this.obstacles.removeAll();
      this.pipes();
    }
  }

  pipes() {
    if (frameCount % 100 === 0) {

      this.gapSize = random(80, 350);

      this.top = new this.obstacles.Sprite();
      this.top.y = this.gapSize +100;
      this.top.x = this.bird.x + 500;
      this.top.vel.x = -3;

      this.bottom = new this.obstacles.Sprite();
      this.bottom.y = this.top.h + this.gapSize + 200;
      this.bottom.x = this.bird.x + 500;
      this.bottom.vel.x = -3;

    }
  }

  mainHubInFlappy(){
    fill(150);
    rect(50, 850, 200, 50);
    textSize(30);
    fill(0);
    text("Back To Menu", 60, 890);
  
    if (mouseX >= 50 && mouseX <= 250 && mouseY >= 850 && mouseY <= 900 && mouseIsPressed === true) {
      this.obstacles.removeAll();
      this.bird.remove();
      background(255);
      loop();
      mainHubActive = true;
      snakeActive = false;
      flappyBirdActive = false;
      pongActive = false;
      clear();
      game = new mainHub;
    }
  }
}