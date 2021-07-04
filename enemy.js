function Enemy(x,y,s,l) {
    this.init = y;
    this.x = x;
    this.y = y;
    this.s = s;
    this.toDelete1 = false;
    this.xdir = 1;
    this.ydir = 1;
    this.lives = l;
    this.color = "#00ff00";


    this.show = function() {
        if(this.lives>=26&&this.lives<27) {
            this.color = '#ffff00';
        } else if(this.lives>=27) {
            this.color = '#FFAA1D';
        } else {
            this.color = '#00ff00';
        }
        if(this.lives==0) {
            this.color = '#000000';
            fill('#EB3C63');
          rect(this.x,this.y+50,10,10);
          fill('#380763');
          rect(this.x-10,this.y+50,10,10);
          fill("#03245c");
          rect(this.x,this.y+60,10,10);
          fill('#ce2029');
          rect(this.x,this.y+70,10,size);
        }
    fill(this.color);
    noStroke();        
    ellipse(this.x,this.y,this.s*2,this.s*2);
    fill(20,100,50);
        var textt = JSON.stringify(this.lives-24);
        text(textt,this.x,this.y);
     }

     this.shrink = function() {
         this.lives-=1;
         if(this.s>this.lives){
             this.toDelete1 = true;
             
         }
     }
     this.move = function() {
         //this.x = this.x + this.xdir;
         this.y = this.y + this.ydir;
     }
     this.shiftDown = function() {
         this.xdir*=-1;
         this.y+=this.s;
     }
     this.setNewLocation = function() {
         this.x = random(10,canvasSize-10);
         this.y = random(-canvasSize,0)
     }
}