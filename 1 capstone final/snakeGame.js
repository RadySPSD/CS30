class snakeGame{
  constructor(){
    this.squareSize = 50;
  }

  //class methods
  display(){
    for (let x = 0; x < windowWidth; x = x + this.squareSize){
        for (let y = 0; y < windowHeight; y = y + this.squareSize){
            rectMode  = CENTER;
            rect(x,y,this.squareSize);
        }
    }
    
  }
}