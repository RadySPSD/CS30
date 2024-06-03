class flappyBird {
  constructor() {
    this.speed = 5;
    this.score = 0;




    this.bird = new Sprite(50, windowHeight / 2, 20, "d");

    this.obstacles = new Group();
    this.obstacles.collider = 'k';
    this.obstacles.h = 300;
    this.obstacles.w = 50;
    this.obstacles.color = "green";
    world.gravity.y = 5;

    this.gapSize = this.gapSize;
    this.top = top;
    this.bottom = this.bottom;
  }

  display() {


    world.step();
    camera.x = this.bird.x + 100;
    fill(100, 255, 100);

    if (this.bird.y > height - 50) {
      this.bird.y = height / 2;
      this.bird.x = 100;
      this.bird.vel.x = 0;
      this.bird.vel.y = 0;
    }

    else if (this.bird.y < 50) {
      this.bird.y = height / 2;
      this.bird.x = 100;
      this.bird.vel.x = 0;
      this.bird.vel.y = 0;
    }

    //making obstacles

    if (frameCount % 45 === 0) {
      this.gapSize = random(80, 120);

      this.top = new this.obstacles.Sprite();
      this.top.y = this.gapSize  + 50   ;
      this.top.x = this.bird.x + 500;
      this.top.vel.x = -3;

      this.bottom = new this.obstacles.Sprite();
      this.bottom.y = this.top.h + this.gapSize + 200;
      this.bottom.x = this.bird.x + 500;
      this.bottom.vel.x = -3;

    }


  }
  controls() {
    if (kb.presses('space')) {
      this.bird.vel.y -= 3;
    }


  }

  // spawn(){
  //   this.gapSize = random(80,120)
  //   this.top = new this.obstacles.Sprite;
  //   this.top.y = random(-150,height/6)
  //   this.top.x = this.bird.x + width
  //   //print("obs")
  // }
}