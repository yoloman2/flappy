// Pipe

'use strict';

var Pipe = function (game, offset, space) {
  Phaser.Group.call(this, game);

  this.enableBody = true;
  this.physicsBodyType = Phaser.Physics.ARCADE;

  this.offset = offset || 120;

  space = space || 160;

  var pipetop;
  var pipebot;

  if (game.cache.checkImageKey('pipetop')) {
    pipetop = 'pipetop';
    pipebot = 'pipebot';
  } else {
    pipetop = this.drawOne();
    pipebot = this.drawOne();
  
  }

  var x = -(pipetop.width/2);
  var y = -(pipetop.height);

  this.top = game.add.sprite(x, y - (space/2) , pipetop); 
  this.bot = game.add.sprite(x, 0 + (space/2), pipebot); 
  this.add(this.top);
  this.add(this.bot);
  this.x = game.world.width + pipetop.width;
  this.randomY();
  this.setAll('body.velocity.x', -100);
  this.dieAt = -game.world.width - (2*pipetop.width);
};

Pipe.prototype = Object.create(Phaser.Group.prototype);
Pipe.prototype.constructor = Pipe;

Pipe.prototype.drawOne = function (width, height) {
  width = width || 65;
  height = height || 500;
  var one = this.game.add.bitmapData(width,height);
  one.ctx.fillRect(0,0,width,height);
  return one;
};

Pipe.prototype.randomY = function () {
  var offset = game.rnd.integerInRange(-this.offset, this.offset);
  this.y = game.world.height/2 + offset;
};

Pipe.prototype.update = function () {
  if (this.top.x <= this.dieAt) {
    this.destroy();
  }
};
