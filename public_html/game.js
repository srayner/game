var Game = {};

Game.fps = 200;

Game.initialize = function() {
    
    Game.map = new Map();
    //while (map.loading) {}; // wait for map to load
    this.entities = [];
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

Game.addRect = function() {
  Game.entities.push(new Rect());
};

Game.addPlayer = function() {
    Game.player = new Player();
    Game.entities.push(Game.player);
};