// State: Flappy.Play

//var Flappy = Flappy || {};
var Flappy = {};

Flappy.Play = function (game) {
  this.flappy = null;
  this.background = null;
};

Flappy.Play.prototype = {

  init: function () {
    this.game.renderer.renderSession.roundPixels = true;
    this.physics.startSystem(Phaser.Physics.ARCADE);
  },

  preload: function () {
    this.load.image("background","assets/background.png");
    this.load.spritesheet("flappy","assets/flappy.png",32,32);
    this.load.image("pipetop","assets/pipetop.gif");
    this.load.image("pipebot","assets/pipebot.gif");
  },

  create: function () {
    this.background = this.add.tileSprite(0,0,320,568,"background");
    this.background.autoScroll(-100,0);
    this.flappy = new Flapper(this.game);
  }

};
