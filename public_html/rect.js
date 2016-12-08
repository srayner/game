function Rect() {
    
    // Grey
    this.fillStyle = 'rgba(121, 121, 121, 1)';
    
    this.x = Math.floor(Math.random() * (640 - 30));;
    this.y = Math.floor(Math.random() * (480 - 30));;
    this.velocity = Math.random() > 0.5 ? -1 : 1;
};

Rect.prototype.draw = function(context) {
    context.fillStyle = this.fillStyle;
    context.fillRect(this.x, this.y, 30, 30);
};

Rect.prototype.update = function() {
    if (this.x < 0) {
        this.velocity = 1;
    } else if (this.x > 610) {
        this.velocity = -1;
    }
  
    this.x += this.velocity;
};
