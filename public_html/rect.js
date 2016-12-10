function Rect(x,y) {
    
    this.img = new Image();
    this.img.src = 'bat.png';
    
    // Grey
    this.fillStyle = 'rgba(121, 121, 121, 1)';
    
    this.x = x;
    this.y = y;
    this.velocity = Math.random() > 0.5 ? -1 : 1;
};

Rect.prototype.draw = function(context) {
    context.drawImage(this.img, this.x, this.y);
};

Rect.prototype.update = function() {
    if (this.x < 0) {
        this.velocity = 1;
    } else if (this.x > (768-32)) {
        this.velocity = -1;
    }
  
    this.x += this.velocity;
};
