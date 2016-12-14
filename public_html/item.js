function Item(x, y, screen, game) {
    this.x = x * 32;
    this.y = y * 32;
    this.screen = screen;
    this.game = game;
}
        
Item.prototype.draw = function(context) {
    if (this.game.getCurrentScreen() === this.screen) {
        context.drawImage(this.img, this.x, this.y);
    }
};

Item.prototype.update = function() {
    
};
