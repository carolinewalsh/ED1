function setup() {
  createCanvas(innerWidth, innerWidth);
  strokeWeight(2);
  stroke(0,100,200);
  frameRate(1);
  
  
}

function draw() {
  translate(30,30);
  var width = innerWidth - 2*30;
  var height = innerWidth - 2*30;
  var numSquares = 10; 
  var shift = 5;
  var space = 2;
  
  var sideLen = width/numSquares;
  
  for(var y = 0; y < height; y = y + sideLen)
    for(var x = 0; x < width; x = x + sideLen){
    fill(0, random(200,50), random(255,255) );
    quad(x + space + random(-shift, shift),y + space + random(-shift, shift), x + sideLen - space + random(-shift, shift),y + space + random(-shift, shift), x + sideLen - space + random(-shift, shift),y + sideLen - space + random(-shift, shift), x + space + random(-shift, shift),y + sideLen - space + random(-shift, shift));
      
    }
//noLoop();
}