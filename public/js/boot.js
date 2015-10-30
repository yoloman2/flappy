// State: Flappy.boot

'use strict';

var Flappy = {
  score: 0
};

Flappy.Boot = function () {
  console.log("%c~~~ Booting the Flap ~~~\n Compliments of SkilStak", "color:#fdf6e3; background:#073642");
};

Flappy.Boot.prototype = {

  preload: function () {
    // TODO load the loading image
  },

  create: function () {
    this.game.state.start('preload');
  }

};

