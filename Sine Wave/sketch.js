// “Ninety Parallel Sinusoids With Linearly Increasing Period”
// Ahmed Rady
// April 16 2024
//
// just a simple picture showing the “Ninety Parallel Sinusoids With Linearly Increasing Period”


//setup function
function setup() {
  createCanvas(500, 500);
  background(220);
  
  //copying the wave and pasting it in a different location
  for (let i = 0; i < 200; i += 5){    
    push();
    translate(75,height/3 + i);
    theWave();
    pop();
  }
}

//main function that draws the wave
function theWave(){
  let x = 0;
  noFill();
  beginShape();
  for(let f = 0; f < width; f +=3){
    //using a math formula and drawin it using vertexes
    let y = sin( 0.0002*(x += 2)**2) * 30;
    vertex(x,y);
  }
  endShape();
}
