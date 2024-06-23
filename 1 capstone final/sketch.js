// Ahmed Rady
// 22/6/2024
// capestone project - Retro Game Collection
// This program features three different games, snake, pong, and flappy bird. To play snake you use WASD or the arrow keys. 
// to play pong, the controls are S and W for player A, and arrow up and arrow down for player B.
// to play flappy bird you simply press the space bar
// Each game has a back to menu button
// snake and flappy bird have a reset button
// when you play pong, if it is not your turn you do not move

// Reflection:
// what advice would you give to yourself if you were to start a project like this again?
// Make sure you set realistic goals. And also balance the time that you have. Do not say you're going to do somthing unless you know you have the time for it.

// did you complete everything in your “needs to have” list?
// Not really. I had to change a whole game Idea.

// What was the hardest part of the project?
// Making the snake extend, and making the extended part follow the head of the snake

// Were there any problems you could not solve?
// Having the text appear infront of the snake body and the flappy bird tubes. for some reason, the text didn't want to show infront of these two things 
// To fix this I had to move the text somewhere else

// WOW ME factor:
// unlike everyone else, instead of making only one game, i made three. and not only did I make three. I made myself go through the pain 
// of puting them in different files so it seems more realisitc. Because I know that if I do try to get a job in he field of programming
// I would have to work with different files and so on.

//variables:
let mainHubActive = true; // Flag for the main hub screen
let snakeActive = false; // Flag for the snake game screen
let flappyBirdActive = false; // Flag for the Flappy Bird game screen
let pongActive = false; // Flag for the Pong game screen
let game = new mainHub(); // Initialize the game as the main hub

function setup() {
  createCanvas(2000, 981);
  game = new mainHub(); // Initialize the game object
}

function draw() {
  // Main draw function based on active game screens
  if (mainHubActive) {
    background(200);
    game.playSnake(); // Play snake game
    game.playFlappyBird(); // Play Flappy Bird game
    game.playPong(); // Play Pong game
  } 
  
  // If we are inside the snake game, use the following methods:
  else if (snakeActive) {
    game.display(); 
    game.moveSnake(); 
    game.increaseScore();
  } 

// If we are inside the flappy bird game, use the following methods:
  else if (flappyBirdActive) {
    background(200);
    game.display();
  } 

// If we are inside the pong game, use the following methods:
  else if (pongActive) {
    game.display();
  }
}

function keyPressed() {
  // Handle key presses based on active game screens
  if (snakeActive) {
    game.controls(); // Control snake game
  } else if (flappyBirdActive) {
    game.controls(); // Control Flappy Bird game
  }
}

function mousePressed() {
  // Handle mouse presses based on active game screens
  if (mainHubActive) {
    game.playSnake(); // Play snake game
    game.playFlappyBird(); // Play Flappy Bird game
  } else if (snakeActive) {
    game.restartButton(); // Handle restart button for snake game
    menuButton(); // Handle menu button for snake game
  } else if (flappyBirdActive) {
    game.restartButton(); // Handle restart button for Flappy Bird game
    game.mainHubInFlappy(); // Return to main hub from Flappy Bird game
  }
  else if (pongActive) {
    game.mainHubInPong(); // Return to main hub from Pong game
  }
}

// Makes the menu button for snake
function menuButton() {
  fill(150);
  rect(50, 850, 200, 50);
  textSize(30);
  fill(0); 
  text("Back To Menu", 60, 890);

  // Check if mouse is pressed within the menu button boundaries, turn off all the games and go back to menu
  if (mouseX >= 50 && mouseX <= 250 && mouseY >= 850 && mouseY <= 900 && mouseIsPressed === true) {
    background(200);
    loop();
    mainHubActive = true; 
    snakeActive = false; 
    flappyBirdActive = false;
    pongActive = false; 
    clear();
    game = new mainHub();
  }
}
