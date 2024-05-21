// Capstone multi game project
// Ahmed Rady
// 20 may 2024
// later

let Square;

//main setup function
function setup() {
  createCanvas(windowWidth, windowHeight);
  Square = new mainHub(); 

}

// draw funcition that keeps on refreshing
function draw() {
  Square.display();
}
