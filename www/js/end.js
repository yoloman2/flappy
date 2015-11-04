// State: Flappy.End

'use strict';

Flappy.End = function () {};

Flappy.End.prototype = {

  create: function () {
    this.config = this.cache.getJSON('config');
    var fy = this.game.world.centerY + this.config.flappy.end.offset;
    this.flappy = this.add.sprite(this.game.world.centerX,fy,'flappy');
    this.flappy.anchor.set(0.5);
    this.flappy.frame = 1;
    this.flappy.scale.set(this.config.flappy.end.scale || 1);

    this.game.add.tween(this.flappy).to({y: this.game.world.height+
            this.flappy.width/2}, this.config.flappy.end.duration).start();
    this.game.add.tween(this.flappy).to({angle:90},
                        this.config.flappy.end.duration).start();

    var gameoverStyle = this.config.gameover.style;
    this.gameover = this.game.add.text(this.game.world.centerX,
                                       this.game.world.centerY +
                                       this.config.gameover.offset,
                                       this.config.gameover.text,
                                       gameoverStyle);
    this.gameover.anchor.set(0.5,0.5);

    var score = this.game.state.states.play.score;
    if (score > Flappy.highScore) {
      localStorage.setItem(this.config.highscore.key, score);
    }
    if (score < 0) {score = 0};
    this.scoretext = this.game.add.text(this.game.world.centerX,
                                        this.game.world.centerY + 70,
                                        score,
                                        this.config.gameover.score.style);
    this.scoretext.anchor.set(0.5,0.5);

    Flappy.drawHighScore(this);

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

