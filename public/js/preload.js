// State: Flappy.Preload

'use strict';

Flappy.Preload = function () {};

Flappy.Preload.prototype = {

  preload: function () {
    console.log("Preloading...");

    this.logo = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
    this.logo.anchor.set(0.5);
    this.logo.animations.add('blink');
    this.logo.play('blink',2,true);

    this.load.spritesheet('background','assets/background.png',1352,568);
    this.load.spritesheet('flappy','assets/flappy.png',32,32);

    this.load.image('sign','assets/sign.png');
    this.load.image('button','assets/button.png');
    this.load.image('pipetop','assets/pipetop.gif');

    this.load.audio('start','assets/start.mp3');
    this.load.audio('flap', 'assets/flap.wav');
    this.load.audio('point', 'assets/point.wav');
    this.load.audio('crash', 'assets/crash.wav');
    this.load.audio('play', 'assets/play.mp3');
    this.load.audio('gameover', 'assets/gameover.wav');

  },

  create: function () {
    this.game.state.start('start');
  }

};

