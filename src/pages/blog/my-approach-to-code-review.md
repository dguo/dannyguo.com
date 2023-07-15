---
layout: ../../layouts/BlogPostLayout.astro
categories:
  - programming
date: "2023-07-04"
unlisted: true
tags:
  - code-review
title: My Approach to Code Review
---

[One of my teammates](https://twitter.com/pete_millspaugh) asked me about my
approach to [code review](https://en.wikipedia.org/wiki/Code_review), as a
reviewer. The following is my philosophy, which includes many tips and points
that I have observed or learned from other people in the last decade.

## Automation

Manual code review shouldn't be our first line of defense. Time is one of our
most valuable resouces, so to the extent that it is practical, we should try to
automate anything that might come up in code review. [Continuous
integration](https://en.wikipedia.org/wiki/Continuous_integration) should catch
things like [formatting](https://github.com/rishirdua/awesome-code-formatters),
[lint](https://en.wikipedia.org/wiki/Lint_(software)), and test errors, allowing
the author to fix issues before requesting a review.

And we aren't limited by what our tools provide out of the box. We can always
write an ad-hoc script or shell command that verifies something.

I'm interested to see how [generative
AI](https://en.wikipedia.org/wiki/Generative_artificial_intelligence) will
affect this aspect of programming. I've seen human-based code review services
before, like [Codementor](https://www.codementor.io/code-review) and
[PullRequest](https://www.pullrequest.com/), but tools like
[Metabob](https://metabob.com/) seem poised to push the boundaries of what we
can expect from automated code review, though we need to be mindful of pitfalls
like the possibility of
[hallucinations](https://en.wikipedia.org/wiki/Hallucination_(artificial_intelligence)).

## Manual Code Review

It's also worth keeping in mind that we pay a cost by doing code reviews, in
terms of engineering time and increasing how long it can ship something to
production. I think most teams have a net benefit from doing them, but consider
that [Raycast doesn't require code
reviews](https://www.raycast.com/blog/no-code-reviews-by-default). They leave it
up to the author whether to request a review. I can imagine how that could work
well under the right circumstances. Another approach would be to do [pair
programming](https://en.wikipedia.org/wiki/Pair_programming) and consider that
to be a replacement for code review. Code review is a best practice, but that
doesn't mean it's *always* good or necessary.

## Prioritization

Once someone (or a process) has requested my review, I try to prioritize it
because I want to unblock others as quickly as possible. I've used [Google Apps
Script](https://www.google.com/script/start/) to triage my email (in Gmail), and
I've always configured it to treat code review requests as emails I should see
immediately.

I like to peek at the pull request (PR) immediately. If I think I can
review it in a few minutes, I'll try to knock it out in the moment, channeling
[David Allen's two-minute
rule](https://gettingthingsdone.com/2020/05/the-two-minute-rule-2/). Ideally, I
can approve it without much thought and let the author merge it without waiting
around. These PRs are usually small and easily understandable.

If I think the review will take longer, I'll prioritize it against my existing
queue of work, but I'll still try to take care of it quickly. If I think it'll
take longer than a day, I'll comment or message the author that I'm aware of the
review request, but I need more time for it. So that the author knows the
request hasn't gone into a black hole.

Code review turnaround time is important to me for two main reasons. The first
is that I know from personal experience that waiting around for a code review
isn't fun. It can force an expensive context switch to another task or project.
And it impacts the overall feeling and reality of being able to move quickly.
See [this tweet](https://twitter.com/jlongster/status/1400511441556459523) by
[James Long](https://jlongster.com/):

> One of the biggest cultural shifts in my experience from Mozilla to Stripe is
> code review speed. At Mozilla you'd often wait days and have to hunt down
> people to review PRs.
>
> At Stripe my PR is often reviewed within 10 minutes.
>
> That makes a _huge_ difference for shipping fast

The other, related reason is that at a business/organizational level, at least
for most of the code reviews that I do, the review is the last significant
blocker to getting a change merged so that it can produce value for customers,
the organization, etc.

Consider all the possible work leading up to it, such as doing market research,
coming up with the product specification, making the design, implementing the
change, and writing tests. All that work doesn't produce real value until the
change is merged and in production. The faster I can do the review, the faster
we can start reaping value.

## Mindset

Once I start a code review, I adopt the mindset of wanting to get to an
approval. I don't want to be a gatekeeper. The question I ask myself for
approval isn't "is this PR perfect?" Instead, it's "are we better off merging
this PR than not?" With that said, what benefits do we get from doing code
reviews?

The most obvious one is that code review gives us a chance to catch issues, such
as bugs, race conditions, security vulnerabilities, and potential performance
issues. As a reviewer, I can provide a different perspective than we get from
writing the code in the first place.

Similarly, I can suggest opportunities for improvement. Maybe there's repetition
that we can reduce, or a function could have a clearer name, or there's an edge
case that we should cover with a test.

These are the direct benefits, but there are ancillary ones as well.

## Share Knowledge

Code reviewer gives the reviewer a chance to share knowledge with the author.
For some issues and opportunities for improvement, the author may be able to
come up with them on their own, especially if they take a second look at the
code. But they may not know about somethng in the first place. For example, the
author may introduce a [SQL
injection](https://en.wikipedia.org/wiki/SQL_injection) vulnerability and not
even know what SQL injection is. So the reviewer can teach the author a new
concept through code review.

This is especially the case when a senior engineer reviews code that a more
junior engineer writes. But sharing knowledge goes both ways, regardless of any
experience gap. Reviewing code can also teach the reviewer something. I have
learned plenty of things from reviewing code.

## Stay Close to the Code

For engineering managers, code review can be a way to stay close to the code.
Some engineers [write little if any
code](https://leaddev.com/skills-new-managers/should-engineering-managers-write-code)
after switching to management. Over time, this can cause them to fall out of
touch with how things really work. Code review is one way to mitigate that.

## Notice Patterns

Over time, a reviewer can notice patterns from doing multiple code reviews.
Perhaps multiple people are making the same mistake or are implementing the same
thing in different places. This gives the reviewer a chance to bring up a
discussion with the team.

## Tactics

So beyond just leaving comments, how do I actually do a code review? I have a
few tips in terms of tactics.

## Understand the Context

Before diving into the code, I try to understand the context for the change.
This can come from a linked ticket, the PR description, a Slack thread, etc. I
don't want to review the code in a vacuum. I'll ask for additional context when
necessary. And even when the context exists, I'll sometimes ask for it to be
persisted in the form of an inline comment in the code rather than as just a PR
comment.

## Consider Emotions

Code review is another form of giving feedback, which isn't always easy. I try
to consider the author's emotions and the fact that nobody delivers their best
possible work 100% of the time. I want to address issues directly, without
suggesting that they reflect something about the author. If I say that a bit of
code is stupid, the author could interpret that to mean that I think *they* are
stupid. Instead, I'll point out the issues with the code using more objective
statements.

On a related note, code review doesn't have to only involve pointing out
negative things. I also like to point out things that are particularly good
about the PR. And I'll tell the author if they've taught me something.

## Nitpicks

I note which of my comments are merely nitpicks rather than actual blockers. Not
every suggestion needs to addressed. This gives the author the freedom to choose
whether or not to make the change.

## Defer to the Author

On a related note, I sometimes have comments that are bigger than nitpicks, but
I don't feel strongly about them, or there's no clear "right" position, and it's
very much a matter of opinion. In these cases, I'll explain my thinking, but
I'll leave it up to the author. Sometimes, we should bring it up as a team
discussion, but in general, I defer to the author since they are the one who is
responsible for the change. I want them to feel like they truly own it.

## Approve Despite Questions

Sometimes I'll have questions that could turn into blockers. If I don't have any
blocking comments otherwise, I'll go ahead and approve the pull request, but
I'll say that my approval depends on the answers to my questions. This way, if
the answers are in our favor, the author can answer them but also merge without
having to wait on me to read the answers and approve.

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
4. I can read the answers asynchronously

Which effectively removes an entire review cycle.

## Second Opinions

I request second opinions as necessary. I may not be familiar enough with the
code or technology to do a good enough job on my own. Sometimes I'll ask for
another complete review. Other times, I'll ask a specific question to the other
person.

## Consider More Than Just Code

I don't think a code review should be limited to just the code. I also look for
succinct but descriptive pull request titles (and commit messages if we're not
squash merging). And I'll comment if linked tickets and pull request
descriptions have an appropriate level of detail.

## Suggest Addressing in a Follow up PR

Some changes require more than one PR. If you know there is going to be at least
one more PR that is related to the one you are reviewing, consider suggesting
that the author address an issue in a follow up PR, allowing them to merge the
current PR immediately.

## Consider Urgency

Code review depends on the urgency of the change. I'm not always going to do the
most thorough review possible. If something needs to go out quickly, especially
in an emergency, I may just glance through the code. I may even just give a
rubber stamp and then do a more thorough review after the code is merged.

## Loosen Standards

Similar to urgency, also consider how important the code is. For example, if I'm
reviewing a one-off script that we don't expect have to run in the future or to
have to maintain, I loosen my standards.

## Conclusion

Code review goes deeper than just checking a pull request for mistakes. It's an
important aspect of doing software engineering as a team and is one of the ways
that learning computer science in school can be different from "real world"
programming. Code review is another skill, another thing that we can try to
improve at for the benefit of ourselves and our teams.
