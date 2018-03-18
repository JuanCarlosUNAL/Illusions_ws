var undokai = {
  name: "undokai",
  radio: 20,
  i: 0,
  val: 0,
  mysount: null,
  setup: function(){
    frameRate(60);
    this.i = 0;
    
    soundFormats('mp3', 'ogg');
    this.mySound = loadSound('assets/hit.ogg');
    
    frameCount = 0;
  },
  draw: function(){
    
    var delay = 40;
    if(this.i > (height/2 - delay) && this.i < height/2 - delay + 5){
      this.mySound.setVolume(0.1);
      this.mySound.play();
    }
    
    stroke(255);
    fill(255);
    strokeWeight(1);
    
    ellipse( width - (this.i + this.radio + 4) , this.i + this.radio + 4, this.radio +1 , this.radio + 1 );
    ellipse(this.i + this.radio + 4, this.i + this.radio + 4, this.radio + 1, this.radio + 1 );
    
    stroke(0);
    fill(0);    
    this.i = (this.i+this.radio/4)%(width - this.radio - 4);
    ellipse(this.i + this.radio + 4, this.i + this.radio + 4, this.radio, this.radio );
    if(this.val == 1){
      stroke(255,0,0);
      fill(255,0,0);  
    }
    ellipse( width - (this.i + this.radio + 4) , this.i + this.radio + 4, this.radio, this.radio );
  },
  mousePressed: function(){
    if(this.val == 0)
      this.val = 1;
     else
       this.val = 0;
  }
}