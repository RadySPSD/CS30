// Capstone multi game project
// Ahmed Rady
// 20 may 2024
// later

let square;
let whichgame;

//main setup function
function setup() {
  createCanvas(windowWidth, windowHeight);
  square = new snakeGame(); 
  whichgame = "snake";

}

// draw funcition that keeps on refreshing
function draw() {
  square.display();
}

function keyPressed(){
  if (whichgame === "snake"){
      square.controls();
  }
}
