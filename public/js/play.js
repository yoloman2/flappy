// State: Flappy.Play

'use strict';

var Flappy = Flappy || {};

Flappy.Play = function () {
  this.background = null;
  this.flappy = null;
  this.pipes = null;
  this.timer = null;
  this.score = -1; 
  this.scoreText = null;
};

Flappy.Play.prototype = {

  preload: function () {
    this.load.image("background","assets/background.png");
    this.load.spritesheet("flappy","assets/flappy.png",32,32);
    this.load.image("pipetop","assets/pipetop.gif");
    this.load.image("pipebot","assets/pipebot.gif");
  },

  create: function () {
    this.background = this.add.tileSprite(0,0,320,568,"background");
    this.background.autoScroll(-50,0);
    this.flappy = new Flapper(this.game);
    this.timer = this.game.time.events.loop(2500, this.addPipe, this);           
    var scoreTextStyle = { font: "30px sans-serif", fill: "rgba(0,255,0,1)" }; 
    this.scoreText = this.game.add.text(this.game.world.width/2, -1, "0", scoreTextStyle);
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
  },

  update: function () {
    this.pipes.forEach(function (pipe) {
      this.game.physics.arcade.collide(this.flappy, pipe, this.restart, null, this);  
    }, this);
  },

  restart: function () {
    this.score = -1;
    this.scoreText.text = 0;
    this.game.state.start('start');
  }

};

