var colores = {
  name: "colores",
  img: null,
  counter: 1,
  setup: function() {
    this.img = loadImage("assets/p2.jpg");  // Load the image
    this.counter = 1;
    frameRate(1);
  },
  draw: function() {
    image(this.img, 0, 0);
    filter(INVERT)
    if(this.counter > 10) {
      filter(GRAY);
    }
    cx = this.img.width;
    cy = this.img.height;
    
    strokeWeight(4);  
    line(cx/2, cy/2 + 7, cx/2, cy/2 - 7)
    line(cx/2 + 7, cy/2, cx/2 - 7, cy/2)
    this.counter++;
  }
}