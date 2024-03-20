---
layout: ../../layouts/BlogPostLayout.astro
categories:
  - programming
date: "2024-03-20"
tags:
  - code-review
title: How I Do Code Review
---

[A coworker](https://twitter.com/pete_millspaugh) asked me about my approach to
[code review](https://en.wikipedia.org/wiki/Code_review), as a reviewer. The
following is my philosophy, which includes many tips and points that I have
observed or learned from other people.

## Automation

Manual code review shouldn't be our first line of defense. Time is one of our
most valuable resouces, so to the extent that it is practical, we should
automate anything that might come up in code review. [Continuous
integration](https://en.wikipedia.org/wiki/Continuous_integration) should catch
things like [formatting](https://github.com/rishirdua/awesome-code-formatters),
[lint](https://en.wikipedia.org/wiki/Lint_(software)), and test errors, allowing
the author to fix issues before requesting a review. And we aren't limited by
what our tools provide out of the box. We can always write an ad-hoc script or
shell command that verifies something.

I'm interested to see how [generative
AI](https://en.wikipedia.org/wiki/Generative_artificial_intelligence) will
affect this aspect of programming. I've seen human-based code review services
before, like [Codementor](https://www.codementor.io/code-review) and
[PullRequest](https://www.pullrequest.com/), but tools like
[Metabob](https://metabob.com/), [CodeRabbit](https://coderabbit.ai/), and
[Bito](https://bito.ai/product/ai-code-review-agent/) might push the boundaries
of what we can expect from automated code review. Though we need to be mindful
of pitfalls like the possibility of
[hallucinations](https://en.wikipedia.org/wiki/Hallucination_(artificial_intelligence)).

## Manual Code Review

It's also worth keeping in mind that we pay a cost by doing code reviews, in
terms of engineering time and increasing how long it can take to ship a change
to production. I think most teams will have a net benefit from doing them, but
consider that [Raycast doesn't require code
reviews](https://www.raycast.com/blog/no-code-reviews-by-default). They leave it
up to the author whether to request a review. I can imagine how that could work
well under the right circumstances. Another approach is to do [pair
programming](https://en.wikipedia.org/wiki/Pair_programming) and consider that
to be a replacement for code review. Code review is a best practice, but that
doesn't mean it's *always* good or necessary.

## Benefits

So why do we do code review? The main reason is that it gives us a chance to
catch problems, such as bugs, missed edge cases, race conditions, security
vulnerabilities, and potential performance issues. Reviewers can provide a
different perspective than we get from writing the code in the first place.

Similarly, reviewers can suggest opportunities for improvement. Maybe we can
reduce reptition, or give a function a clearer name, or increase how many edge
cases we cover with unit tests.

These are the direct benefits, but there are ancillary ones as well.

### Share Knowledge

Code review gives the reviewer a chance to share knowledge with the author. For
some problems and opportunities for improvement, the author may be able to come
up with them on their own, especially if they take a second look at the code.
But they may not know about something in the first place. For example, the
author may introduce a [SQL
injection](https://en.wikipedia.org/wiki/SQL_injection) vulnerability and not
even know what SQL injection is. So the reviewer can teach the author a new
concept through code review.

This is especially the case when a senior engineer reviews code that a more
junior engineer writes. But sharing knowledge goes both ways, regardless of any
experience gap. Reviewing code can also teach the reviewer something. I have
learned plenty of things from doing code review.

### Stay Close to the Code

For engineering managers, code review can be a way to stay close to the code.
Some engineers [write little if any
code](https://leaddev.com/skills-new-managers/should-engineering-managers-write-code)
after switching to management. Over time, this can cause them to fall out of
touch with how things really work. Code review is one way to mitigate that
atrophy.

### Notice Patterns

Over time, a reviewer can notice patterns from doing multiple code reviews.
Perhaps different people are making the same mistake or are implementing the
same thing in different places. This gives the reviewer a chance to have a
productive discussion with the team.

## Tactics

Even though the benefits are almost impossible to quantify, code review usually
feels worthwhile to me. I appreciate receiving thorough reviews, and I try to
make my reviews useful in turn. But how should we approach code review? Beyond
the core act of leaving comments, I have some tactical suggestions.

### Prioritization

Once someone (or an automated process) has requested my review, I try to
prioritize it because I want to unblock others as quickly as possible. I use
[Google Apps Script](https://www.google.com/script/start/) to triage my Gmail
inbox, and I've configured it to treat code review requests as high-priority
emails.

I like to peek at the pull request (PR) or merge request immediately. If I think
I can review it in a few minutes, I'll try to knock it out in the moment,
channeling [David Allen's two-minute
rule](https://gettingthingsdone.com/2020/05/the-two-minute-rule-2/). Ideally, I
can approve it without much thought and let the author merge it without waiting.
These PRs are usually small and easily understandable.

If I think the review will take longer, I'll prioritize it against my existing
queue of work, but I'll still try to take care of it quickly. If I think it'll
take longer than a day, I'll comment or message the author that I'm aware
of the review request, but I need more time for it. So that the author knows the
request hasn't gone into a black hole.

Code review turnaround time is important to me for two main reasons. The first
is that I know from personal experience that waiting for a code review isn't
fun. It can force an expensive context switch to another task or project. And it
impacts the overall feeling and reality of being able to move quickly. See [this
tweet](https://twitter.com/jlongster/status/1400511441556459523) by [James
Long](https://jlongster.com/):

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

Consider all the possible work leading up to releasing a change, such as doing
market research, coming up with the product specification, making the design,
implementing the change, and testing it. All that work doesn't produce real
value until the change is merged and in production. The faster I can do the
review, the faster we can start reaping value.

### Mindset

When I start a code review, I try to have an optimistic mindset of wanting to
get to an approval. My attitude should be to help the author, not to be an
overbearing gatekeeper. While I do want PRs (my own included) to be as good as
they can be, my standard for approval isn't perfection. Instead, the main
question I ask myself is: "are we better off merging this PR than not?"

### Understand the Context

Before diving into the code, I want to understand the context for the change so
that I'm not reviewing in a vacuum. Context can come from a linked ticket, the
PR description, a [Slack](https://slack.com/) thread, etc., and I'll ask for
additional context when necessary. Even when the context is well-documented
already, I'll sometimes ask for the author to make it an inline comment in the
code so that it doesn't get lost for future people.

### Consider Emotions

Code review is another form of giving feedback, which can be hard (I recommend
reading [Radical
Candor](https://www.amazon.com/Radical-Candor-Revised-Kick-Ass-Humanity/dp/1250235375?_encoding=UTF8&qid=&sr=&linkCode=ll1&tag=thdalo00-20&linkId=5eba91267b4ed43d5265f590dd0d637b&language=en_US&ref_=as_li_ss_tl)
for advice on that). I try to consider the author's emotions and the fact that
nobody delivers their best possible work 100% of the time. I want to address
issues directly, without suggesting that they reflect something about the
author. If I say that a bit of code is stupid, the author could interpret that
to mean that I think *they* are stupid. Instead, I'll point out the issues with
the code using language that is as objective as possible.

On a related note, code review doesn't have to only involve pointing out
negative things. I also like to point out things that are particularly good
about the PR. And I'll tell the author if they've taught me something.

### Nitpicks

I note which of my comments are merely nitpicks rather than actual blockers. I
don't expect the author to accept every suggestion. This gives the author the
freedom to choose whether or not to make the change. But by labeling nitpicks, I
don't feel guilty about bringing up things that are relatively trivial.

### Defer to the Author

Similarly, I sometimes have comments that are bigger than nitpicks, but I don't
feel that strongly about them, or there's no clear "right" position, and it's
very much a matter of opinion. In these cases, I'll explain my thinking, but
I'll leave it up to the author. Sometimes the issue warrants a team discussion.
But in general, I defer to the author since they are the one who is responsible
for the change. I want them to feel like they truly own it.

### Approve Despite Questions

Sometimes I'll have questions that could turn into blockers. If I don't have any
blocking comments otherwise, I'll go ahead and approve the pull request, but
I'll say that my approval depends on the answers to my questions. This way, if
the answers are in our favor, the author can answer them but also merge without
having to wait for me to read the answers and approve.

So the process can go from:

1. The author opens a PR and requests my review
2. I ask questions
3. The author answers and re-requests my review
4. I approve
5. The author merges

To:

1. The author opens a PR and requests my review
2. I ask questions but go ahead and approve with a comment explaining how my
   approval is dependent on the answers
3. The author answers the questions and merges
4. I can read the answers asynchronously

Which removes an entire review cycle from the author's perspective.

### Get Second Opinions

I request second opinions as necessary. I may not be familiar enough with the
code or context to do a good enough review on my own. Sometimes I'll ask for
another complete review. Other times, I'll ask a specific question to the other
reviewer.

### Consider More Than Just Code

I don't think a code review should be limited to just the code. I also look for
succinct but descriptive pull request titles (and commit messages if we're not
squash merging). And I'll comment if linked tickets and pull request
descriptions aren't detailed enough.

I also want to consider questions that aren't directly related to what the code
does and the quality of the code. Does the change introduce technical debt
that's going to hurt us in the long term? Are the right people aware of the
change? What is the rollout plan? Did we miss something during the planning
phase that could change our entire approach? And so on.

### Suggest Addressing in a Follow-up PR

Some changes require more than one PR. If you know there is going to be at least
one more PR that is related to the one you are reviewing, consider suggesting
that the author address a particular problem in a follow-up PR, allowing them to
merge the current PR immediately.

### Consider Urgency

Code review depends on the urgency of the change. I'm not always going to do the
most thorough review possible. If something needs to go out quickly, especially
in an emergency, I may just glance through the code. Or I may give a rubber
stamp and then do a more thorough review after the code is merged.

### Loosen Standards

Similar to urgency, also consider how important the code is. Not all code in a
codebase is of equal importance. For example, if I'm reviewing a one-off script
that we don't expect to run again in the future or to have to maintain, I loosen
my standards. Though I will leave a comment acknowledging that judgment call.

## Conclusion

Code review goes deeper than just checking a pull request for mistakes. It's an
important aspect of doing software engineering as a team and is one of the ways
that learning computer science in school can be different from "real world"
programming. Code review is another skill, another thing that we can improve at
to benefit our teams.
