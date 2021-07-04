function Bullet(x,y) {
    this.x = x;
    this.y = y;
    this.s = 5;
    this.toDelete = false;
    this.show = function() {
    fill(0,10,250);
    noStroke();        
    ellipse(this.x,this.y,this.s*2,this.s*2);
     }
     this.move = function() {
         this.y = this.y-5;
     }
     this.toHide = function() {
        this.toDelete = true;
     }
     this.hits = function(enemy) {
        var d = dist(this.x,this.y,enemy.x,enemy.y);
        if (d<=this.s+enemy.s){
            return true;
        } else {
            return false;
        }
    }
}
 /*enemy.x-enemy.s/2 < this.x + this.s/2 &&
            enemy.x+enemy.s/2 > this.x - this.s/2 &&
            enemy.y-enemy.s/2 < this.y + this.s/2 &&
            enemy.y+enemy.s/2 > this.y - this.s/2 */