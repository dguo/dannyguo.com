---
layout: ../../layouts/BlogPostLayout.astro
categories:
  - programming
date: "2022-06-05"
draft: true
tags:
  - github
  - collaboration
title: My Checklist for Opening a Pull Request
---

Before I request a code review for one of my pull requests (or merge requests,
if you're in GitLab), I try to follow a personal checklist.

As the person opening the pull request, my (sometimes conflicting) goals are:

* Get the change out as quickly as possible
* Make the change as good as is reasonable, based on the context
* Learn new things

## Self-review

I read through the changes and try to put myself in the perspective of the
reviewer. This is helpful for catching obvious things that aren't already
covered by continuous integration, like typos. It's also a good way to
anticipate what a reviewer might ask or point out. This gives me a chance to
address it before the reviewer gets to it. This can cut out entire review cycles
and save everyone time and focus.

## Add Comments

I want to make sure that the pull request has as much context as possible to
make the reviewer's job easy. Sometimes I add context to a linked ticket (think
Jira, Linear, Shortcut, etc.). Sometimes I add it to the pull request
description. Sometimes I add it as a pull request comment. Sometimes I add it as
a comment within the diff. And sometimes I add it to the actual files that I'm
changing.

## Git History

I review my pull request title and make sure it's descriptive and succinct.

If I plan to rebase and merge, I'll edit the commits to make sure each one is
clean. If I plan to squash and merge, I won't bother with that and will only
make sure the final commit description is clean.

## Break It Up

I'll occasionally sneak in an unrelated change, but in general, I try to break
up my pull requests so that they each do one logical thing. This makes each one
small and easy to review. Sometimes, it's not feasible to break up a change. It
does also increase the number of review cycles since there are more pull
requests. And it means that it can be a little harder to develop if I need to
juggle multiple git branches. But in my experience, these disadvantages are
usually outweighed by having changes that are easier to review.

## Responding to Comments

I try to keep my responses within the pull request itself, rather than taking it
offline. If I do take it offline, I'll add the pertinent details of that
conversation back to the pull request.

I try to keep my ego in check and not take comments personally.
