function Creature(x, y, screen, game) {
    this.x = x * 32;
    this.y = y * 32;
    this.direction = Math.random() > 0.5 ? 'left' : 'right';
    this.screen = screen;
    this.game = game;
}

Creature.prototype.draw = function(context) {
    if (this.game.getCurrentScreen() === this.screen) {
        context.drawImage(this.img, this.x, this.y);
    }
};

Creature.prototype.update = function() {
    if (this.game.getCurrentScreen() === this.screen) {
        var newDirection = this.direction;

        if (this.direction === 'left') {
            if ((this.x >= 0) && !this.collision(this.x -1, this.y)) {
                this.x -=1;
            } else {
                newDirection = 'right';
            }
        }

        if (this.direction === 'right') {
            if ((this.x <= (768-32)) && !this.collision(this.x +1, this.y)) {
                this.x +=1;
            } else {
                newDirection = 'left';
            }
        }

        this.direction = newDirection;
    }
};

Creature.prototype.collision = function(x,y) {
    var collision = this.game.mapCollision(x+16, y+16);
    return (collision > 0);
};