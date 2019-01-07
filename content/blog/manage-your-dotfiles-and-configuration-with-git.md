---
categories:
  - programming
date: "2019-01-06"
draft: true
tags:
  - dotfiles
  - git
title: Manage Your Dotfiles and Configuration With Git
---

There are multiple methods for managing dotfiles. Let's go over why we would
want a system for doing so and then review the methods.

## Dotfiles

[Dotfiles][dotfiles] are a convention for storing program configurations,
usually in some sort of plain-text format. They are called dotfiles because
their file name starts with a period. On Unix-like systems, dotfiles are
typically hidden by default.

[dotfiles]: https://en.wikipedia.org/wiki/Hidden_file_and_hidden_directory#Unix_and_Unix-like_environments

Some people like to use programs and systems in their default states for reasons
like simplicity and portability.

However, many people will end up wanting to make at least some tweaks to their
setup.

I've seen quite a few
[threads](https://www.reddit.com/r/unixporn/comments/6herou/how_do_you_manage_your_dotfiles_share_your_tips/)
about the best way to [manage
dotfiles](https://news.ycombinator.com/item?id=11070797).

## Manually copy

The most basic way to share configuration on a new system is to just copy it.
The main benefit to this

## Use a file syncing program

An easy method is to use a program like Dropbox or Google Drive.

However, there are some drawbacks. The first is that we might not have access to
these programs in a corporate environment. The second is that there's no
controlled history for the files. The third is that you can't easily make device
specific modifications.

## Use Git

Check out this [unofficial guide to dotfiles on
GitHub](https://dotfiles.github.io/).

You can also browse GitHub repos that are
[tagged](https://github.com/topics/dotfiles) with "dotfiles."

One [approach](https://unix.stackexchange.com/q/46538/280976) is to check in
your entire `$HOME` directory.

Another approach is to use [GNU Stow](https://www.gnu.org/software/stow/).

## Frameworks

https://github.com/RichiH/vcsh

https://www.anishathalye.com/2014/08/03/managing-your-dotfiles/

https://github.com/anishathalye/dotbot/

For more resources, check out [Awesome
dotfiles](https://github.com/webpro/awesome-dotfiles).
