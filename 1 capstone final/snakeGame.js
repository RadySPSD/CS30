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
    this.keepMoving = this.moveSpeed;
    this.otherSegments = [];
  }

  spawningSegments() {
    
      this.otherSegments.push(new snakeSegment(this.snakeX,this.snakeY));
   
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
      this.spawningSegments();
      this.foodX = 50 * Math.floor(random(1, 16));
      this.foodY = 50 * Math.floor(random(1, 16));
    }
  }

  //snake keeps moving
  moveSnake() {
    if (frameCount % 10 === 0) {
      this.updateTail();
      if (this.snakeX < 800) {
        if (this.direction === "right") {
          this.snakeX += this.moveSpeed;
        }
      }
      if (this.snakeX > 50) {
        if (this.direction === "left") {
          this.snakeX -= this.moveSpeed;
        }
      }

      if (this.snakeY < 800) {
        if (this.direction === "down") {
          this.snakeY += this.moveSpeed;
        }
      }


      if (this.snakeY > 50) {
        if (this.direction === "up") {
          this.snakeY -= this.moveSpeed;
        }
      }
      else this.moveSpeed =  0;
    }
  }

  collisionChecking(){
    if (  this.snakeX === 900 && this.direction === "right"
       || this.snakeX === 50 && this.direction === "left"   
       || this.snakeY === 800 && this.direction === "down"   
       || this.snakeY === 50 && this.direction === "up"){
      this.moveSpeed =  0;
    }
  }

  updateTail(){
    
    for(let i=  this.otherSegments.length  -1; i > 0; i --){
      this.otherSegments[i].segmentX = this.otherSegments[i-1].segmentX;
      this.otherSegments[i].segmentY = this.otherSegments[i-1].segmentY;
    }
    if (this.otherSegments.length > 0){
      this.otherSegments[0].segmentX = this.snakeX;
      this.otherSegments[0].segmentY = this.snakeY;
      //print(this.snakeX,this.snakeY,this.otherSegments[0].segmentX,this.otherSegments[0].segmentY);
    }

  }
  //class methods
  display() {

//segments
          
          

    for (this.gridX = 50; this.gridX < 913 - 100; this.gridX = this.gridX + this.squareSize) {
      for (this.gridY = 50; this.gridY < 948 - 100; this.gridY = this.gridY + this.squareSize) {
        rectMode = CENTER;
        noFill();
        rect(this.gridX, this.gridY, this.squareSize);

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
    for (let q of this.otherSegments){
      q.display();          
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
    fill(0,255,0);
    rect(this.segmentX,this.segmentY,this.squareSize);
  }
}