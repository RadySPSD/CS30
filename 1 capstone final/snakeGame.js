class snakeGame{
  constructor(){
    this.squareSize = 50;
    this.gridX = 50;
    this.gridY = 50;
    this.snakeX = 400;
    this.snakeY = 400;
    this.snakeBody = [];
  }
  


  controls(){
    if (keyCode === LEFT_ARROW) {
      if (this.snakeX > 50){
        this.snakeX -= 50; 
      }
    } else if (keyCode === RIGHT_ARROW) {
      if (this.snakeX < 800){
        this.snakeX += 50; 
      }  
    } else if (keyCode === UP_ARROW) {
      if (this.snakeY > 50){
        this.snakeY -= 50; 
      } 
    } else if (keyCode === DOWN_ARROW) {
      if (this.snakeY < 800){
        this.snakeY += 50; 
      }  
    }

    if (keyCode === 65) {
      if (this.snakeX > 50){
        this.snakeX -= 50; 
      }
    } else if (keyCode === 68) {
      if (this.snakeX < 800){
        this.snakeX += 50; 
      }  
    } else if (keyCode === 87) {
      if (this.snakeY > 50){
        this.snakeY -= 50; 
      } 
    } else if (keyCode === 83) {
      if (this.snakeY < 800){
        this.snakeY += 50; 
      }  
    }
  }

  //class methods
  display(){
    for (this.gridX = 50; this.gridX < windowWidth - 100; this.gridX = this.gridX + this.squareSize){
        for (this.gridY = 50; this.gridY < windowHeight - 100; this.gridY = this.gridY + this.squareSize){
            rectMode  = CENTER;
            noFill();
            rect(this.gridX,this.gridY,this.squareSize);

            if (this.gridX === this.snakeX && this.gridY === this.snakeY){
              fill(0,100,0);
              rect(this.gridX,this.gridY,this.squareSize);
            }

            else{
              fill(255,255,255);
              rect(this.gridX,this.gridY,this.squareSize);
            }
        }
    }
  }
}