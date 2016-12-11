function Player(x, y, game) {
    
    this.img = new Image();
    this.img.src = 'player.png';
    
    this.x = 32 * x;
    this.y = 32 * y;
    this.game = game;
    
    this.jumping = false;
    this.jumpHeight = 96;
    this.height = 0;
    this.health = 1000;
};

Player.prototype.draw = function(context) {
    context.drawImage(this.img, this.x, this.y);
};

Player.prototype.update = function() {
    
    // Left and right movement.
    if (Key.isDown(Key.LEFT)) this.moveLeft();
    if (Key.isDown(Key.RIGHT)) this.moveRight();
  
    // Jump.
    if (Key.isDown(Key.UP) && !this.jumping && this.onSurface()) {
        this.jump();
    }
    
    // Jumping.
    if (this.jumping) {        
        if (this.height < this.jumpHeight) {
            if (this.collision(this.x, this.y-1)) {
                this.jumping = false;
            } else {
                this.height +=1;
                this.y -=1;
            }
        } else {
            this.jumping = false;
        }
    }

    // Fall.
    if (!this.jumping && !this.onSurface()) {
        this.y +=1;
    }
};

Player.prototype.moveLeft = function() {
    if ((this.x > 0) && !this.collision(this.x-1, this.y)) {
        this.x -= 1;
    }
    if (this.x === (0)) {
        this.game.moveScreenLeft();
        this.x = (768-32);
    }
};

Player.prototype.moveRight = function() {
    if ((this.x < (768-32)) && !this.collision(this.x+1, this.y)) {
        this.x += 1;
    }
    if (this.x === (768-32)) {
        this.game.moveScreenRight();
        this.x = 0;
    }
};

Player.prototype.jump = function() {
    this.height = 0;
    this.jumping = true;
    this.game.sound('jump');
};

Player.prototype.onSurface = function() {
    return this.collision(this.x, this.y+1);  
};

Player.prototype.collision = function(x,y)
{
    var mapCollision = this.game.mapCollision(x+16, y+16);
    var entityCollision = this.game.entityCollision(this);
    
    if (entityCollision) {
        this.health -=1;
        document.getElementById('health').innerHTML = 'Health: ' + Math.floor(this.health/10);
    }
    return ((mapCollision + entityCollision) > 0);
};

var Key = {
  _pressed: {},

  LEFT: 37,
  UP: 32,
  RIGHT: 39,
  DOWN: 40,
  
  isDown: function(keyCode) {
    return this._pressed[keyCode];
  },
  
  onKeydown: function(event) {
    this._pressed[event.keyCode] = true;
  },
  
  onKeyup: function(event) {
    delete this._pressed[event.keyCode];
  }
};