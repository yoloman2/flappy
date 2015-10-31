// State: Flappy.End

'use strict';

Flappy.End = function () {};

Flappy.End.prototype = {

  create: function () {
    this.logo = this.add.sprite(this.game.world.centerX, this.game.world.height - 80, 'logo');
    this.logo.anchor.set(0.5);
    this.logo.frame = 1;

    this.game.add.tween(this.logo).to({y:this.game.world.height+50}, 700).start();
    this.game.add.tween(this.logo).to({angle:90},1000).start();

    var gameoverStyle = { font: "100px sans-serif", fill: "#b58900", align: "center" }; 
    this.gameover = this.game.add.text(this.game.world.centerX, this.game.world.centerY - 150, "Game\nOver", gameoverStyle);
    this.gameover.anchor.set(0.5,0.5);

    var score = this.game.state.states.play.score;
    var gameoverStyle = { font: "100px sans-serif", fill: "#fdf6e3", align: "center" }; 
    if (score < 0) {score = 0};
    this.scoretext = this.game.add.text(this.game.world.centerX, this.game.world.centerY + 70, score, gameoverStyle);
    this.scoretext.anchor.set(0.5,0.5);
    game.input.onDown.add(this.start, this);
    game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).onDown.add(this.start, this);
    this.gameoverSound = this.game.add.audio('gameover');
    this.gameoverSound.play();
  },

  start: function () {
    this.gameoverSound.stop();
    this.game.state.start('start');
  }

};

