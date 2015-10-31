// Pipe

'use strict';

var Pipe = function (game, x, y, parent, offset, space) {
  Phaser.Group.call(this, game, parent);

  this.offset = offset || 120;
  this.space = space || 170;

  if (game.cache.checkImageKey('pipetop')) {
    this.topimg = 'pipetop';
    this.botimg = 'pipebot';
  } else {
    this.topimg = this.drawOne();
    this.botimg = this.drawOne();
  }

  this.dieAt = -game.world.width - (this.topimg.width*2);

  this.top = game.add.sprite(0,0,this.topimg);
  this.bot = game.add.sprite(0,0,this.botimg);

  game.physics.arcade.enableBody(this.top);
  game.physics.arcade.enableBody(this.bot);

  this.add(this.top);
  this.add(this.bot);

  this.reset();
};

Pipe.prototype = Object.create(Phaser.Group.prototype);
Pipe.prototype.constructor = Pipe;

Pipe.prototype.drawOne = function (width, height) {
  width = width || 90;
  height = height || 500;
  var one = this.game.add.bitmapData(width,height);
  one.ctx.fillStyle = '#586e75';
  one.ctx.fillRect(0,0,width,height);
  return one;
};

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
  this.setAll('body.velocity.x', -120);
  this.exists = true;
  this.scored = false;
};
