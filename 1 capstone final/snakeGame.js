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
    this.keepMoving = this.squareSize;
    this.otherSegments = [];
  }

  spawningSegments() {
    for (let i = 0; i < 1; i ++){
      this.otherSegments.push(new snakeSegment(this.snakeX,this.snakeY));
    }
  }


  controls() {

    if (keyCode === 65) {  //left
      if (this.snakeX > 50) {
        if (this.direction !== "right") {
          this.direction = "left";
        }

      }
    } else if (keyCode === 68) { //right
      if (this.snakeX < 800) {
        if (this.direction !== "left") {
          this.direction = "right";
        }
      }
    } else if (keyCode === 87) { //up
      if (this.snakeY > 50) {
        if (this.direction !== "down") {
          this.direction = "up";
        }
      }
    } else if (keyCode === 83) {  //down
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
      this.foodX = 50 * Math.floor(random(1, 16));
      this.foodY = 50 * Math.floor(random(1, 16));
    }
  }

  //snake keeps moving
  moveSnake() {
    if (frameCount % 30 === 0) {
      if (this.snakeX < 800) {
        if (this.direction === "right") {
          this.snakeX += this.squareSize;
        }
      }
      if (this.snakeX > 50) {
        if (this.direction === "left") {
          this.snakeX -= this.squareSize;
        }
      }
      if (this.snakeY < 800) {
        if (this.direction === "down") {
          this.snakeY += this.squareSize;
        }
      }
      if (this.snakeY > 50) {
        if (this.direction === "up") {
          this.snakeY -= this.squareSize;
        }
      }
    }
  }

  //class methods
  display() {
    for (this.gridX = 50; this.gridX < 913 - 100; this.gridX = this.gridX + this.squareSize) {
      for (this.gridY = 50; this.gridY < 948 - 100; this.gridY = this.gridY + this.squareSize) {
        rectMode = CENTER;
        noFill();
        rect(this.gridX, this.gridY, this.squareSize);

        if (this.gridX === this.snakeX && this.gridY === this.snakeY) {
          fill(200, 0, 0);
          rect(this.snakeX, this.snakeY, this.squareSize);

          //segments
          this.spawningSegments();
          for (let q of this.otherSegments){
            q.display();          
          }
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
  }
}

class snakeSegment {
  constructor(segmentX,segmentY) {
    this.segmentX = segmentX;
    this.segmentY = segmentY;
    this.squareSize = 50;
  }

  display(){
    fill(0,255,0)
    rect(this.segmentX + this.squareSize,this.segmentY,this.squareSize);
  }
}