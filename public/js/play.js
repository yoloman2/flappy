// State: Flappy.Play

'use strict';

var Flappy = Flappy || {};

Flappy.Play = function (game) {
  this.background = null;
  this.flappy = null;
  this.pipes = null;
  this.timer = null;
  this.score = -1;  
  this.scoreText = null
  //this.blah = null;
};

Flappy.Play.prototype.preload = function () {
  this.load.image("background","assets/background.png");
  this.load.spritesheet("flappy","assets/flappy.png",32,32);
  this.load.image("pipetop","assets/pipetop.gif");
  this.load.image("pipebot","assets/pipebot.gif");
};

Flappy.Play.prototype.create = function () {
  this.background = this.add.tileSprite(0,0,320,568,"background");
  this.background.autoScroll(-50,0);
  this.flappy = new Flapper(this.game);
  //this.blah = new Flapper(this.game);
  //this.blah.y=-100;
  this.timer = this.game.time.events.loop(2500, this.addPipe, this);           
  this.scoreText = this.game.add.text(this.game.world.width/2, -1, "0", { font: "30px sans-serif", fill: "rgba(0,255,0,1)" }); 
  this.pipes = this.game.add.group()
};

Flappy.Play.prototype.addPipe = function () {
  var pipe = new Pipe(this.game);
  console.log(pipe);
  this.pipes.add(pipe);
  this.score += 1;
  this.scoreText.text = this.score;
};

Flappy.Play.prototype.update = function () {
  this.game.physics.arcade.collide(this.flappy, this.pipes, this.restart, null, this);  
};

Flappy.Play.prototype.restart = function () {
  this.game.state.start('play');
};

