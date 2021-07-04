function Ship(s) {
    this.x = width/2;
    this.y = height-200;
    this.yspeed = 1;
    this.xdir = 0;
    var size = 1;
    this.speed = s;
    this.setDir = function(dir) {
      this.xdir = dir;
    }
  
    this.move = function(dir) {
      this.x += this.xdir*this.speed;
    }
  
      this.show = function() {
        noStroke();
          fill("#A9A3D3");
          rect(this.x,this.y-30,10,10);

          fill("#C2BAED");
          rect(this.x-5,this.y-20,10,10);
          fill("#C2BAED");
          rect(this.x+5,this.y-20,10,10);
          fill("#837CC2");
          rect(this.x-10,this.y-10,10,10);
          fill('#add8e6');
          rect(this.x,this.y-10,10,10);
          fill("#837CC2");
          rect(this.x+10,this.y-10,10,10);
          fill("#837CC2");
          rect(this.x-10,this.y,10,10);
          fill('#0000ff');
          rect(this.x,this.y,10,10);
          fill("#837CC2");
          rect(this.x+10,this.y,10,10);
          fill("#837CC2");
          rect(this.x-10,this.y+10,10,10);
          fill("#A9A3D3");
          rect(this.x,this.y+10,10,10);
          fill("#C2BAED");
          fill("#837CC2");
          rect(this.x+10,this.y+10,10,10);
          fill("#A9A3D3");
          rect(this.x-10,this.y+20,10,10);
          fill("#A9A3D3");
          rect(this.x,this.y+20,10,10);
          fill("#C2BAED");
          fill("#837CC2");
          rect(this.x+10,this.y+20,10,10);
        fill("#A9A3D3");
          rect(this.x-20,this.y+20,10,10);
          fill("#837CC2");
          rect(this.x,this.y+20,10,10);
          fill("#543175");
          rect(this.x+20,this.y+20,10,10);
          fill("#837CC2");
          rect(this.x-20,this.y+30,10,10);
          rect(this.x-10,this.y+30,10,10);
         
          rect(this.x+10,this.y+30,10,10);

          rect(this.x+20,this.y+30,10,10);
          fill("#543175");
          rect(this.x-40,this.y+30,10,10);
          fill("#543175");
          rect(this.x-30,this.y+20,10,10);
          fill("#725DBC");
          rect(this.x-30,this.y+30,10,10);
          fill("#513276");
          rect(this.x,this.y+30,10,10);
          fill("#725DBC");
          rect(this.x+30,this.y+30,10,10);
          fill("#543175");
          rect(this.x+30,this.y+20,10,10);
          fill("#543175");
          rect(this.x+40,this.y+30,10,10);
         
          fill("#8B0975");
          rect(this.x-20,this.y+40,10,10);
          fill("#FD9967");
          rect(this.x-10,this.y+40,10,10);
          rect(this.x+10,this.y+40,10,10);
          fill("#8B0975");
          rect(this.x+20,this.y+40,10,10);
          fill("#FC745E");
          rect(this.x,this.y+40,10,10);
          fill('#380763');
          rect(this.x+10,this.y+50,10,10);

         fill('#EB3C63');
          rect(this.x,this.y+50,10,10);
          fill('#380763');
          rect(this.x-10,this.y+50,10,10);
          fill("#03245c");
          rect(this.x,this.y+60,10,10);
          fill('#ce2029');
          rect(this.x,this.y+70,10,size);
        size+=2;
         while(size>20){
           size-=1;
         }

          
      }
}