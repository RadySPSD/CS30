class flappyBird {
  constructor() {
    this.speed = 5;
    this.score = 0;
    this.score = 0;
    this.gameOver = false;

    this.bird = new Sprite(50, windowHeight / 2, 20, "d");

    this.obstacles = new Group();

    this.obstacles.collider = 'k';
    this.obstacles.h = 300;
    this.obstacles.w = 50;
    this.obstacles.color = "green";
    world.gravity.y = 5;

    setInterval(this.setScore, 500);

    this.gapSize = this.gapSize;
    this.top = top;
    this.bottom = this.bottom;



    fill(0);
    textSize(30);
    text(this.score, 50, 50);
  }

  lose() {
    noLoop();
    this.gameOver = true;
  }

  setScore() {
    this.score += 1;
  }

  display() {
    if (this.bird.overlaps(this.obstacles)) {
      this.lose();
    }
    world.step();
    camera.x = this.bird.x + 100;
    fill(100, 255, 100);

    if (this.bird.y > height - 50) {
      this.bird.y = height / 2;
      this.bird.x = 100;
      this.bird.vel.x = 0;
      this.bird.vel.y = 0;
      this.score = 0;
      this.lose();
    }

    else if (this.bird.y < 50) {
      this.bird.y = height / 2;
      this.bird.x = 100;
      this.bird.vel.x = 0;
      this.bird.vel.y = 0;
      this.score = 0;
      this.lose();
    }

    //making obstacles
    //print(this.gameOver);
    if (this.gameOver === true) {
      fill(0, 255, 0);
      rect(windowWidth / 2 - 205, windowHeight / 2 - 65, 430, 100);
      fill(255, 0, 0);
      textSize(100);
      text("game over", windowWidth / 2 - 200, windowHeight / 2);
      this.score = 0;
    }


    else {
      this.pipes();

    }

  }

  controls() {
    if (kb.presses('space')) {
      this.bird.vel.y -= 3;
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

      this.score = 0;
      print('wow');
    }
  }

  pipes() {
    if (frameCount % 45 === 0) {

      this.gapSize = random(80, 120);

      this.top = new this.obstacles.Sprite();
      this.top.y = this.gapSize + 50;
      this.top.x = this.bird.x + 500;
      this.top.vel.x = -3;

      this.bottom = new this.obstacles.Sprite();
      this.bottom.y = this.top.h + this.gapSize + 200;
      this.bottom.x = this.bird.x + 500;
      this.bottom.vel.x = -3;

    }
  }
}