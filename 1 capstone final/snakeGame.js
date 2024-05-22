class snakeGame{
  constructor(){
    this.squareSize = 50;
    this.gridX = 50;
    this.gridY = 50;
    this.snakeX = 50;
    this.snakeY = 50;
  }

  controls(){
    if (keyCode === LEFT_ARROW) {
      this.snakeX -= 50; 
    } else if (keyCode === RIGHT_ARROW) {
      this.snakeX += 50; 
    } else if (keyCode === UP_ARROW) {
      this.snakeY -= 50; 
    } else if (keyCode === DOWN_ARROW) {
      this.snakeY += 50; 
    }
  }

  //class methods
  display(){
    for (this.gridX = 50; this.gridX < windowWidth - 100; this.gridX = this.gridX + this.squareSize){
        for (this.gridY = 50; this.gridY < windowHeight - 100; this.gridY = this.gridY + this.squareSize){
            rectMode  = CENTER;
            noFill();
            rect(this.gridX,this.gridY,this.squareSize);
        }
    }
  
  fill(0,100,0);
  rect(this.snakeX,this.snakeY,this.squareSize);
  }

}