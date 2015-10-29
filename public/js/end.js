// State: Flappy.End

'use strict';

var Flappy = Flappy || {};

Flappy.End = function () {};

Flappy.End.prototype = {

  create: function () {
    var gameoverStyle = { font: "100px sans-serif", fill: "rgba(0,255,0,1)", align: "center" }; 
    this.gameover = this.game.add.text(this.game.world.centerX, this.game.world.centerY - 150, "Game\nOver", gameoverStyle);
    this.gameover.anchor.set(0.5,0.5);
    var score = this.game.state.states.play.score;
    if (score < 0) {score = 0};
    this.scoretext = this.game.add.text(this.game.world.centerX, this.game.world.centerY + 100, score, gameoverStyle);
    this.scoretext.anchor.set(0.5,0.5);
    game.input.onDown.add(this.start, this);
    game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).onDown.add(this.start, this);
  },

  start: function () {
    this.game.state.start('start');
  }

};

