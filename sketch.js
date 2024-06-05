function setup() {
  createCanvas(400, 400);
  background('purple');
}

function draw() {
 
  stroke('white')
  fill('pink');
// console.log(mouseIsPressed);
  
  if(mouseIsPressed) {
    rect(mouseX, mouseY, 15, 10);
  }
 
}
