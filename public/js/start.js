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

  preload: function () {
    this.load.image('background','assets/background.png');
    this.load.spritesheet('flappy','assets/flappy.png',32,32);
    this.load.image('sign','assets/sign.png');
    this.load.image('button','assets/button.png');
    this.load.audio('start','assets/start.mp3');
  },

  create: function () {
    this.startSound = this.game.add.audio('start');
    this.startSound.play();

    this.background = this.add.tileSprite(0,0,320,568,"background");
    this.background.autoScroll(-50,0);

    this.button = this.game.add.button(this.game.world.centerX, this.game.world.centerY+100,"button", this.start, this);
    this.button.anchor.set(0.5,0.5);

    this.signbird = this.game.add.group();
    this.sign = this.game.add.sprite(0,0,'sign');
    this.signbird.add(this.sign);

    this.flappy = this.game.add.sprite(this.sign.width + 10, this.sign.height/2, "flappy");
    this.flappy.anchor.set(0,0.5);
    this.signbird.add(this.flappy);
    //this.signbird.animations.add('flap');
    //this.flappy.animations.play('flap', 12, true);
    //
    this.signbird.x = this.game.world.centerX - this.signbird.width/2;
    this.signbird.y = 120

    this.game.add.tween(this.signbird).to({y:this.signbird.y+10},350, Phaser.Easing.Linear.NONE,true,0,1000,true);
  },

  start: function () {
    this.startSound.stop();
    this.game.state.start('play');
  }

};

