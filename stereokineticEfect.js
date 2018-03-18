stereokinetic = {
  name: "stereokinetic",
  
  radio: 250,
  gap: 10,
  radio_rate: 2*3.141592/60,
  
  centro_x: null,
  centro_y: null,
  
  setup: function() {
    this.centro_x = width / 2;
    this.centro_y = height / 2;
    
    noStroke();
    frameRate(20);
  },
  
  draw: function() {
    var x, y, i;
    for(i = 0; i * this.gap < this.radio / 2; i++) {
      if(i%2==0) fill(0, 0, 255);
      else fill(255, 255, 0);
      
      x = (this.gap * i) * Math.sin(frameCount * this.radio_rate);
      y = (this.gap * i) * Math.cos(frameCount * this.radio_rate);
      ellipse(this.centro_x - x, this.centro_y - y, (this.radio - i * this.gap) * 2, (this.radio - i * this.gap) * 2);
    }
    
    for(var j = 1 ;(i+j)*this.gap < 7*this.radio/8; j++ ) {
      if((i+j)%2==1) fill(0, 0, 255);
      else fill(255, 255, 0);
     
      x2 = (this.gap * (i+j)) * Math.sin(frameCount * this.radio_rate);
      y2 = (this.gap * (i+j)) * Math.cos(frameCount * this.radio_rate); 
      
      ellipse(this.centro_x - (x*2) + x2, this.centro_y - (y*2) + y2, (this.radio - (i+j) * this.gap) * 2, (this.radio - (i+j) * this.gap) * 2);
    }
    
  }
}