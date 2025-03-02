---
layout: ../../layouts/BlogPostLayout.astro
categories:
  - programming
date: "2025-03-01"
unlisted: true
title: The Joy of Hackathons
---

I love [hackathons](https://en.wikipedia.org/wiki/Hackathon). They remind me of
the pure joy that can come from programming, from making something
[fun](https://www.jollycode.org/) or [interesting](https://neal.fun/) or useful
just by typing the right incantation of code. Or these days, by giving the right
prompt to a [LLM](https://en.wikipedia.org/wiki/Large_language_model).

When programming for a job, it can be easy to lose some of that joy. Real world
software engineering involves so much more than the core act of creating
something that sort of works. But most hackathons are all about that spirit.

## Freedom and Constraints

The magic of hackathons comes from two seemingly contradictory factors: freedom and
constraints.

The freedom comes from being able to decide what you want to work on and how you
want to do it. For once, you aren't limited to the projects that your company
deems important. You don't have to particularly care about business priorities
unless you want to. Even at a technological level, you are hopefully free to use
things that aren't officially supported. You can experiment. You can make a
proof of concept for something that you know is a good idea. You can challenge
how things are typically done.

But hackathons are also about constraints. The main one is time. Online
hackathons can ran for a while, but most in-person ones limit you to a few days
at most. This limits the scope of what you can do, which forces you to focus and
act quickly.

Hackathons can also have themes. And they might revolve around a few
technologies or concepts. For example, the annual
[Js13kGames](https://js13kgames.com/) competition is a challenge to create the
best web game that fits in a 13 kilobyte ZIP, and each year has a different
theme. This can help you come up with a good idea, since your brain doesn't have
to start from an overwhelmingly infinite set of possibilities.

Combining freedom with constraints in this way means that you have agency but
are also forced by circumstance to actually create something instead of choosing
the default path of not doing anything because the challenge seems too big.

## Benefits

Why participate in a hackathon? It can certainly be a lot of work. I've pulled
almost all-nighters for some hackathons. And a cynical take is that company
hackathons are just a way for companies to get employees to do a bunch of extra
work.

But hackathons are fun! I love working on something that I know can't drag on
for months and can't get interrupted by shifting business priorities.

Hackathons are also a great way to learn something new and to try out new
technologies in a low-stakes environment. Sure, many hackathons have judging,
awards, and prizes. But besides a bit of time, you don't really have anything to
lose by participating.

There's also always the chance that your hackathon proof of concept does become
something bigger. Maybe it becomes a widely used tool, feature, or product.
Maybe you can start a company with it. Or maybe you'll just get the satisfaction
of making something cool.

I was drawn to programming because of the short feedback loops of writing some
code and quickly getting a result. Hackathons are a version of that. You come up
with an idea, try to turn it into reality, and almost immediately see how it
turns out and how others react to it.

## Advice

For those who are convinced that hackathons are worth trying, I have a few tips:

If you don't know of any hackathons to participate in, try looking on [Devpost](https://devpost.com/) or
[Major League Hacking](https://mlh.io/).

Keep teams small. You want to bias towards speed, and working with too many
people on a hackathon project introduces too much communication and coordination
overhead.

Forget many best practices. Your goal is to make something that sort of works.
For once, you can be wholly justified in not writing any tests, not caring about
documentation, writing ugly code, ignoring scalibility or security issues, etc.
The only thing that usually matters is the end result and how well you can
present it. This is also part of what makes hackathons fun! You have good reason
to loosen your standards and create something as fast as you can.

## My Experiences

Here's a log of my own hackathon experiences.

### HackPrinceton in 2012

My first hackathon was [HackPrinceton](https://www.hackprinceton.com/) in 2012.
I was a senior in college, and I created [my GitHub
account](https://github.com/dguo) because of this hackathon. I made a movie
recommendation website called [MovieSeer](https://github.com/dguo/movieseer).
The [code makes me cringe
now](https://www.dannyguo.com/blog/a-code-review-of-my-earliest-projects#movieseer),
but it was still fun to create something from scratch.

I'll never forget it because at the end of the hackathon, I confidently
volunteered to present first. I did a live demo, and the website hung for what
felt like an eternity after I pressed the button to generate recommendations.
When they finally showed up, people politely applauded, but that was my first
lesson in the [perils of live
demos](https://www.youtube.com/watch?v=znxQOPFg2mo). I'll always have sympathy
when things go wrong in other people's demos, since it reminds me of the
pounding in my heart when an entire auditorium of people was just waiting for my
website to do something.

My project actually won an award for best use of
[MongoDB](https://en.wikipedia.org/wiki/MongoDB), which came with a $500 check
from MongoDB. Which was hilarious to me not only because of my presentation
issue but also because there was nothing about my project that actually
benefited from a [document
database](https://en.wikipedia.org/wiki/Document-oriented_database). I could
have used [SQLite](https://en.wikipedia.org/wiki/SQLite) or
[Postgres](https://www.postgresql.org/), and there would have been no practical
difference. I only used MongoDB because of the potential prize. But in
retrospect, that was the point of MongoDB sponsoring the prize.

This hackathon also reminded me of the value of a good presentation. The crowd
favorite was some beer-related mobile app. I don't even remember what the app
did. Something to do with keeping track of how many drinks you've had. But the
creator was by far the best presenter, getting the audience to laugh and really
pay attention. It's not enough to just make something interesting. It's also
important to be able to talk about it or show it in a way that engages others.

### HackPrinceton in 2013

In 2013, I went back to HackPrinceton because my company,
[Bloomberg](https://en.wikipedia.org/wiki/Bloomberg_L.P.), was a sponsor. I have
three strong memories from it.

The first is one of the best things I've ever seen in any hackathon: [Piano
Stairs](https://www.instructables.com/Piano-Stairs-with-Arduino-and-Raspberry-Pi/).
This was a hardware hack that used light-based sensors to turn a staircase into
a working piano! The creators used a staircase in the middle of the hackathon
building, so it was impossible to miss, and everyone loved it.

The second is [What Would I
Say](https://thisisimportant.net/posts/what-would-i-say/), which used [Markov
chains](https://en.wikipedia.org/wiki/Markov_chain) to generate semi-sensical
Facebook posts based on your past posts and went viral.

Lastly, I remember there being an award for "Best Fail" because the reward was
an entire Bitcoin, worth maybe a couple hundred dollars then. I hope the team
held on to it!

### Bloomberg

Bloomberg held its own hackathon a few years later. I worked with a friend on a
UI transpiler. For context, the [Bloomberg
Terminal](https://en.wikipedia.org/wiki/Bloomberg_Terminal) is a desktop
application that is [rendered using server-side
JavaScript](https://news.ycombinator.com/item?id=21821327) ([this conference
talk](https://www.youtube.com/watch?v=ODgs0eWAIKc) also provides some details).

My team made a proof of concept for a program that would take that code and
convert it into an equivalent [React](https://react.dev/) application with the
goal of making it possible to run the Terminal (or at least a subset of it) in a
browser. It was an admittedly simple example, but it worked!

It didn't go anywhere after the hackathon, but people reached out saying they
thought it was cool. The ego boost was worth staying up almost all night to
finish it.

### MoMath

In 2018, some friends and I attended a hackathon at the [National Museum of
Mathematics](https://momath.org/) in NYC. We made a project called Vortex Pool
that I [wrote about
here](https://www.dannyguo.com/blog/momath-hackathon-2018-vortex-pool).

### Firefox Quantum Extensions Challenge

Later in 2018, Firefox had a hackathon, and I made a few extensions for the
"Best Dynamic Theme" category, which used the [theme WebExtensions
API](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/theme).
I also wrote about [that
experience](https://www.dannyguo.com/blog/building-dynamic-firefox-themes/).

### SeedFi

In 2020, the startup that I worked at, SeedFi, had a hackathon. I started it by
fixing a slew of small issues that we already knew about, such as a set of icons
not being the same size in Firefox. I also remember fixing an issue where iPhone
users were limited to integers for number inputs as of iOS 13.

Then I added
[TOTP](https://en.wikipedia.org/wiki/Time-based_one-time_password)-based 2FA.
This never made it to production, but I mainly did it as a learning experience.

I had some time left over, so I also made a proof of concept for a [command
bar](https://maggieappleton.com/command-bar) for our website.

### Karmahack

In 2023, [Intuit acquired
SeedFi](https://www.creditkarma.com/about/releases/intuit-to-acquire-financial-health-startup-seedfi),
and we joined its Credit Karma business. A few weeks after our onboarding,
Credit Karma had its
[Karmahack](https://engineering.creditkarma.com/karmahack-2021-recap-what-makes-a-good-hackathon)
hackathon.

I had no idea how to build anything in the Credit Karma stack/platform at that
point, but I still wanted to participate in some capacity. So I went with making
a browser extension that ran against the [Credit Karma
website](https://www.creditkarma.com/), since that didn't require me to
understand how any of it worked under the hood.

I went with the command bar idea again, but I rebuilt it from scratch and added
some fancy features, like being able to highlight a section of the UI based on
the query. My demo example was someone looking for their checking account
number, and the command bar would both take them to the right page and also
highlight the account number [using
Driver.js](https://driverjs.com/docs/simple-highlight).

I won third place and got this custom medal.

![front of Karmahack medal](https://i.imgur.com/cBi6Bvyl.jpg)

![back of Karmahack medal](https://i.imgur.com/tOiY6Ckl.jpg)
