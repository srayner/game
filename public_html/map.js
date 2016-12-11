function Map(data) {

    this.loading = true;
    this.img = new Image();
    this.img.onload = function(){
        this.loading = false;
    };
    this.img.src = 'new.png';
    this.data = data;
    this.currentScreen = 0;
}

Map.prototype.draw = function(context) {
    
    // Blue background
    context.fillStyle = 'rgba(87, 139, 210, 1)';
    context.fillRect(0, 0, 768, 512);
    
    // Forground.
    var data = this.data[this.currentScreen];
    for (var y=0; y<16; y++) {
        for (var x=0; x<24; x++) {
            if (data[y][x] > 0) {
                var v = data[y][x] -1;
                var sx = (v % 10);
                var sy = (v-(v % 10))/10; 
                context.drawImage(this.img, sx * 41, sy * 41, 40, 40, 32 * x, 32 * y, 32, 32);
            }
        }
    }
   
};

Map.prototype.collision = function(x,y) {
    var collision = 0;
    var data = this.data[this.currentScreen];
    for (var yMap=0; yMap<16; yMap++) {
        for (var xMap=0; xMap<24; xMap++) {
            var v = data[yMap][xMap];
            if (( v > 0) && (v < 14)){
                var mx = (xMap * 32) + 16;
                var my = (yMap * 32) + 16;
                var dx = Math.abs(x - mx);
                var dy = Math.abs(y - my);
                if ((dx < 32) && (dy < 32)) {
                    collision = data[yMap][xMap];
                }
            }
        }
    }
    return collision;
};

Map.prototype.setCurrentScreen = function(n) {
    this.currentScreen = n;
};

Map.prototype.getCurrentScreen = function() {
    return this.currentScreen;
};

Map.prototype.moveScreenLeft = function() {
    this.currentScreen -=1;
};

Map.prototype.moveScreenRight = function() {
    this.currentScreen +=1;
};