---
layout: ../../layouts/BlogPostLayout.astro
categories:
  - programming
date: "2023-05-23"
draft: true
tags:
  - codereview
title: My Approach to Code Review
---

One of my teammates asked me what my approach to [code
review](https://en.wikipedia.org/wiki/Code_review) is. This is my philosophy.

## Prioritization

I try to prioritize code reviews to unblock others as quickly as possible.

Waiting around for a code review isn't fun. See [this
tweet](https://twitter.com/jlongster/status/1400511441556459523) by James Long.

> One of the biggest cultural shifts in my experience from Mozilla to Stripe is
> code review speed. At Mozilla you'd often wait days and have to hunt down
> people to review PRs.
>
> At Stripe my PR is often reviewed within 10 minutes.
>
> That makes a _huge_ difference for shipping fast

One of the reasons is that for most of the code reviews that I do, the code
review is the last step to getting a change merged so that it can produce value.
All the work before that, such as coming up with the product specification,
deciding on the design, implementing it, writing tests, etc. don't really
produce any value. The faster I can do the review, the faster we can start
getting value from the change. This is also helpful for keeping the author
focused. If you have to wait around for days for a review, youll probably start
working on other things in the meantime and will have to pay the cost of context
switching.

## Automation

Human code review should be a last resort. To the extent that is practical, we
should automate things that might come up in code review. Continuous integration
should catch formatting, lint, and test errors.

## Nitpicks

I note which of my comments are merely nitpicks rather than actual blockers. Not
every suggestion needs to addressed. This gives the author the freedom to choose
whether or not to make the change.

## Approving Despite Questions

Sometimes I'll have questions that could turn into blockers. If I don't have any
blocking comments otherwise, I'll go ahead and approve the pull request, but
I'll say that my approval depends on the answers to my questions. This way, if
the answers are in our favor, the author can answer them and go ahead and merge
without having to wait on me to read and approve.

So the process can go from:

1. The author opens a PR and requests my review
2. I ask questions
3. The author answers and re-requests my review
4. I approve
5. The author merges

To:

1. The author opens a PR and requests my review
2. I ask questions but go ahead and approve with a comment saying that my
   approval is dependent on the answers
3. The author answers the questions and merges

## Defer to the Author

Sometimes I have comments that are bigger than nitpicks, but I don't feel
strongly about them, or there's no clear "right" position, or it's very much a
matter of opinion. In these cases, I'll explain my thinking, but I'll leave it
up to the author. Sometimes, we should bring it up as a team discussion, but in
general, I want to defer to the author since they are the one who is responsible
for the change.

## Not Just Code

I don't think a code review should be limited to just the code. I also look for
succinct but descriptive pull request titles (and commit messages if we're not
squash merging) and tickets and pull request descriptions that have enough
details.

## Purpose

* Catch mistakes
* Find opportunities for improvements
* Learn things
* Share knowledge
* Stay close to the code base as a manager
* Notice patterns

Code review depends on urgency. I'm not always going to do the most thorough
review. I also may lack the knowledge to do a good job.

Try to avoid the mindset of being a gatekeeper.

Read the ticket and try to understand the context.

Ask for additional context. Especially with comments. Consider if they should be
PR comments, inline comments, ticket comments, etc.

Request second opinions as necessary.

## Conclusion
