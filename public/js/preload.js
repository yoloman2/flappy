// State: Flappy.Preload

'use strict';

Flappy.Preload = function () {};

Flappy.Preload.prototype = {

  preload: function () {
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

  },

  create: function () {
    this.game.state.start('play');
  }

};

