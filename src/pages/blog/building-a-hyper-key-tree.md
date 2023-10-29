---
layout: ../../layouts/BlogPostLayout.astro
categories:
  - productivity
date: "2023-10-29"
unlisted: true
tags:
  - hammerspoon
title: Building a Hyper Key Tree
---

One of my favorite efficiency hacks is to [remap my caps lock key](https://www.dannyguo.com/blog/remap-caps-lock-to-escape-and-control) to function as
escape when tapped and control when held down. I don't remember where I learned
that tip, but ever since then, I've been interested in using my keyboard more
efficiently than just using standard keyboard shortcuts.

I later learned about the concept of a [hyper
key](https://docs.folivora.ai/docs/1004_hyper_key.html), which is a personal
modifier key. This allows you create your own shortcuts that are basically
guaranteed to not collide with any other shortcuts. A typical implementation
involves activating a hyper mode by simulating pressing all the modifiers (e.g.
`shift + control + option + command` on Macs) simultaneously. So you would make
one key serve as `hyper`, and then you can define an action for `hyper + s`, for
example.

A few years ago, I thought of pushing this idea further by building a hyper key
tree that gives me unlimited keyboard shortcuts based on *sequences rather than
combinations* of keys.

## Hyper Key Tree

I use [Hammerspoon](https://www.hammerspoon.org/) to [automate various aspects
of my
Mac](https://github.com/dguo/dotfiles/blob/main/programs/hammerspoon/init.lua)
with [Lua](https://www.lua.org/about.html) scripts. And that's what I used to
[implement my
idea](https://github.com/dguo/dotfiles/blob/c7906074d196b6840ddac3585e7e912f1a5de53a/programs/hammerspoon/init.lua#L17).

I configured an entire
[tree](https://en.wikipedia.org/wiki/Tree_(data_structure)) of keys. Each node,
which corresponds to a key, can do up to three things:

1. If I tap it, I trigger a configured action.
2. If I hold it, and it's a leaf node that doesn't have any children, then the
   configured action repeats.
3. If I hold it, and it does have children, then I descend into that node's
   subtree.

I chose semicolon (`;`) to serve as my root node. That's because a finger (my right
pinky) rests on it by default, and there's never a case where I want to hold
semicolon down to type it repeatedly.

There are many nodes under semicolon. One node is `f`, and I configured it to
switch window focus to Firefox or open it if necessary. So by holding `;` and
then tapping `f`, it takes me just two keystrokes to switch. Another node is
`i`, which does the same thing but for iTerm.

However, if I hold `i` instead of tapping it, I descend into `i`'s subtree. I
think of `i` as representing "insert" in this mode, and the idea is to type out
commonly used strings for me. For example, one node is `e` (for "email"), so if
I tap `e` at this point, the program will type out my personal email. That's
three keystrokes to type my email: `; -> i -> e`. If I want to type my work
email, it's the same sequence except with a `w` (for "work") at the end.

## Standard Keyboard Shortcuts

The standard approach to keyboard shortcuts is to use combinations of modifier
keys. For example, `command + w` closes a browser tab, but `command + shift + w`
closes the entire window. However, this means that we can end up with unwiedly
combinations that require us to contort our fingers. It's like we're playing
[Twister](https://en.wikipedia.org/wiki/Twister_(game)) with our hands.

We also run into the problem of conflicting shortcuts. There are only so many
possible combinations that are reasonable, given the Twister problem. If we want
to define our own shortcuts, we have to be careful not to conflict with shortcuts
that our operating system or program already define.

Furthermore, the modifier keys are less accessible. The control key is typically
at or near the corner of the keyboard, requiring [ulnar
deviation](https://www.crossfitinvictus.com/blog/simple-solutions-for-poor-wrist-mobility/)
to press.

## Hyper Key Tree Advantages

The sequence of keys is the critical aspect of the hyper key tree. It cares
about order, not combination. This comes with two advantages.

The first is that I only have to type the path to the action. I don't have to
hold down the entire path at once. Once I enter a subtree, I can release the
previous key(s), and the program will keep me at my current node. For example,
to type my email, once I hold down `i`, I can let go of `;`! The program keeps
track of where I am in the tree, so the previous nodes become irrelevant.
Shortcuts become more like normal typing.

The other advantage is that I have infinite depth to work with because I can
repeat keys in a sequence, something that isn't possible with standard key
combinations. For example, I can have an action that is triggered by `; -> i
-> e -> i`.

I could even have every key work as a root node. But I didn't do this because
there are enough cases where I want to hold down a key that I think it'd be more
annoying than it's worth. For example, video games might require me to hold down
certain keys.

## Experience

The hyper key tree was an experiment to start, but I've been happily using it
for the past few years. I was concerned it would be hard to remember the
sequences, but that concern is true for standard shortcuts as well. In practice,
muscle memory took over quickly, and I stopped having to actively think to
execute my shortcuts.

I use my tree to switch between programs, manage windows, type text, and
simulate arrow keys (i.e. `; -> h,j,k,l` replaces left, down, up, and right).
And with the power that comes with Hammerspoon, there are many more things that I
could create shortcuts for.

I also separated logic from data. Hammerspoon powers the program, but I
configure the tree itself through a JSON file that I sync across machines with
Google Drive.

## Future Improvements

After implementing the tree itself, I built in a
[keylogger](https://en.wikipedia.org/wiki/Keystroke_logging). So the program
saves my keystrokes to a text file, and I plan to analyze this file to get
data-driven ideas for future shortcuts.

I would also like to set up a system to alert me when I type or do something
without using a corresponding shortcut. This would train me to consistently use
all my shortcuts.
