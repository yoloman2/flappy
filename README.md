# Flappy HTML5 Phaser Game Template

Use this template to assemble your own game like Flappy Bird. Then, as
you learn more code, customize it to your liking.

## How to Use

1. Fork
2. Clone
3. Change
4. Commit
5. Push

## Customize Assets

To add your own art replace files in [`public/assets`](public/assets).
[PiskelApp.com][] is a great tool to create your game art. As a
rule just use PNG image files. **Remember to keep the same names
as the files in the `assets` directory.**

## Change Game Settings

Don't forget to update the sizes in `public/assets/config.json` if
your images are not the same dimensions. You can also change the
height and width of the whole game and other settings such as pipe
speed, spacing and offset from center.

## Change CNAME

To public your game to surge.sh change the `public/CNAME` file to
contain your site name. If you do not have a custom domain with Surge
(one is free) then you will have to make sure the domain ends in
`surge.sh`.

## Pre-Commit Sym Link

The `pre-commit` script can be linked to `harp compile` and `surge
www` your game site automatically when do a `save`:

```sh
ln -fs ../../pre-commit .git/hooks/pre-commit
```

The `save` command we use is just a small shell script with the
following:

```sh
#!/bin/sh

comment=save
[ ! -z "$*" ] && comment="$*"
git pull
git add -A .
git commit -a -m "$comment"
git push
```

## Our Stack

What is HTML5? It is the modern language used to create web pages
including those with moving parts and games. If you have heard of
Flash games then just know HTML5 has replaced Flash for pretty much
anything like it on the web.

* [Phaser.io][] - HTML5 JavaScript Game Framework based on Pixi 
* [Harp][] - No nonsense web server and site generation tool
* [Surge.sh][] - Free unlimited static web site hosting
* [PhoneGap][]\* - Free open source app builds

\* While we would prefer to use CocoonJS it is still not baked enough to
teach broadly and simply to students 8-18 years old.

[Phaser.io]: http://phaser.io
[Harp]: http://harpjs.com
[Surge.sh]: http://surge.sh
[PhoneGap]: http://build.phonegap.com
[PiskelApp.com]: https://piskelapp.com

