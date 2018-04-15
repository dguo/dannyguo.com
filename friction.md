---
layout: default
title: Danny Guo · Development Friction
---

# Development Friction

I decided to start documenting all the things that cause me to lose focus on
what I want to be doing. I'll probably include issues with tooling, bugs that
take me longer to figure out than they should, and times when figuring out what
the "right" thing to do takes more than a couple minutes of research. In that
sense, this is also a log of things that I have learned.

## 2018-04-14
### TypeScript's watch mode watches too many files
I ran into a baffling issue where the TypeScript compiler's watch mode would
trigger recompilation whenever I changed seemingly irrelevant files like
`package.json` or a JS file in `node_modules`. Watch mode is
[documented](https://www.typescriptlang.org/docs/handbook/compiler-options.html)
to only watch "input files". After some debugging, I realized that removing
almost all of my dependencies fixed the problem. I tried doing binary search to
figure out if a particular package was causing the issue, but I couldn't narrow
it down to just one package. I ended up with a set of dependencies that
reproduces the problem. Removing any of them seemed to fix the problem. What
was particularly strange was the fact that the input files didn't even reference
any of the dependencies.

I made a [repo](https://github.com/dguo/tsc-watch-bug) demonstrating the problem
and submitted an [issue](https://github.com/Microsoft/TypeScript/issues/23414).

## 2018-03-14

### The "prepublish" npm lifecycle event is confusing
I want to make sure that I run certain commands before publishing to the npm
registry. I know npm supports [lifecycle
events](https://docs.npmjs.com/misc/scripts) in `package.json`. The
`prepublish` one seems to be what I'm looking for, but apparently it's
[problematic](https://docs.npmjs.com/misc/scripts#prepublish-and-prepare).  The
issue is that it was implemented to run not only before publishing but also
during development after the user does `npm install`. This is incredibly
unintuitive and seems to have caused a ton of [issues and
discussion](https://github.com/npm/npm/issues/10074). There is even an
[in-publish](https://www.npmjs.com/package/in-publish) package that is used as
a workaround and has been downloaded millions of times.

The npm team finally decided to resolved the issue, but the solution is pretty
painful too. They added a `prepare` event that acts like `prepublish` (running
after `npm install` too) and a `prepublishOnly` event that actually only runs
before publishing. The plan is to issue a deprecation warning for
`prepublish`, change it to act like `prepublishOnly` in a new major version, and
then eventually deprecate `prepublishOnly`. I assume they put a lot of thought
into it, but I don't understand why they couldn't skip the `prepublishOnly` part
and just directly change the `prepublish` behavior in a new major version.

Another related issue is that the Yarn team [has to keep
up](https://github.com/yarnpkg/yarn/issues/1323) with the changes. It's
unfortunate how much effort has been spent on this issue when it seems like it
could have been avoided by just not making something act in a way that isn't
implied by its name at all.

## 2018-03-13

### JavaScript modules with TypeScript
I'm following [this Twilio blog post](https://www.twilio.com/blog/2017/06/writing-a-node-module-in-typescript.html) on how to write a TypeScript package than can also be used by regular JavaScript. It's smooth for the most part, but
figuring out how to correctly import and export code takes some research.

I have to pull in another package ([ms](https://github.com/zeit/ms)), and I want to use the now official ES6
[import statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import), but the generated code throws an error when `ms` is called. It [turns out](https://stackoverflow.com/q/29596714/1481479) I need to use this strange, TypeScript-specific syntax to [interop with CommonJS modules](https://www.typescriptlang.org/docs/handbook/modules.html#export--and-import--require): `import ms = require('ms');`. It fixes the issue though.

I only have a single function to export, so I want to use `export default`.
TypeScript happily compiles it, but when I try to require the output in regular
JS, it fails. I'm running into [this issue](https://github.com/Microsoft/TypeScript/issues/2719), which is that `export default foo;` becomes `exports.default = foo;`. So in Node, the user would have to do `const foo = require('foo').default;`. I decide to drop the `default` and just export the function. So an ES6 consumer would do `import {foo} from 'foo';`, and a Node user would do `const foo = require('foo').foo;`. It still looks clunky, but it's better than `default`.

Then I learn that for importing at least, [TypeScript 2.7](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-7.html) added a new `esModuleInterop` flag that allows for importing CommonJS in the way that I originally wanted to: `import ms from 'ms';`. I add the flag, and it works.

As I browse numerous GitHub issues and StackOverflow questions, it makes me wonder how much collective time we have spent on figuring out how to import and export
code in JavaScript. I'm really glad ES6 was able to provide an official solution, but it seems like we're going to be dealing with compatibility issues for a long
time. Node still doesn't support `import` natively because [it's such a hard problem](https://medium.com/the-node-js-collection/an-update-on-es6-modules-in-node-js-42c958b890c). I'm thankful to the people who are working on making the
whole situation as painless for end users as possible.

The package that I published is [sleep-ts](https://www.npmjs.com/package/sleep-ts).

## 2018-02-15

### "RESTful" Partial Updates
I want to follow convention when it comes to partially updating resources
through a REST API. I know that `POST` is used to create resources, and `PUT`
is used to update resources at a known location, but I don't want to send the
entire object for updates. Instead, I only want to send the values that should
be changed. I learn about `PATCH`, but it's not as simple as I imagined it
would be. I read this [blog
post](http://williamdurand.fr/2014/02/14/please-do-not-patch-like-an-idiot/),
which tells me that `PATCH` is supposed to send instructions (i.e. `{"op":
"replace", "path": "/email", "value": "newemail@example.com"`) for the update
rather than just values (i.e. `{"email": "newemail@example.com"}`).

I've never actually seen the former. In API documentation, I'm used to seeing
the pattern of "send the values that you want to be updated, and those are the
only ones that will change." That's how the [Stripe
API](https://stripe.com/docs/api#update_recipient) works.  It uses `POST` for
updates. The
[Twilio](https://www.twilio.com/docs/api/rest/addresses#instance-post) and
[Lob](https://lob.com/docs#templates_update) APIs also use `POST` for updates,
which seems to go against [this
guide](http://restcookbook.com/HTTP%20Methods/put-vs-post/), though [Roy
Fielding](https://en.wikipedia.org/wiki/Roy_Fielding) apparently [doesn't have
a problem](http://roy.gbiv.com/untangled/2009/it-is-okay-to-use-post) with it.
I can't find an API that actually uses `PATCH`, except for [Google
APIs](https://developers.google.com/gmail/api/v1/reference/users/labels/patch).

I find another [blog
post](https://blog.apisyouwonthate.com/put-vs-patch-vs-json-patch-208b3bfda7ac)
that summarizes the topic. I think I will just use `PATCH` but not bother with
the "official" approach of using a description of changes. My website is not
complicated enough to justify that. I am following the informal approach that
is [detailed
here](https://restful-api-design.readthedocs.io/en/latest/methods.html#patch-vs-put).
It is the Stripe/Twilio/Lob approach but uses `PATCH` instead of `POST`.

`PUT` is not in the conversation because it is supposed to be idempotent. And
while `PATCH` might seem idempotent, it is not because the rest of the resource
might change in the meantime, or the changeset might depend on the resource
already having certain values.

Time spent: ~1 hour, 30 minutes

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

Time spent: ~30 minutes

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

Time spent: ~10 minutes

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

Time spent: ~1 hour
