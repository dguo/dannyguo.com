---
layout: ../../layouts/BlogPostLayout.astro
categories:
  - productivity
date:
draft: true
tags:
  - hammerspoon
title: Building a Data-Driven Hyper Key Tree
---

One of my favorite efficiency hacks is to remap my caps lock key to function as
escape when tapped and control when held down.

## Prior Art

I eventually learned about the concept of a hyper key, which is to create a
personal modifier key.

We commonly use shift, control, alt, option, command, and the Windows key.

To create shortcuts for functionality, we can combine modifiers with each other.

However, this means that we can end up with unwiedly combinations that require
us to contort our fingers. It's like we're playing Twister with our hands.

Even for the standard control key, it's typically in the corner of the keyboard,
requiring you to ulnarlly deviate your wrist to hit it.

## Hyper Key Tree

I was playing around with Hammerspoon. It lets you automate macOS with Lua.

I realized that I can use ; as a hyper key. There's never a case where I want to
hold it down.

However, I'm still disatisfied by the fact that there are only so many other
keys on the keyboard. I don't want to be restrainted by the number of keys.

One option would be to implement combinations once I'm in hyper mode. But that
still requires finger contortions that get progressively harder.

### Mechanics

My solution was to have each key act as a node in a tree. When I tap, I activate
a configured action. When I hold it down, I descend into that key's tree.

### Advantages

There are several benefits to this approach.

The first is that semi-colon is on the home row, and I don't have to move any of
my fingers to start it. Even caps lock requires the left pinky to ove.

The other is that order is what is important now, not combination. I only have
to type the path to the action, but I don't have to hold down the entire path at
once. Once I enter a subtree, I can release the previous key(s), and Hammerspoon
will keep me at my current node.

This also means that I have infinite depth to work with because I can repeat
keys, something that isn't possible with traditional key combinations. For
example, I can have a shortcut that is triggered by ; > i > e > i.

If you really wanted to, you could even have every key work as the top of the
tree. I didn't do this because there are enough cases where I want to hold down
a key that I think it'd be more annoying than it's worth. For example, video
games requiring me to hold down certain keys.

### Disadvantages

## Implementation

I didn't know if Hammerspoon would be enough, but I had prior experience from
using it to handle my caps lock hack. I used to use Karabiner Elements but was
able to drop it and just use Hammerspoon.

## Key Logger

## Analysis

## Future Improvements

I can get collect stats on how many keystrokes I've saved.

I can set up a system to alert me when I type something instead of using the
corresponding shortcut.
