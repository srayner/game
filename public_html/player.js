function Player() {
    
    // Blue
    this.fillStyle = 'rgba(87, 139, 210, 1)';
    
    this.x = Math.floor(Math.random() * (640 - 30));;
    this.y = Math.floor(Math.random() * (480 - 30));;
    
    this.jumping = false;
    this.falling = false;
    this.jumpHeight = 90;
    this.height = 0;
};

Player.prototype.draw = function(context) {
    context.fillStyle = this.fillStyle;
    context.fillRect(this.x, this.y, 30, 30);
};

Player.prototype.update = function() {
    
    // Left and right movement.
    if (Key.isDown(Key.LEFT)) this.moveLeft();
    if (Key.isDown(Key.RIGHT)) this.moveRight();
  
    // Jump.
    if (Key.isDown(Key.UP) && !this.jumping && !this.falling) this.jump();
    
    // Jumping.
    if (this.jumping) {        
        if (this.height < this.jumpHeight) {
            this.height +=1;
            this.y -=1;
        } else {
            this.falling = true;
            this.jumping = false;
        }
    }
    
    // Falling.
    if (this.falling) {        
        if (this.height > 0) {
            this.height -=1;
            this.y +=1;
        } else {
            this.falling = false;
        }
    }
    
};

Player.prototype.moveLeft = function() {
    if (this.x > 0) {
      this.x -= 1;
    }
};

Player.prototype.moveRight = function() {
    if (this.x < 610) {
        this.x += 1;
    }
};

Player.prototype.jump = function() {
    this.jumping = true;
};

var Key = {
  _pressed: {},

  LEFT: 37,
  UP: 38,
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