---
layout: ../../layouts/BlogPostLayout.astro
canonicalUrl: https://blog.logrocket.com/how-to-keep-javascript-libraries-up-to-date/
categories:
  - programming
date: "2020-07-07"
tags:
  - javascript
  - npm
  - yarn
title: How to Keep Your JS Libraries Up to Date
---

*This post was originally written for the [LogRocket
blog](https://blog.logrocket.com/how-to-keep-javascript-libraries-up-to-date/).*

The job of keeping JavaScript libraries up to date can be more nuanced than just
running `npm update` or `yarn up` once in a while. New projects usually start
with the latest versions of libraries, but they can become out of date fairly
quickly.

This is a particularly important topic for JavaScript developers because
projects written in JS tend to have relatively large dependency trees compared
to projects written in other languages.

## Why So Many Dependencies

There are a few reasons for this trend. The first is that the JS ecosystem is
very much tied to [Node.js](https://nodejs.org) and the [npm
registry](https://www.npmjs.com/). This is important because Node.js has an
[intentionally
small](https://medium.com/the-node-js-collection/keeping-the-node-js-core-small-137f83d18152)
standard library. Just compare [it](https://nodejs.org/api/) to [Python’s
standard library](https://docs.python.org/3/library/).

There are pros and cons to this approach, but the practical result is that JS
developers have a habit of turning to third-party libraries to solve problems,
even for tasks like adding `mkdir -p`
functionality[.](https://www.npmjs.com/package/mkdirp) The
[mkdirp](https://www.npmjs.com/package/mkdirp) library is downloaded over 20
million times per week.

Since dependencies can have dependencies themselves, this habit can lead to a
large `node_modules` directory. Its size has become a
[meme](https://devrant.com/rants/760537/heaviest-objects-in-the-universe), and
it is common for npm’s `package-lock.json` and [Yarn](https://yarnpkg.com/)'s
`yarn.lock` to be thousands or even tens of thousands of lines long.

![node modules meme](https://i.imgur.com/ue4wqw5.jpg)

To a greater degree than in other ecosystems, JS developers also embrace the
philosophy of creating and using [small and focused
dependencies](https://blog.sindresorhus.com/small-focused-modules-9238d977a92a).
This is sometimes a [target of
criticism](https://www.reddit.com/r/programming/comments/c0zwxb/one_liner_npm_package_iswindows_has_25_million/),
especially when packages only contain one line of code.

Regardless of the trade-offs of this reality, developers will need to consider
their dependency update strategy at some point.

## Why to Update

You might ask why it’s worth keeping dependencies up to date in the first place,
especially when a project is working fine as is.

The first reason is to prevent security vulnerabilities. Even if you are capable
of writing perfect code, any third-party code you use, directly or indirectly,
can have security issues. This can lead to devastating consequences. The [2017
Equifax data breach](https://en.wikipedia.org/wiki/2017_Equifax_data_breach) was
caused by Equifax failing to update a [framework](https://struts.apache.org/)
that it used for one of its websites after the framework patched a security
vulnerability.

The same idea applies to other bug fixes, functionality improvements, and
performance improvements. By updating your dependencies, you can easily bring
these improvements into your project.

The second reason is to avoid having to make huge changes later when you are
forced to upgrade for whatever reason. For example, you might start off with
version 1.0 of a library. You don’t upgrade for a long time, and then you try to
upgrade directly to version 4.0. This could involve significant changes that
could have been less painful if you had upgraded to 2.0 and 3.0 in between.

This isn’t that rare of a situation. Maybe you want to upgrade to a new major
version of Node, but the current version of one of your libraries doesn’t
support it.

Similarly, maybe your libraries depend on each other in a way that makes it
difficult to update one without also updating another. For example, you might
use a React component library that has a peer dependency on React. You only want
to update the component library, but then you find yourself being forced to
update React as well.

This cascading effect can result in a much larger change than you originally
intended to make, especially if you must change some of your own code as a
result. The longer you go without updating your libraries, the more likely
you’ll run into this situation.

Some library authors try to ease migrations by introducing breaking changes in a
thoughtful way, such as deprecating features before removing them. If you rarely
update, you might end up being forced to make big changes at an inconvenient
time rather than having an early warning and the chance to make a plan.

Updating dependencies is also a way to stay informed. It gives you a sense of
how the development of a library is going. You might learn of a new feature that
would be helpful to you. Or you might realize that a library is changing in such
a way that it won’t meet your needs in the future, and you should start
investigating alternatives. It’s easy to miss things like these if you install a
library and never think about it again.

Lastly, if you are a library author yourself, it makes sense to update your
dependencies on behalf of your end users. They cannot easily control the
versions of sub-dependencies, so if there is an issue with one, they may be
stuck with the issue if you don’t update your `package.json` to allow them to
bring in a newer version of the sub-dependency.

## Why Not to Update

However, there are also reasons not to update libraries. The biggest one is that
any change carries a risk of causing a problem. While you may get a fix for a
bug that you aren’t even aware of, it’s also possible that the updated library
introduces a new bug or performance regression.

One [school of thought](https://kevin.burke.dev/kevin/dont-update-dependencies/)
is that you should only update dependencies when you have a specific reason
instead of updating just for the sake of updating. Having a good test suite
helps to mitigate the risk, but it’s still a risk.

Updating dependencies also takes time away from building new features or fixing
known issues. It’s a chore that can take an unexpectedly long amount of time
when a library changes significantly.

Regardless of how often you decide to keep libraries up to date, let’s consider
the actual mechanisms for doing so.

## Updating Dependencies

Keep the idea of [semantic versioning](https://semver.org/) (semver) in
mind. This is the practice of versioning programs in a MAJOR.MINOR.PATCH manner.
A new major version denotes breaking changes, a new minor version denotes new
functionality that is backwards-compatible, and a new patch version denotes bug
fixes that are backwards-compatible.

JS libraries tend to follow semantic versioning, but version numbers merely
reflect the author’s intent and understanding. They could publish a new minor
version that actually does have a breaking change by accident, or maybe you are
using the library in an unexpected way that causes an issue with the updated
version.

By default, npm and Yarn expect libraries to follow semantic versioning. When
you add a library with either, the entry in `package.json`  will have a caret
(`^`) in front of the version:

```json
{
  "dependencies": {
    "lodash": "^3.1.0"
  }
}
```

This means that you will accept minor and patch version updates, but not major
version updates.

To check if your dependencies are out of date, you can run [npm
outdated](https://docs.npmjs.com/cli-commands/outdated.html):

```sh
Package  Current  Wanted   Latest  Location
lodash     3.1.0  3.10.1  4.17.15  npm-test
```

When you’re updating, the most important thing to do is to read the library’s
[changelog](https://keepachangelog.com/). This is usually the most efficient way
to figure out what changes you are bringing in, with the most crucial ones being
breaking changes.

If you find yourself in the unfortunate situation of updating a library that
doesn’t have a changelog, but it’s open-source, you may have to go through the
commit history to figure out what has changed. Larger projects also tend to have
blogs that provide more details for new versions.

The standard method of updating packages is to use [npm
update](https://docs.npmjs.com/cli/update), which updates all packages to the
latest version that is okay according to semver. In this case, you will update
Lodash to version 3.10.1.

Even though version 4.17.15 is available, npm won't update to it by default
because the caret limits you to minor and patch updates. You can also pass
specific packages to the command if you don’t want to update all packages at
once.

In many cases, you’ll want to update to the latest available version, regardless
of the specified semver. Unfortunately, `npm update` doesn’t have a way to do
this, so you’ll need to use  `npm install lodash@latest`.

To make this process more efficient, especially when you have many dependencies,
consider using [npm-check](https://github.com/dylang/npm-check) or
[npm-check-updates](https://github.com/raineorshine/npm-check-updates). These
CLI tools let you do updates in an interactive manner and provide helpful info
like a link to the project’s website so you can easily inspect changes.

```sh
$ npm-check

lodash   😎  MAJOR UP  Major update available. https://lodash.com/
                      npm install --save lodash@4.17.15 to go from 3.1.0 to 4.17.15

Use npm-check -u for interactive update.

$ npm-check -u
? Choose which packages to update.

 Major Update Potentially breaking API changes. Use caution.
❯◯ lodash  3.1.0  ❯  4.17.15  https://lodash.com/
```

Yarn even has this feature built-in. Just run [yarn
upgrade-interactive](https://yarnpkg.com/cli/upgrade-interactive).

```sh
$ yarn upgrade-interactive
 Press <up>/<down> to select packages.         Press <enter> to install.
 Press <left>/<right> to select versions.      Press <ctrl+c> to abort.

? Pick the packages you want to upgrade.       Current      Range/Latest

 > lodash                                      ◯  3.1.0    ◯  3.10.1   ◉  4.17.15
```

Yarn doesn’t have an `outdated` command, so `upgrade-interactive` basically
combines npm’s `outdated` and `update` into one, though you can also use [yarn
up](https://yarnpkg.com/cli/up).

Note that there are some differences if you are still using Yarn v1. The upgrade
command is [yarn upgrade](https://classic.yarnpkg.com/en/docs/cli/upgrade/)
instead of `yarn up`. Yarn v1 also does have an [outdated
command](https://classic.yarnpkg.com/en/docs/cli/outdated).

## Automating Updates

There has also been a push to streamline the update process with external
services. Some tools for this purpose include Gemnasium,
[Greenkeeper](https://github.com/greenkeeperio/greenkeeper), and
[Dependabot](https://dependabot.com/), though they have been acquired or
subsumed by
[GitLab](https://about.gitlab.com/press/releases/2018-01-30-gemnasium-acquisition.html),
[Snyk](https://snyk.io/blog/snyk-partners-with-greenkeeper-to-help-developers-proactively-maintain-dependency-health/),
and [GitHub](https://dependabot.com/blog/hello-github/), respectively.

The general idea is to have a service that monitors your project’s dependencies
and even opens pull requests to update them. They can also alert you when
security vulnerabilities are found in your dependency tree. Here is a screenshot
of a Dependabot PR that is generated by GitHub’s [security
updates](https://help.github.com/en/github/managing-security-vulnerabilities/configuring-automated-security-updates).

![Dependabot PR example](https://i.imgur.com/qF6kXue.png)

Services like these can make it considerably easier to keep your libraries up to
date since you don’t have to remember to do so yourself.

## Conclusion

Keeping libraries up to date might seem straightforward on the surface, but it’s
good to put some thought into your update strategy on a per-project basis. One
project may never need to be updated again, while another one may call for using
Dependabot, Snyk, or another service to aggressively stay up to date. Or maybe
you are fine with a just-in-time approach where you update dependencies as you
discover issues. In any case, make your decision an explicit one.
