var build, counter, illusions;

function setup() {
  p = document.getElementById('lienzo');
  canvas = createCanvas(500, 500);
  canvas.parent(p);
  
  // circles: 
  illusions = [ circles, undokai, colores, lilacChaser, spinningDancer, stereokinetic ];
  
  illusions[0].setup();
  counter = 0;
}

function draw() {
  illusions[counter].draw();
}

function keyPressed() {
  if (keyCode === UP_ARROW){
    counter--;
    counter = counter<0?illusions.length-1 : counter ;
  }else if (keyCode === DOWN_ARROW){
    counter = (counter+1)%illusions.length;
  }
  background(255);
  var e = document.getElementsByClassName("p5-description");
  for(var i = 0; i < e.length; i++){
    e[i].classList.add("d-none");
  }
  e = document.getElementById(illusions[counter].name)
  if(e != null) e.classList.remove("d-none");
  //document.getElementById(illusions[counter].name).style.display = "inline-block";
  illusions[counter].setup();
  return false; // prevent default
}

function mousePressed() {
  if (illusions[counter].mousePressed != null){
    illusions[counter].mousePressed();
  }
}