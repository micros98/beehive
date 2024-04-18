/**
* Class for the player
* @param {number, number, string}  
*/
beehive.Honeycomb = function(x, y, resource) {
    rune.display.Sprite.call(this, x, y, width, height, resource);
};

beehive.Honeycomb.prototype.init = function() {
    rune.display.Sprite.prototype.init.call(this);
};

/**
 * 
 * @param {number} step 
 */

beehive.Honeycomb.prototype.update = function(step) {
    rune.display.Sprite.prototype.update.call(this, step);
};

beehive.Honeycomb.prototype.dispose = function() {
    rune.display.Sprite.prototype.dispose.call(this);
};