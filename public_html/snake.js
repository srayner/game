function Snake(x, y, screen, game) {

    this.img = new Image();
    this.img.src = 'snake_left.png';
    Creature.call(this, x, y, screen, game);
   
};
Snake.prototype = new Creature();

Snake.prototype.draw = function(context) {
    if (this.game.getCurrentScreen() === this.screen) {
        if (this.direction === 'left') {
            this.img.src = 'snake_left.png';
        } else {
            this.img.src = 'snake_right.png';
        }
        context.drawImage(this.img, this.x, this.y);
    }
};