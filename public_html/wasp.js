function Wasp(x, y, screen, game) {

    this.img = new Image();
    this.img.src = 'wasp.png';
    Creature.call(this, x, y, screen, game);
   
};
Wasp.prototype = new Creature();