# Main Phaser Game Directory

This is where we put everything that will end up in the game:

* `CNAME` - the surge name of the website (usually ends in surge.sh)
* `index.jade` - just enough page to load the JavaScript
* `js` - the main source
* `assets` - art, music, and configuration of the game

To customize the existing game change stuff in `assets` and you don't
need to change anything in the `js` directory.

## No Compression/Concatenation

Some will notice that the JavaScript is not minified, not even the
`js/phaser.js`. Also the scripts are individually linked from the
`index.jade` file instead of joined together. While Harp is capable
of creating a single JavaScript file to load we have chosen not to
given the size of the resources and the benefit of having specific
line numbers and files in our debugging from the Chrome console.
Minification removes this important convenience and should only be
considered at the very end if at all. Most of these games are
intended to be made into mobile apps and the file sizes. Plus modern
browsers do concurrent loading. The delay is minuscule compared to
the delay of decoding the MP3 audio, for example.

## Reduce Mobile Load Time

If you find the 'Decoding' wait too long for your taste you should
use smaller MP3 files (or even just `wav` files and change the `js`
code to use `wav`).

