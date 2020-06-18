---
categories:
  -
date:
draft: true
tags:
  -
title: Clearing Storage Space in Mac
---

Clearing storage space in macOS can be more difficult than just deleting the
obvious files. I recently needed to clear a large amount of space in order to
install Windows through Boot Camp.

## Easy methods

Delete applications.

Delete documents.

Clear the trash, and turn on doing it automatically.

## Other storage

macOS has a built in storage analyzer, but it's not great.

## Disk space analyzer programs

I looked into third party programs to find out what folders and files were
taking up space. The first one I tried was [Disk Inventory
X](http://www.derlien.com/).

It was useful but took a while to produce results. Maybe about 10 minutes or so.

I looked into alternatives. The most helpful resources were this [Stack Exchange
question](https://apple.stackexchange.com/q/81568/275342) and this
[article](https://macpaw.com/how-to/best-disk-space-analyzers-mac).

I decided to try [OmniDiskSweeper](https://www.omnigroup.com/more). It doesn't have
a tree view, but I didn't find that very useful anyway. OmniDiskSweeper was able
to show results as they came, rather than all at once when everything was ready.

It doesn't update in real time, so you need to re-analyze the disk after
deleting files.

## Docker

## Spotify

The biggest surprise to me was finding that Spotify can take a large amount of
space to cache files. Mine was over 6 GB. Even Firefox's cache was only 2 GB.

Furthermore, there doesn't seem to be a way to control this cache size in
Spotify settings, not even buried in some advanced settings. This setting [might
have existed
before](https://community.spotify.com/t5/Social/What-happened-to-the-cache-limit-setting-on-Mac-desktop-player/td-p/4658524),
but it definitely doesn't anymore.

Luckily, [someone
discovered](https://community.spotify.com/t5/Desktop-Mac/How-to-limit-cache-size/td-p/2907725)
that you can set a limit manually by editing the Spotify preferences file.

I set the limit to 2048, restarted Spotify, and confirmed that the cache folder
dropped to 2 GB in size.

## Yarn

## Google Drive

## Git

I had some Git repos that I didn't need anymore. Deleting these saved around 1
GB. Git repos can take up a large amount of space since by default, they contain
the entire history of a project. But most of the space savings was due to
deleting `node_modules` with each one.
