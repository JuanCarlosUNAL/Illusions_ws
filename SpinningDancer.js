var spinningDancer = {
  name: "spinningDancer", 
  img: null,
  speed: 1,
  side: null,
  
  setup: function(){
    this.img = loadImage("assets/dancing.png");
    this.side = (this.img.width / 34)/3;  
    frameRate(34 * this.speed);
  },
  draw: function(){
    image(this.img, 0, 0, this.img.width / 34 , this.img.height,
            (this.img.width / 34) * (frameCount%34) + this.side , 0,   this.img.width / 34, this.img.height );
  },
  mousePressed: function() {
    if (this.side === 0) {
      this.side=(this.img.width / 34)/3;
    } else {
      this.side = 0;
    }
  }
}