// Sprite: Flapper

'use strict';

var Flapper = function(game) {
  Phaser.Sprite.call(this, game, 20, 234, 'flappy');
  this.smoothed = false;
  this.scale.set(1.5);
  //this.animations.add('fly', [0,1,2], 10, true);
  //this.play('fly');
  game.physics.arcade.enable(this);
  this.body.gravity.y = 1200;
  this.body.collideWorldBounds = true;
  game.input.onDown.add(this.flap, this);
  game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).onDown.add(this.flap, this);
  game.add.existing(this);
};

Flapper.prototype = Object.create(Phaser.Sprite.prototype);
Flapper.prototype.constructor = Flapper;
Flapper.prototype.flap = function () { this.body.velocity.y = -400; }

