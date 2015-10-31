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
    this.playMusic = this.game.add.audio('play');
    this.pointSound = this.game.add.audio('point');
    this.crashSound = this.game.add.audio('crash');
    this.playMusic.play();

    this.background = this.add.tileSprite(0,0,320,568,"background");
    this.background.autoScroll(-50,0);
    this.background.animations.add('bganim');
    this.background.animations.play('bganim',20,true);

    this.flappy = new Flapper(this.game);
    this.timer = this.game.time.events.loop(2500, this.addPipe, this);           
    var scoreTextStyle = { font: "30px sans-serif", fill: "rgba(0,255,0,1)" }; 
    this.scoreText = this.game.add.text(this.game.world.centerX, -1, "0", scoreTextStyle);
    this.pipes = this.game.add.group();
  },

  addPipe: function () {
    var pipe;
    if (this.pipes.length < 3) {
      pipe = new Pipe(this.game);
      this.pipes.add(pipe);
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

  render: function () {
  }

};

