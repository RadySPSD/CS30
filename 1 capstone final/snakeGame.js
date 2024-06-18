class snakeGame {
  constructor() {
    this.squareSize = 50;
    this.gridX = 50;
    this.gridY = 50;
    this.snakeX = 400;
    this.snakeY = 400;
    this.direction = "right";
    this.foodX = 50 * Math.floor(random(1, 16));
    this.foodY = 50 * Math.floor(random(1, 16));
    this.score = 0;
    this.moveSpeed = 50;
    this.otherSegments = [];
    this.losing = false;
    this.foodCheckX = 0;
    this.foodCheckY = 0;
  }

  restartButton() {

    fill(150);
    rect(650, 850, 200, 50);
    textSize(60);
    fill(0);
    text("restart", 675 , 890);

    if (mouseX >= 650 && mouseX <= 850 && mouseY >= 850 && mouseY <= 900 && mouseIsPressed === true) {
      this.losing = false;
      this.snakeX = 400;
      this.snakeY = 400;
      this.direction = "right";
      this.moveSpeed = 50;
      this.foodX = 50 * Math.floor(random(1, 16));
      this.foodY = 50 * Math.floor(random(1, 16));
      this.score = 0;
      this.otherSegments = [];
      print("wow");
    }
  }

  MenuButton() {
    fill(150);
    rect(50, 850, 200, 50);
    textSize(30);
    fill(0);
    text("Back To Menu", 60, 890);

    if (mouseX >= 50 && mouseX <= 250 && mouseY >= 850 && mouseY <= 900 && mouseIsPressed === true) {
      print("menu");
    }
  }

  spawningSegments() {

    this.otherSegments.push(new snakeSegment(this.snakeX, this.snakeY));

  }


  controls() {

    if (keyCode === 65 || keyCode === LEFT_ARROW) {  //left
      if (this.snakeX > 50) {
        if (this.direction !== "right") {
          this.direction = "left";
        }

      }
    } 
    else if (keyCode === 68 || keyCode === RIGHT_ARROW) { //right
      if (this.snakeX < 800) {
        if (this.direction !== "left") {
          this.direction = "right";
        }
      }
    } 
    else if (keyCode === 87 || keyCode === UP_ARROW) { //up
      if (this.snakeY > 50) {
        if (this.direction !== "down") {
          this.direction = "up";
        }
      }
    } 
    else if (keyCode === 83 || keyCode === DOWN_ARROW) {  //down
      if (this.snakeY < 800) {
        if (this.direction !== "up") {
          this.direction = "down";
        }
      }
    }
  }

  increaseScore() {
    if (this.snakeX === this.foodX && this.snakeY === this.foodY) {
      this.score++;
      console.log(this.score);
      this.spawningSegments();
      this.foodCheck();
    }
  }

  foodCheck(){
    this.foodCheckX = 50 * Math.floor(random(1, 16));
    this.foodCheckY = 50 * Math.floor(random(1, 16));

    if (this.foodCheckX !== this.snakeX && this.foodCheckX !== this.segmentX
        && this.foodCheckY !== this.snakeY && this.foodCheckY !== this.segmentY){
          this.foodX = this.foodCheckX
          this.foodY = this.foodCheckY
    }
  }

  //snake keeps moving
  moveSnake() {
    if (frameCount % 10 === 0) {
      if (this.losing === false) {
        this.updateTail();

        if (this.snakeX > 800 || this.snakeX < 50 || this.snakeY > 800 || this.snakeY < 50) {
          this.losing = true;
          this.otherSegments.shift();
        }

        else if (this.direction === "right") {
          this.snakeX += this.moveSpeed;
        }

        else if (this.direction === "left") {
          this.snakeX -= this.moveSpeed;
        }

        else if (this.direction === "down") {
          this.snakeY += this.moveSpeed;
        }

        else if (this.direction === "up") {
          this.snakeY -= this.moveSpeed;
        }
      }
    }
  }





  updateTail() {
    if (this.losing !== true) {
      for (let i = this.otherSegments.length - 1; i > 0; i--) {

        if (this.losing === true) {
          fill(0, 255, 0);
          rect(windowWidth / 2 - 205, windowHeight / 2 - 65 + 1000, 430, 100);
          fill(255, 0, 0);
          textSize(100);
          text("game over", windowWidth / 2 - 200, windowHeight / 2 + 1000);
        }

        else{
          this.otherSegments[i].segmentX = this.otherSegments[i - 1].segmentX;
          this.otherSegments[i].segmentY = this.otherSegments[i - 1].segmentY;


          if (this.snakeX === this.otherSegments[i].segmentX && this.snakeY === this.otherSegments[i].segmentY) {
            this.losing = true;
          }
        }

      }
      
      if (this.otherSegments.length > 0) {
        this.otherSegments[0].segmentX = this.snakeX;
        this.otherSegments[0].segmentY = this.snakeY;
      }
    }

  }
  //class methods
  display() {
    background(200)

    fill(255,0,0)
    textSize(40)
    text("Conrols: W,A,S,D", windowWidth / 2 + 225 , windowHeight - 700);

    fill(255,0,0)
    textSize(40)
    text("or", windowWidth / 2 + 350 , windowHeight - 640)

    fill(255,0,0)
    textSize(40)
    text("Conrols: Up,Down,Left,Right", windowWidth / 2 + 140 , windowHeight - 590)

    fill(255,0,0)
    textSize(40)
    text("Score:" + this.score, windowWidth / 2 + 300 , windowHeight - 400)

    fill(150);
    rect(650, 850, 200, 50);
    textSize(60);
    fill(0);
    text("restart", 675 , 890);

    fill(150);
    rect(50, 850, 200, 50);
    textSize(30);
    fill(0);
    text("Back To Menu", 60, 890);
    //segments


    for (this.gridX = 50; this.gridX < 913 - 100; this.gridX = this.gridX + this.squareSize) {
      for (this.gridY = 50; this.gridY < 948 - 100; this.gridY = this.gridY + this.squareSize) {
        rectMode = CENTER;
        noFill();
        rect(this.gridX, this.gridY, this.squareSize);

        if (this.losing === true) {
          fill(0, 255, 0);
          rect(windowWidth / 2 + 155, windowHeight / 2 - 65, 430, 100);
          fill(255, 0, 0);
          textSize(100);
          text("game over", windowWidth / 2 + 160, windowHeight / 2);
        }

        if (this.gridX === this.snakeX && this.gridY === this.snakeY) {
          fill(200, 0, 0);
          rect(this.snakeX, this.snakeY, this.squareSize);


        }

        else if (this.gridX === this.foodX && this.gridY === this.foodY) {
          fill(0, 0, 255);
          rect(this.foodX, this.foodY, this.squareSize);

        }

        else {
          fill(255, 255, 255);
          rect(this.gridX, this.gridY, this.squareSize);
        }



      }
    }
    for (let q of this.otherSegments) {
      q.display();
    }
  }
}

class snakeSegment {
  constructor(segmentX, segmentY) {
    this.segmentX = segmentX;
    this.segmentY = segmentY;
    this.squareSize = 50;
  }

  display() {
    fill(0, 255, 0);
    rect(this.segmentX, this.segmentY, this.squareSize);
  }
}