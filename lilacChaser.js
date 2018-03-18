var lilacChaser = {
  
  name: "lilacChaser",
  
  r_circles: 70,
  n_circles: 12,
  big_radius: 180,
  
  // instanced in setup
  theta_gap: null,
  speed: 6,
  
  setup: function () {
    background(200);
    
    strokeWeight(4);
    line(width/2, height/2 + 7, width/2, height/2 - 7)
    line(width/2 + 7, height/2, width/2 - 7, height/2)
    
    noStroke();
    this.theta_gap = TWO_PI / this.n_circles ;
    for(var i = 0; i < this.n_circles; i++) {
      var x = this.big_radius * Math.cos(this.theta_gap * i);
      var y = this.big_radius * Math.sin(this.theta_gap * i);
      this.circleGradient( width/2 + x, height/2 + y, this.r_circles);
    }
    frameRate(this.speed);
  },
  draw: function() {
    //Aparecer el circulo anterior
    var x = this.big_radius * Math.cos(this.theta_gap * (frameCount%this.n_circles - 1) );
    var y = this.big_radius * Math.sin(this.theta_gap * (frameCount%this.n_circles - 1) );
    this.circleGradient( width/2 + x, height/2 + y, this.r_circles + 1);
    
    // desaparacer el circulo
    fill(200);
    x = this.big_radius * Math.cos(this.theta_gap * (frameCount%this.n_circles) );
    y = this.big_radius * Math.sin(this.theta_gap * (frameCount%this.n_circles) );
    ellipse( width/2 + x, height/2 + y, this.r_circles + 1, this.r_circles + 1);
  },
  circleGradient: function(x,y,r) {
    push();
    noFill();
    strokeWeight(1);
    for(var i = 0; i < this.r_circles; i++){
      var c = Math.round(255 * (1 - i/this.r_circles) );
      stroke(200,165,200,c);
      ellipse(x,y,i,i);
    }
    pop();
  }
}