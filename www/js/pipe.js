// Pipe

'use strict';

var Pipe = function (game, x, y, parent, offset, space) {
  this.config = game.cache.getJSON('config');
  Phaser.Group.call(this, game, parent);

  this.speed = this.config.pipe.speed || 120;

  this.offset = offset || this.config.pipe.offset || 120;
  this.space = space || this.config.pipe.space || 175;

  this.topimg = game.cache.getImage('pipetop');
  this.botimg = game.cache.getImage('pipebot');
  
  this.dieAt = -game.world.width - (this.topimg.width*2);

  this.top = game.add.sprite(0,0,'pipetop');
  this.bot = game.add.sprite(0,0,'pipebot');

  game.physics.arcade.enableBody(this.top);
  game.physics.arcade.enableBody(this.bot);

  this.add(this.top);
  this.add(this.bot);

  this.reset();
};

Pipe.prototype = Object.create(Phaser.Group.prototype);
Pipe.prototype.constructor = Pipe;

Pipe.prototype.randomY = function () {
  var offset = game.rnd.integerInRange(-this.offset, this.offset);
  return game.world.height/2 + offset;
};

Pipe.prototype.update = function () {
  if (this.top.x <= this.dieAt) {
    this.exists = false;
  }
};

Pipe.prototype.reset = function (x,y) {
  var _x = -(this.topimg.width/2);
  var _y = -(this.topimg.height);
  this.top.reset(_x, _y - (this.space/2));
  this.bot.reset(_x, this.space/2);
  this.x = x || game.world.width + this.width;
  this.y = y || this.randomY();
  this.setAll('body.velocity.x', -this.speed);
  this.exists = true;
  this.scored = false;
};
