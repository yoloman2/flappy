// State: Flappy.Preload

'use strict';

Flappy.Preload = function () {};

Flappy.Preload.prototype = {

  preload: function () {
    this.logo = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
    this.logo.anchor.set(0.5);
    this.logo.animations.add('blink');
    this.logo.play('blink',2,true);
    
    var style = { font: "30px sans-serif", fill: "#fdf6e3", align: "center" }; 
    this.loading = this.game.add.text(this.game.world.centerX, this.game.world.centerY + 70, "Loading...", style);
    this.loading.anchor.set(0.5,0.5);

    this.load.image('background','assets/background.png');
    this.load.spritesheet('flappy','assets/flappy.png',46,64);
    this.load.spritesheet('sign','assets/sign.png',46,64);

    this.load.image('button','assets/button.png');
    this.load.image('pipetop','assets/pipetop.png');
    this.load.image('pipebot','assets/pipebot.png');

    this.load.audio('start','assets/start.mp3');
    this.load.audio('flap', 'assets/flap.wav');
    this.load.audio('point', 'assets/point.wav');
    this.load.audio('crash', 'assets/crash.wav');
    this.load.audio('play', 'assets/play.mp3');
    this.load.audio('gameover', 'assets/gameover.wav');
  },

  create: function () {
    this.loading.text = "Decoding...";
    var start = this.game.add.audio('start');
    var flap = this.game.add.audio('flap');
    var play = this.game.add.audio('play',0.7,true);
    var point = this.game.add.audio('point');
    var crash = this.game.add.audio('crash');
    var gameover = this.game.add.audio('gameover');
    var sounds = [start,flap,play,point,crash,gameover];
    game.sound.setDecodedCallback(sounds, this.start, this);
  },

  start: function () {
    this.game.state.start('start');
  }

};

