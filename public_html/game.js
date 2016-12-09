var Game = {};

Game.fps = 120;

Game.initialize = function() {
    
    this.map = new Map();
    this.entities = [];
    
    // Add some moving rectangles
    this.addRect(10,2);
    this.addRect(12,4);
    this.addRect(6,9);
      
    // Add a player
    this.addPlayer();
        
    this.context = document.getElementById("viewport").getContext("2d");
};


Game.draw = function() {
  this.map.draw(this.context);
  for (var i=0; i < this.entities.length; i++) {
    this.entities[i].draw(this.context);
  }
};

Game.update = function() {
  for (var i=0; i < this.entities.length; i++) {
    this.entities[i].update();
  }
};

Game.addRect = function(x,y) {
    this.entities.push(new Rect(x*32,y*32));
};

Game.addPlayer = function() {
    this.player = new Player();
    this.player.map = this.map;
    this.entities.push(this.player);
};

Game.collisionDetect = function(entity) {
    var collision = false;
    var dx;
    var dy;
    for (var i = 0, len = this.entities.length; i < len; i++) {
        if (entity !== this.entities[i]) {
            dx = Math.abs(entity.x - this.entities[i].x);
            dy = Math.abs(entity.y - this.entities[i].y);
            if ((dx < 32) || (dy < 32)) {
                collision = i;
                break;
            }
        }
    }
    return collision;
};