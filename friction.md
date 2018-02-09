---
layout: default
title: Danny Guo · Development Friction
---

# Development Friction

I decided to start documenting all the things that cause me to lose focus on
what I want to be doing. I'll probably include issues with tooling, bugs that
take me longer to figure out than they should, and times when figuring out what
the "right" thing to do seems hard.

## 2018-02-08

### Localhost stops working
All of a sudden, I can't access my website that is running locally. The Docker
Compose output looks good, and the port mapping looks fine when I run
`docker-compose ps`. I try restarting the service, then restarting Docker
(`sudo systemctl restart docker`), then restarting my computer. But it's still
not working. I try to access the site in Chrome, and it does work! I try
curling, but that hangs, just like Firefox. I try starting another project in
Docker on a different port, and the results are the same. I try serving up a
folder with Python (`python -m http.server` for Python 3), and it's still only
accessible from Chrome. I decide to inspect my `/etc/hosts` file, and it's
empty. I add `127.0.0.1 localhost` to it, and everything works again. I'm not
sure how that happened though since I didn't update anything that I know of. I
also don't know why Chrome was able to access localhost regardless.

Looking back, I should have immediately tried the Python server to verify that
it wasn't a Docker issue. That should have led me to checking out `/etc/hosts`
more quickly rather than spending time restarting things.

On the bright side, I spent a bit of time learning the [basic
difference](https://stackoverflow.com/questions/20778771/what-is-the-difference-between-0-0-0-0-127-0-0-1-and-localhost)
between `127.0.0.1` and `0.0.0.0`. Essentially, `127.0.0.1` will only serve
clients on the same host, whereas `0.0.0.0` will serve clients on any host
(like another computer if they know your IP address).

Time wasted: ~30 minutes

## 2018-02-06

### Colorized output with ls
On Antergos, I'm not getting colorized ls output (different colors for
directories, executables, etc.). I find a [StackExchange
answer](https://superuser.com/questions/665274/how-to-make-ls-color-its-output-by-default-without-setting-up-an-alias).
I need to add `--color=auto` to my ls alias, but that flag doesn't exist on Mac
(where the `-G` flag is used instead to turn on colors, which I assume is
because OS X is based on BSD, not Linux). I find another [StackExchange
answer](https://apple.stackexchange.com/questions/33677/how-can-i-configure-mac-terminal-to-have-color-ls-output)
that tells me I can do `export CLICOLOR=1` to achieve the same effect on Mac. I
[update my
dotfiles](https://github.com/dguo/dotfiles/commit/ee1f5938074db1ad4e5256756253d3526dea9105)
to set that when I'm on Mac and add the color flag otherwise.

Time wasted: ~10 minutes

### No type checks with pm2 and ts-node
I'm not getting type errors for the server during development, and a type error
made me spend five minutes debugging when it should have been caught immediately.
It looks like it's because ts-node [changed to "fast" mode by
default](https://github.com/TypeStrong/ts-node/releases/tag/v4.0.0), which
bypasses type checks. pm2 has a way to [pass flags to the
interpreter](http://pm2.keymetrics.io/docs/usage/application-declaration/#general)
(I need to pass --type-check). But when I add it to the config, the server
doesn't start anymore, and I don't see any pm2 trace in the Docker output. I
open a shell and run pm2 manually. That's when I see `[PM2][ERROR] Interpreter
/app/node_modules/pm2/node_modules/.bin/ts-node does not seem to be available`.
I get that error regardless of whether or not I add `interpreter_args` to the
config, but the server still starts if I don't add it. Very weird. I'm going to
try updating pm2 to the latest version, though I don't see aything in the
changelog that looks like it would help. And it doesn't.

I find a [GitHub issue](https://github.com/Unitech/pm2/issues/3312) with that
pm2 error message, but it suggests to run `pm2 install typescript`, which I
don't want to do because I want it to just use the versions of TypeScript and
ts-node that I already have installed as dependencies, and I can't find any
documentation that details what `pm2 install typescript` actually does. The
help output says `install or update a module and run it forever`, but how is
TypeScript a pm2 module?

I'll try specifying the interpreter with `"interpreter":
"./node_modules/.bin/ts-node"`. That doesn't work. The error message is
`/usr/local/bin/node: bad option: --type-check`. But why is node getting the
option if I overrode the interpreter?

It's a shot in the dark, but I'll try passing the flag as `args` rather than
`interpreter_args`. The server starts, but there's still no type checking.

Taking another look at the [ts-node
documentation](https://github.com/TypeStrong/ts-node#configuration-options), I
learn that I can also turn on type checking with an environment variable, so I
add `"TS_NODE_TYPE_CHECK": "1"` to the pm2 config. And that works! Type errors
are being reported again.

Time wasted: ~1 hour
