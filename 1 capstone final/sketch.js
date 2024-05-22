// Capstone multi game project
// Ahmed Rady
// 20 may 2024
// later

let square;
let whichgame;

//main setup function
function setup() {
  createCanvas(913, 948);
  square = new snakeGame(); 
  whichgame = "snake";

  // square.snakePlayer();
}

// draw funcition that keeps on refreshing
function draw() {
  square.display();
  // square.snakePlayer();
}

function keyPressed(){
  if (whichgame === "snake"){
      square.controls();
  }
}
