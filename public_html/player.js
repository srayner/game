function Player() {
    
    this.loading = true;
    this.img = new Image();
    this.img.onload = function(){
        this.loading = false;
    };
    this.img.src = 'player.png';
    
    // Red
    this.fillStyle = 'rgba(139, 37, 37, 1)';
    
    this.x = 32 * 2;
    this.y = 32 * 1;
    
    this.jumping = false;
    this.falling = false;
    this.jumpHeight = 96;
    this.height = 0;
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
            if (this.mapCollision(this.x, this.y-1)) {
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
    if ((this.x > 0) && !this.mapCollision(this.x-1, this.y)) {
        this.x -= 1;
    }
};

Player.prototype.moveRight = function() {
    if ((this.x < (768-32)) && !this.mapCollision(this.x+1, this.y)) {
        this.x += 1;
    }
};

Player.prototype.jump = function() {
    this.height = 0;
    this.jumping = true;
};

Player.prototype.mapCollision = function(x,y)
{
    var collision = this.map.collision(x+16, y+16);
    return (collision > 0);
};

Player.prototype.onSurface = function() {
    return this.mapCollision(this.x, this.y+1);  
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