// State: Flappy.Play

'use strict';

var Flappy = Flappy || {};

Flappy.Play = function (game) {
  this.background = null;
  this.flappy = null;
  this.timer = null;
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
  this.timer = this.game.time.events.loop(2500, this.addPipe, this);           
};

Flappy.Play.prototype.addPipe = function () {
  new Pipe(this.game);
};

