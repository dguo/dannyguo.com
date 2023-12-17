---
layout: ../../layouts/BlogPostLayout.astro
categories:
  - management
date: "2023-12-17"
unlisted: true
tags:
title: Software Engineering Manager Tactics
---

[One of my friends](https://azeemba.com/) once observed that as a manager, you
sometimes just have to tell yourself that you are in fact adding value, even if
it's not obvious. As a software engineer, your output tends to be fairly
straightforward. You might implement a feature or fix a bug. The feedback loop
of doing something and then getting the results can be quite short. That's one
of the aspects of programming that appealed to me in the first place. Write
some code, compile it, run it, see what happens, repeat. Even if I had a silly
syntax error, I'd find out quickly, fix it, and get my hit of dopamine from
getting something to work.

As a manager, those cycles can become much longer, and sometimes, you never get
definitive feedback at all. I don't mean that it's impossible to judge how a
manager is doing. We can look at the team's output, get feedback from the team,
think about the manager's attrition rates, etc. And sometimes you do know for
sure when you did something good. Like when someone comes to you with a problem,
and you immediately help them solve it.

But there are also moments where you can't *really* be sure about your effect on
the team. Maybe you routinely share information with the team in an effort to be
transparent. Do they appreciate it? Do they ever actually do anything
differently because they have that information? Is it causing anxiety? How many
of your messages are they even reading in the first place? These questions can
be hard to answer, even if you directly ask for feedback.

Nevertheless, I'm a tinkerer by nature. In both my personal life and my job, I
like to experiment with how to do things better (though what counts as "better"
depends on context). Here are some of the tactics that I've used as a manager to
hopefully better serve my team. I've accumulated and remixed them from books,
blog posts, Reddit and Hacker News threads, and other managers.

## 1-on-1s

I do weekly 1-on-1s with each person on my team, and each meeting is scheduled
for an hour. It seems like half an hour is more the norm. But I do an hour
because the 1-on-1s are my most important meetings, and I want us to have
adequate time in case we discuss something in depth. This doesn't mean that
every 1-on-1 actually takes a full hour! As soon as we are out of things to
discuss, we end the meeting. I just want to make sure time is blocked out on the
calendar if we need it. Some of my 1-on-1s have taken 10 minutes. Others have
run over the hour and kept going. Both situations are fine with me.

I always start with the other person's topics. Once we're done with those, we'll
discuss whatever topics I have. That's because what they want to discuss is more
important than what I want to discuss. They frequently bring up what was on my
list anyway.

I also make sure that my team has recurring skip level 1-on-1s with my
manager. In particular, this gives them a venue to more freely complain about
me, which is good.

Lastly, I keep a shared document with each person. I use these documents mainly
for 1-on-1 notes, which I am responsible for adding. I don't know how often my
team uses them, but I reference them occasionally, and it makes it clear if I've
dropped the ball on something that I agreed was my responsibility.

## Brag Documents

Inside those shared documents, I ask my team to maintain brag documents. [Julia
Evans](https://jvns.ca/) has a [fantastic
post](https://jvns.ca/blog/brag-documents/) on this topic. They are particularly
useful when it comes time for performance evaluations and promotions. I want my
team to tell me about things they have done that I might not even be aware of.
Especially because there are so many ways to have positive impact outside of
projects. If someone on my team took a couple of hours to help someone else
learn something, I want to know about it. I also hope that filling out the brag
documents encourages some good self-reflection.

## Anniversaries and Reminders

I put team member anniversaries on my calendar just so that I can acknowledge
them as they happen. I keep track of birthdays as well but only because my
company gives everyone a day off for their birthdays, so I want to remind my
team to actually use them.

More generally, I try to serve as a memory tool for my team. I'll remind them
about random things like open enrollment deadlines and upcoming code freezes.

## Information Routing

Giving reminders is related to something that I constantly worry about, which is
whether or not I am effectively routing information. This is even more important
in a larger organization. Whenever I learn something new, I try to think about
who should else know it. Does the info need to go to a particular person or
team? Which Slack channel is most appropriate? Should I bring it up in 1-on-1s
instead of Slack? Even if I believe someone should know something, is it okay
for them to hear it from me instead of someone else (i.e. their own manager)? I
ask myself these questions throughout the day.

## Communication

When it comes to sharing information, I try to err on the side of oversharing
rather than undersharing. I want my team to feel like they know what is going
on, and I trust them to tell me if they're getting too much information or if
it's distracting.

A lot of my communication occurs through 1-on-1s, but I also do batched,
asynchronous Slack messages in a private channel with my team. I'll share things
that I've heard, the reminders that I mentioned, documents that I think are
worth reading, etc. So an example is something like:

> 1. Reminder that the code freeze starts on Wednesday.
> 2. Check out these instructions for getting access to GitHub Copilot.
> 3. Check out this doc from another team for the technical plan for a project
>    that might involve us.
> 4. I heard that we're going to stop using "insert random tool" soon.

I batch them up, and I try to only send one a day at most to avoid distracting
the team with unnecessary pings.

And I use numbers so that people can easily address particular points.

## Individual Contributor Work

I occasionally pick up some individual contributor work. Partly because I do
love programming and the satisfaction that comes with directly delivering value.
But more importantly, I want my team to feel like I'm okay with getting in the
trenches with them. It also allows me to retain some idea of what their day to
day work is like.

When I first started being a manager, I continued to do a fair amount of
programming projects. This was at a startup. Over time, and especially after a
larger company acquired us, I started doing less of that to focus more on the
managerial side of things. Now I have some criteria for picking up individual
contributor work.

It should be unglamorous. The exciting, highly visible projects should go to my
team members. If I get any credit, it should only be in supporting them.

It should be important but not urgent. I'm not on a [maker's
schedule](http://www.paulgraham.com/makersschedule.html), and my schedule is too
unpredictable to commit to anything that needs to be delivered by a certain
time. But it should be important in some way because we should still be
prioritizing work.

It shouldn't be a good learning opportunity for someone else. For example, we
might
have a deprecated system that is going away soon, but we need to tweak it first.
I might pick that up because there's no point in someone else learning about the
system.

It shouldn't be something that someone else wants to do. If a team member wants
to pick up a project or task, their preference should take priority over
whatever interest I might have.

These are the factors that I think about when I discuss my own assignments with
my team's product manager.

## Batching Meetings

I am a big fan of [batching
meetings](https://knowtworthy.medium.com/batching-your-meetings-saves-you-hours-every-week-heres-how-3798da6ccb02),
which basically means scheduling meetings so that they are as contiguous as
possible. Which gives you longer blocks of time to do focused work. I try to
batch my own meetings as well as my team's meetings if I control them.

## Responsiveness

On the topic of focused work, I do not expect or want my team to be responsive
100% of the time. I know that their work requires time to focus. I have no
problem with them blocking out time to get things done, and I've suggested to
some of them that they turn off Slack notification sometimes.

But *I* should be responsive. If they need an answer from me or my approval for
something, I want to unblock them as quickly as possible. So I frequently
monitor my email and Slack. I use [Google Apps
Script](https://www.google.com/script/start/) to triage my email and make sure
that I see the most important emails, like my team's requests, first.

## Knowledge Sharing

## Coaching

## Thinking Like a Product Manager

## Thinking Like a Therapist

## Resist the Urge to Tell People What To Do

## Be Real
