

function Bat(x, y, screen, game) {

    this.img = new Image();
    this.img.src = 'bat.png';
    Creature.call(this, x, y, screen, game);
   
};
Bat.prototype = new Creature();




