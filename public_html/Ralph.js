function Ralph(x, y, screen, game) {

    this.img = new Image();
    this.img.src = 'ralph_left.png';
    Creature.call(this, x, y, screen, game);
   
};
Ralph.prototype = new Creature();

Ralph.prototype.draw = function(context) {
    if (this.game.getCurrentScreen() === this.screen) {
        if (this.direction === 'left') {
            this.img.src = 'ralph_left.png';
        } else {
            this.img.src = 'ralph_right.png';
        }
        context.drawImage(this.img, this.x, this.y);
    }
};