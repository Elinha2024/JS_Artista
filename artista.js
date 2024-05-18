function setup() {
  createCanvas(400, 400);
   background(220);
  
}

function draw() {
  stroke("blue");
  fill("pink");
  
   if (mouseIsPressed)
       {
       rect(mouseX, mouseY, 20, 35);
       
       }
     
  
 
}
