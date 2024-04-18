/**
* Class for the player
* @param {number, number, number, number, string, object}  
*/

beehive.Player = function(x, y, resource, controller) { 
    rune.display.Sprite.call(this, x, y, 22, 28, resource);
    this.controller = controller;
    //this.debug = true;
    this.flippedY = true;
    this.flippedX = true;

    this.rotationSpeed = 2.0;
    // this.bullets = bullets;
    // this.game = game;
    // this.bulletTimer = 0;
    // this.bulletCooldown = 300;
    // this.walking = false;
};

beehive.Player.prototype = Object.create(rune.display.Sprite.prototype);
beehive.Player.prototype.constructor = beehive.Player;


/**
 * ...
 *
 * 
 */
beehive.Player.prototype.init = function() {
    rune.display.Sprite.prototype.init.call(this);
    this.initPhysics();
    this.initAnimation();
};

/**
 * ...
 *
 * @param {number} step Fixed time step.
 *
 */
beehive.Player.prototype.update = function(step) {
    rune.display.Sprite.prototype.update.call(this, step);
    this.updateInput();
};

/**
 * ...
 */
beehive.Player.prototype.dispose = function() {
    rune.display.Sprite.prototype.dispose.call(this);
};

//------------------------------------------------------------------------------
// Private prototype methods
//------------------------------------------------------------------------------

/**
* ...
*
*/
beehive.Player.prototype.initPhysics = function() {
    this.velocity.drag.x = 0.04;
    this.velocity.drag.y = 0.04;
    this.velocity.max.x = 0.5;
    this.velocity.max.y = 0.5;
};

/**
* ...
*
*/
beehive.Player.prototype.initAnimation = function() {
    this.animation.create("idle", [0, 1], 4, true);
    this.animation.create("fly", [2, 3, 4, 5, 6, 7, 8], 25, true);
};

/**
* ...
*
*/
beehive.Player.prototype.updateInput = function() {

    var threshold = 0.1;
    var x = this.controller.m_axesOne.x;
    var y = this.controller.m_axesOne.y;
        
    if (Math.abs(x) > threshold || Math.abs(y) > threshold) {  // Räkna ut rotationen baserat på spakens position                 
        this.rotation = Math.atan2(y, x) * (180 / Math.PI);
            if (this.rotation < 0) {
                this.rotation += 360;
            } // Räkna ut den nya positionen baserat på spakens position och hastigheten
            this.velocity.x += x * this.rotationSpeed;
            this.velocity.y += y * this.rotationSpeed;
    }

    if (this.velocity.x != 0 || this.velocity.y != 0) {
        this.animation.gotoAndPlay("fly");
    } else {
        this.animation.gotoAndPlay("idle");
    }

    // //GAMMAL STYRNING
    // if (this.controller.stickRightUp) {
    //     this.velocity.y -= 0.25;
    //     this.animation.gotoAndPlay("fly");
    // } else if (this.controller.stickRightLeft) {
    //     this.velocity.x -= 0.25;
    //     console.log("hej");
    //     if(this.flippedX) {
    //        this.flippedX = false; 
    //     }
    //     this.animation.gotoAndPlay("fly");
    // } else if (this.controller.stickRightDown) {
    //     this.velocity.y += 0.25;
    //     this.animation.gotoAndPlay("fly");
    // } else if (this.controller.stickRightRight) {
    //     this.velocity.x += 0.25;
    //     this.flippedX = true;
    //     this.animation.gotoAndPlay("fly");
    // } else {
    //     this.animation.gotoAndPlay("idle")
    // };
};

