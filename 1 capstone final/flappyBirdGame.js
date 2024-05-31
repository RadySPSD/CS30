class flappyBird {
  constructor() {
    this.speed = 5;
    this.score = 0;
    

    world.autoStep = false;
    world.gravity.y = 5;
    
    this.bird = new Sprite(50, windowHeight / 2, 20, "d");

    this.obstacles = new Group();
    this.obstacles.collider = 'k';
    this.obstacles.h = 300;
    this.obstacles.w = 50;
    this.obstacles.color = "green"
  }

  display() {
    clear();
    background(255);
    controls();world.step()
    fill(100, 255, 100);
    
    rect(windowWidth / 2, windowHeight / 2, 200, 200);
  }
}