function Rect() {
    
    // Grey
    this.fillStyle = 'rgba(121, 121, 121, 1)';
    
    this.x = Math.floor(Math.random() * (768 - 32));;
    this.y = Math.floor(Math.random() * (512 - 32));;
    this.velocity = Math.random() > 0.5 ? -1 : 1;
};

Rect.prototype.draw = function(context) {
    context.fillStyle = this.fillStyle;
    context.fillRect(this.x, this.y, 32, 32);
};

Rect.prototype.update = function() {
    if (this.x < 0) {
        this.velocity = 1;
    } else if (this.x > (768-32)) {
        this.velocity = -1;
    }
  
    this.x += this.velocity;
};
