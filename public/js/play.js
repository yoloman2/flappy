// State: Flappy.Play

'use strict';

var Flappy = Flappy || {};

Flappy.Play = function () {};

Flappy.Play.prototype = {

  init: function () {
    this.background = null;
    this.flappy = null;
    this.pipes = null;
    this.timer = null;
    this.score = -1; 
    this.scoreText = null;
  },

  create: function () {
    this.background = this.add.tileSprite(0,0,320,568,"background");
    this.background.autoScroll(-50,0);
    this.playMusic = this.game.add.audio('play');
    this.pointSound = this.game.add.audio('point');
    this.crashSound = this.game.add.audio('crash');
    this.playMusic.play();
    this.flappy = new Flapper(this.game);
    this.timer = this.game.time.events.loop(2500, this.addPipe, this);           
    var scoreTextStyle = { font: "80px sans-serif", fill: "#fdf6e3" }; 
    this.scoreText = this.game.add.text(this.game.world.centerX, 55, "0", scoreTextStyle);
    this.scoreText.anchor.set(0.5);
    this.pipes = this.game.add.group();
  },

  addPipe: function () {
    var pipe;
    if (this.pipes.length < 3) {
      pipe = new Pipe(this.game);
      this.pipes.add(pipe);
      this.scoreText.bringToTop();
    } else {
      pipe = this.pipes.getFirstExists(false);
      pipe.reset();
    }
    this.score += 1;
    this.scoreText.text = this.score;
    if (this.score > 0) this.pointSound.play();
  },

  update: function () {
    this.pipes.forEach(function (pipe) {
      this.game.physics.arcade.collide(this.flappy, pipe, this.end, null, this);  
    }, this);
    if (!this.flappy.alive) this.end();
  },

  end: function () {
    this.crashSound.play();
    this.playMusic.stop();
    this.game.state.start('end');
  },

};

