var Game = {};

Game.fps = 150;

Game.initialize = function() {
    
    this.map = new Map(mapData);
    this.entities = [];
    this.audio = document.getElementById("soundEfx");
    this.gameover = false;

    // Add some moving rectangles
    this.addBat(0, 10, 2);
    this.addBat(0, 12, 4);
    this.addBat(0, 6, 9);
    this.addBat(0, 5, 8);
    this.addBat(1, 2, 12);
    this.addWasp(1, 3, 3);
    this.addWasp(2, 2, 5);
    this.addWasp(3, 3, 3);
    this.addWasp(4, 10, 8);
    this.addWasp(5, 12, 11);
    this.addWasp(6, 10, 5);
    this.addSnake(6, 12, 14);
    this.addWasp(7, 10, 5);
    this.addWasp(8, 10, 5);
    this.addWasp(9, 10, 5);
    this.addWasp(9, 10, 2);
    this.addWasp(10, 11, 11);
    this.addWasp(10, 10, 9);
    this.addWasp(10, 12, 5);
    this.addWasp(10, 9, 3);
    this.addRalph(10, 10, 7);
      
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

Game.sound = function(sound) {
    this.audio.play();
};

Game.addSnake = function(screen, x ,y) {
    this.entities.push(new Snake(x, y, screen, this));
};

Game.addBat = function(screen, x, y) {
    this.entities.push(new Bat(x, y, screen, this));
};

Game.addWasp = function(screen, x, y) {
    this.entities.push(new Wasp(x, y, screen, this));
};

Game.addRalph = function(screen, x, y) {
    this.entities.push(new Ralph(x, y, screen, this));
};

Game.addPlayer = function() {
    this.player = new Player(2, 1, this);
    this.entities.push(this.player);
};

Game.mapCollision = function(x,y) {
    return this.map.collision(x,y);
};

Game.entityCollision = function(entity) {
    var collision = false;
    var dx;
    var dy;
    for (var i = 0; i < this.entities.length; i++) {
        
        // Only look at entities that are on the current screen.
        if (this.entities[i].screen === this.map.currentScreen) {
            if (entity !== this.entities[i]) {
                dx = Math.abs(entity.x - this.entities[i].x);
                dy = Math.abs(entity.y - this.entities[i].y);
                if ((dx < 32) && (dy < 32)) {
                    collision = i;
                    break;
                }
            }
        }
    }
    return collision;
};

Game.getCurrentScreen = function() {
    return this.map.getCurrentScreen();
};

Game.moveScreenLeft = function() {
    this.map.moveScreenLeft();
};

Game.moveScreenRight = function() {
    this.map.moveScreenRight();
};