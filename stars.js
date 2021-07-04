function Star(x,y) {
    this.init = y;
    this.x = x;
    this.y = y;
    this.ydir = 1;
    this.show = function() {
    fill(255);
    noStroke();        
    rect(this.x,this.y,5,5);
     }
     this.move = function() {
         this.y = this.y + this.ydir;
     }
     this.shift = function() {
         this.xdir*=-1;
         this.y+=this.s;
     }
}