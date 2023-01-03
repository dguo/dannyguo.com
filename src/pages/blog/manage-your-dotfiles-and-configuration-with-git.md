---
layout: ../../layouts/BlogPostLayout.astro
categories:
  - programming
date:
draft: true
tags:
  - dotfiles
  - git
title: Manage Your Dotfiles and Configuration With Git
---

Since
[2015](https://github.com/dguo/dotfiles/commit/cfbaa3f47c707287205fe959220923f394643cb3),
I've maintained my system configuration in a [public GitHub
repository](https://github.com/dguo/dotfiles).

There are multiple methods for managing your custom set-up. Let's go over why we
would want a system for doing so and then review the methods.

## Dotfiles

[Dotfiles](https://en.wikipedia.org/wiki/Hidden_file_and_hidden_directory#Unix_and_Unix-like_environments)
are a convention for storing program configurations, usually in some sort of
plain-text format. They are called dotfiles because their file name starts with
a period. On Unix-like systems, dotfiles are typically hidden by default with
the [ls](https://en.wikipedia.org/wiki/Ls) command (though [Rob
Pike](https://en.wikipedia.org/wiki/Rob_Pike) considers this convention to [be a
mistake](https://linux-audit.com/linux-history-how-dot-files-became-hidden-files/)).

Some people like to use programs and systems in their default states for reasons
like simplicity and portability.

However, many people will end up wanting to make at least some tweaks to their
setup.

I've seen quite a few
[threads](https://www.reddit.com/r/unixporn/comments/6herou/how_do_you_manage_your_dotfiles_share_your_tips/)
about the best way to [manage
dotfiles](https://news.ycombinator.com/item?id=11070797).

## Avoid configuration

Before looking for a solution to any problem, it's worth thinking about how to
avoid having the problem in the first place. Some people like to use programs in
their default states and will purposely avoid configuring anything. This
approach makes their knowledge and habits portable. For example, they can use a
program on a different machine without getting tripped up by the new machine not
having custom keyboard shortcuts.

Programmers in particular seem to love fiddling with settings and getting things
to work *just* how we like it. Maybe we would save time and be more efficient by
having a no configuration attitude more often, but given that most of us will
end up making at least some changes, we should think about having a system for
doing so.

## The manual approach

The most basic way to share configuration on a new system is to just make
changes manually. The main benefit to this approach is that you get an obvious
chance to clean up your settings. Maybe you added a Vim plugin that you never
ended up using at all. By not automating the syncing, you won't bring it over to
another machine without any scrutiny. If you have many changes though, or if you
don't want to keep getting tripped by a program not having an old setting,
you'll best be served by automating it.

## Use a file syncing program

An easy method is to use a file syncing service like
[Dropbox](https://www.dropbox.com/) or [Google
Drive](https://www.google.com/drive/).

However, there are some drawbacks. The first is that we might not have access to
these programs in a corporate environment. The second is that there's no
controlled history for the files.

## Use Git

Check out this [unofficial guide to dotfiles on
GitHub](https://dotfiles.github.io/).

You can also browse GitHub repos that are
[tagged](https://github.com/topics/dotfiles) with "dotfiles."

One [approach](https://unix.stackexchange.com/q/46538/280976) is to check in
your entire `$HOME` directory.

Another approach is to use [GNU Stow](https://www.gnu.org/software/stow/).

## Frameworks

There are also many
[frameworks](https://dotfiles.github.io/#general-purpose-dotfile-utilities)
dedicated to dotfile management.

[vcsh](https://github.com/RichiH/vcsh)

[managing your dotfiles](https://www.anishathalye.com/2014/08/03/managing-your-dotfiles/)

[dotbot](https://github.com/anishathalye/dotbot/)

For more resources, check out [Awesome
dotfiles](https://github.com/webpro/awesome-dotfiles).
