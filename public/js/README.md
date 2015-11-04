# JavaScript

We use the Phaser engine and organize the JavaScript into states
and objects, (which some call prefabs\*). This organization follows
the standard set forth in the Interphase book as opposed to the
many tutorials and some other examples out there. The `boot` and
`preload` states are particularly important (and absent from about
every other tutorial out there) and should be included in every
Phaser game.  Without them games will lag horribly while assets are
loaded and decoded during the beginning of game play.

States:

* `boot.js` - the first state to run
* `preload.js` - loading assets and decoding sound
* `start.js` - start state, push play, high score
* `play.js` - main play state
* `end.js` - game over state, high score

Objects:

* `flapper.js` - the flapping thingy
* `pipe.js` - the pipe, composed of top and bottom sprites

Note that we use the full `phaser.js` instead of `phaser.min.js`
so that we can debug better and get an insider look at how phaser
works.  In a production game students could swap this out, but it
isn't really necessary.

\* Note: I hate the name 'prefab' used by some. They are JavaScript
objects. No need for a new name.
