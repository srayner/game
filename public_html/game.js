var Game = {};

Game.fps = 240;

Game.initialize = function() {
  this.entities = [];
  this.context = document.getElementById("viewport").getContext("2d");
};

Game.draw = function() {
  this.context.clearRect(0, 0, 640, 480);
  
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