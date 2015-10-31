// State: Flappy.Start

'use strict';

var Flappy = Flappy || {};

Flappy.Start = function () {};

Flappy.Start.prototype = {

  init: function () {
    this.background = null;
    this.flappy = null;
    this.button = null;
  },

  create: function () {
    this.startSound = this.game.add.audio('start');
    this.startSound.play();

    this.background = this.add.tileSprite(0,0,320,568,"background");
    this.background.autoScroll(-50,0);

    this.button = this.game.add.button(this.game.world.centerX, this.game.world.centerY+100,"button", this.start, this);
    this.button.anchor.set(0.5,0.5);

    this.sign = this.game.add.sprite(this.game.world.centerX, this.game.world.height/4,'sign');
    this.sign.anchor.set(0.5);
    this.sign.scale.set(2);

    this.game.add.tween(this.sign).to({y:this.sign.y+10},350, Phaser.Easing.Linear.NONE,true,0,2000,true);
  },

  start: function () {
    this.startSound.stop();
    this.game.state.start('play');
  },

  update: function () {
    if (this.sign.deltaY < 0) {
      this.sign.frame = 0;
    } else {
      this.sign.frame = 1;
    }
  }

};

