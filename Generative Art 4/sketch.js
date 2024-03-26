// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rectwidth = 50, rectHeight = 10;
let colours = ["#1E5A65","#093E4C","#072638","#072638","#2B453A"];

function setup() {
  createCanvas(windowWidth, windowHeight);  
  noStroke();
  drawRGB(width*0.1);
  drawHSB(width * 0.4);
  drawCustom(width * 0.7);
}

function draw() {
  //background(220);
}

function drawCustom(x){
  colorMode(RGB);
  let index = 0;
  for(let y = 0; y < height; y += rectHeight){
    fill(colours[index % colours.length]);

    fill(colours[int(random(colours.length))]);
    rect(x,y,rectwidth,rectHeight);

    index ++;
  }

}

function drawHSB(x){
  colorMode(HSB);
  for(let y = 0; y < height; y += rectHeight){
    let hue = map(y,0,height,0,360);
    fill(hue,360,360);
    rect(x,y,rectwidth,rectHeight);
  }

}


function drawRGB(x){
  colorMode(RGB);
  for(let y = 0; y < height; y += rectHeight){
    fill(random(255),random(255),random(255));
    rect(x,y,rectwidth,rectHeight);
  }

}
