// Sprite: Flapper

'use strict';

var Flapper = function(game) {
  Phaser.Sprite.call(this, game, 60, 234, 'flappy',1);
  this.smoothed = false;
  this.checkWorldBounds = true;
  this.outOfBoundsKill = true;
  this.scale.set(0.8);
  this.anchor.set(0.5);
  game.physics.arcade.enable(this);
  this.body.gravity.y = 1200;
  game.input.onDown.add(this.flap, this);
  game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).onDown.add(this.flap, this);
  this.flapSound = this.game.add.audio('flap');
  game.add.existing(this);
};


Flapper.prototype = Object.create(Phaser.Sprite.prototype);
Flapper.prototype.constructor = Flapper;

Flapper.prototype.flap = function () {
  this.flapSound.play();
  this.body.velocity.y = -400;
  this.frame = 0;
  this.game.add.tween(this).to({angle: -40}, 100).start();
};

Flapper.prototype.update = function () {
  if (this.angle < 90) {
    this.angle += 2.5;
  }
  if (this.angle < 0 && this.angle > -90) {
    this.frame = 0;
  } else {
    this.frame = 1;
  }
};
