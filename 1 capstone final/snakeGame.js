class snakeGame {
  constructor() {
    this.squareSize = 50;
    this.gridX = 50;
    this.gridY = 50;
    this.snakeX = 400;
    this.snakeY = 400;
    this.direction = "right";
    this.foodX = this.foodX = (Math.random(1,16));
    this.foodY = this.foodY = 50 *(Math.random(1,16));
    this.foodThere = false;
    this.snakeBody = [
      {x:this.squareSize * 3,y:0},
      {x:this.squareSize * 2,y:0},
      {x:this.squareSize * 1,y:0},
      {x:this.squareSize,y:0},
      {x:0,y:0}
    ];
  }



  controls() {

    if (keyCode === 65) {  //left
      if (this.snakeX > 50) {
        if (this.direction!== "right"){
          this.snakeX -= 50;
          this.direction = "left"; 
        }

      }
    } else if (keyCode === 68) { //right
      if (this.snakeX < 800) {
        if (this.direction!== "left"){
          this.snakeX += 50;
          this.direction = "right";
        }
      }
    } else if (keyCode === 87) { //up
      if (this.snakeY > 50) {
        if (this.direction!== "down"){
          this.snakeY -= 50;
          this.direction = "up";
        }
      }
    } else if (keyCode === 83) {  //down
      if (this.snakeY < 800) {
        if (this.direction!== "up"){
          this.snakeY += 50;
          this.direction = "down";
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
          fill(200,0 , 0);
          rect(this.snakeX, this.snakeY, this.squareSize);
          console.log(this.foodX)
          //console.log(this.foodY)
          

          if (this.direction === "right"){
            fill(0,200,0);
            rect(this.snakeX - 50, this.snakeY, this.squareSize);
            rect(this.snakeX - 100, this.snakeY, this.squareSize);
          }

          if (this.direction === "down"){
            fill(0,200,0);
            rect(this.snakeX, this.snakeY - 50, this.squareSize);
            rect(this.snakeX - 50, this.snakeY - 50 , this.squareSize);
          }
        }

        else if (this.gridX === this.foodX && this.gridY === this.foodY){
          fill(0,0,255);
          rect(this.foodX,this.foodY,this.squareSize);
          
        }

        else {
          fill(255, 255, 255);
          rect(this.gridX, this.gridY, this.squareSize);
        }

        
      }
    }
  }
}