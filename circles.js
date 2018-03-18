var circles = {
  name: "circles",  
  thick: 3,
  radio: 30,
  grid_gap: 40,
  value: false,
  
  draw: function() {
    
  },
  
  setup: function () {
    var count = 0;
    var line_weight = Math.random()*this.thick;
    for(var i = 0; i < height; i+=line_weight){
      if(count%2==0) stroke(255);
      else stroke(0);
      
      strokeWeight(line_weight);
      line(0, i, width, i);
      
      line_weight = Math.random()*this.thick;
      count++;
    }
    for(var i= this.grid_gap; i < width; i+=(this.radio*2+this.grid_gap)){
      for(var j = this.grid_gap; j < height; j+=(this.radio*2+this.grid_gap)){
        this.circle(i, j, this.radio);
      }
    }
  },
  circle: function (x,y,r) {
    push();
    fill(255);
    noStroke()
    ellipse(x,y,r*2,r*2);
    pop();
    var flag = 1;
    var line_weight = Math.random()*this.thick;
    for(var ax = -r; ax < r; ax+=line_weight ){
      if(flag%2==0) stroke(255);
      else stroke(0);
      
      ay = Math.sqrt( Math.pow(r,2) -  Math.pow(ax,2) );
      
      strokeWeight(line_weight);
      line(ax + x, ay + y, ax +x, y-ay);
      
      line_weight = Math.random()*this.thick;
      flag +=1;
    }
  }
}