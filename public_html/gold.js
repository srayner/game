

function Gold(x, y, screen, game) {

    this.img = new Image();
    this.img.src = 'gold.png';
    Item.call(this, x, y, screen, game);
   
};
Gold.prototype = new Item();






