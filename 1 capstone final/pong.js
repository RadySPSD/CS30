class pongGame {
  constructor() {
    this.gameX = windowWidth/2 - 400
    this.gameY = windowHeight/2 - 450
    this.ballX = width / 2;
    this.ballY = height / 2;
    this.ballXSpeed = 6;
    this.ballYSpeed = 3;
    this.playerAX = windowWidth/2 - 400 + 25;
    this.playerAY = height / 2;
    this.playerBX = windowWidth/2 - 400 + 760;
    this.playerBY = height / 2;
    this.space = 50;        
    
    this.playerAScore = 0;
    this.playerBScore = 0;
    this.gameState = "onGoing";

    this.prevMouseState = false;
  }

  display() {
    background(200);
    fill(255);
    rect(this.gameX, this.gameY, 800);

    fill(150);
    ellipse(this.ballX, this.ballY, 15);
    this.ballX += this.ballXSpeed;
    this.ballY += this.ballYSpeed;
    this.bouncing();

    this.player();
    this.playerAMovement();
    this.playerBMovement();

    this.mainHubInPong();

    this.collisionDetection();

    this.losingLine();

    this.losing();

    this.showingScore();
  }

  bouncing() {
    if (this.ballX + 7.5 >= this.gameX + 800) {
      this.ballXSpeed *= -1;
    }
    else if (this.ballX < 60) {
      this.ballXSpeed *= -1;
    }
    else if (this.ballY > 840) {
      this.ballYSpeed *= -1;
    }
    else if (this.ballY < 60) {
      this.ballYSpeed *= -1;
    }

  }

  player() {
    //player A
    fill(0);
    rect(this.playerAX, this.playerAY, 15, 100);
    //player B
    fill(0);
    rect(this.playerBX, this.playerBY, 15, 100);
  }

  playerAMovement() {
    //player A movement
    if (keyIsPressed && keyCode === 87 && this.playerAY > 50) {
      this.playerAY -= 10;
    }

    if (keyIsPressed && keyCode === 83 && this.playerAY + 50 < 800) {
      this.playerAY += 10;
    }
  }

  playerBMovement() {
    //play B movement   
    if (keyIsPressed && keyCode === 38 && this.playerBY > 50) {
      this.playerBY -= 10;
    }

    if (keyIsPressed && keyCode === 40 && this.playerBY + 50 < 800) {
      this.playerBY += 10;
    }
  }

  mainHubInPong() {
    fill(150);
    rect(windowWidth/2 - 400, 850, 200, 50);
    textSize(30);
    fill(0);
    text("Back To Menu", windowWidth/2 - 390, 890);

    if (mouseX >= windowWidth/2 - 400 && mouseX <= windowWidth/2 - 400 + 200 && mouseY >= 850 && mouseY <= 900 && mouseIsPressed === true) {
      background(200);
      loop();
      mainHubActive = true;
      snakeActive = false;
      flappyBirdActive = false;
      pongActive = false;
      clear();
      game = new mainHub;
    }
  }

  collisionDetection() {
    //player A
    if (this.ballX <= this.playerAX + 25 &&
        this.ballY >= this.playerAY &&
        this.ballY <= this.playerAY + 100) {
      this.ballXSpeed *= -1;
    }
    

    //player B
    if (this.ballX >= this.playerBX - 5 &&
        this.ballY >= this.playerBY &&
        this.ballY <= this.playerBY + 100) {
      this.ballXSpeed *= -1;
    }
  }

  losingLine() {
    for (let i = 50; i < 850; i += 40) {
      fill(255, 255, 0);
      rect(this.playerAX, i, 1, 20);
    }

    for (let i = 50; i < 850; i += 40) {
      fill(255, 255, 0);
      rect(this.playerBX + 15, i, 1, 20);

    }
  }

  losing(){
    if (this.ballX < this.gameX + 10){
      this.playerBScore ++;
      this.ballX = windowWidth / 2;
      this.ballY = windowHeight / 2; 
      this.ballXSpeed *= -1
    }
    if (this.ballX > this.gameX + 790){
      this.playerAScore ++;
      this.ballX = windowWidth / 2;
      this.ballY = windowHeight / 2; 
    }
  }

  showingScore(){
    fill(0);
    text("Player A Score: " + this.playerAScore, windowWidth/2 - 400 + 25, 40);
    text("Player B Score: " + this.playerBScore, windowWidth/2 - 400 + 565, 40);

  }

  resumeButton(){
    this.showbutton();

  }
}