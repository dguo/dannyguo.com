---
categories:
  - performance
date:
draft: true
tags:
  - overheating
title: Fixing MacBook Pro Thermal Performance Issues
---

Over the past several months, my 2018 15" MacBook Pro developed thermal
performance issues. Here's what I did to fix the problem. The two key changes
were that I switched to using the right side Thunderbolt 3 ports instead of the
left side ones, and I cleaned the dust buildup in the internal fans.

## The Problem

The problem first started when I noticed my CPU usage spiking to near 100%.
Looking at the process list, I saw "kernel_task" taking up most of the CPU.

I [learned](https://support.apple.com/en-us/HT207359) that macOS does this
intentionally to prevent the CPU from overheating.

> One of the functions of kernel_task is to help manage CPU temperature by
> making the CPU less available to processes that are using it intensely. In
> other words, kernel_task responds to conditions that cause your CPU to become
> too hot, even if your Mac doesn't feel hot to you. It does not itself cause
> those conditions. When the CPU temperature decreases, kernel_task
> automatically reduces its activity.

## Fan Speed

For many years, I've used
[smcFanControl](https://github.com/hholtmann/smcFanControl) to manually
increase my fan speed because I don't mind fan noise, especially if it means
getting better performance out of my laptop or being able to comfortably put it
on my lap.

However, it stopped working reliably after a macOS update. So I purchased
[iStat Menus](https://bjango.com/mac/istatmenus/), which comes with a well
supported fan control feature. Note that you have to buy it from their own
website to get fan control. The Mac App Store version [doesn't include that
particular feature](https://bjango.com/help/istatmenus6/macappstore/) for some
reason.

I turned the fans up to max regularly, but the kernel task issue still kept
popping up frequently.

## Thunderbolt Ports

With some further searching, I found [this excellent StackExchange
answer](https://apple.stackexchange.com/a/363933/275342) that recommended using
the right Thunderbolt 3 ports instead of the left ones. Apparently the ports
aren't equal.

I use a Thunderbolt dock that handles power and all my accessories, including
monitors. I switched it over to the right port and saw an immediate difference
in temperature. iStat Menus reports the temperatures from various sensors.

{insert screenshot}

I could see that using the left port caused the CPU temperature to go up much
higher than using the right port.

For a few months, this was enough to resolve the issue.

## Resolution Scaling

Then the problem started happening again. I also experienced issues playing
[Tabletop Simulator](https://en.wikipedia.org/wiki/Tabletop_Simulator),
[Counter-Strike](https://en.wikipedia.org/wiki/Counter-Strike:_Global_Offensive),
and [Valorant](https://en.wikipedia.org/wiki/Valorant) (on Windows through Boot
Camp), all games that my MacBook should be able to handle without any problems.
It would slow to a crawl even after I turned the resolution and graphical
settings way down.

I thought it might have something to do with my monitor setup. In my typical
desk setup, I have two external monitors that I run at a scaled resolution.

{insert screenshot}

The problem is that macOS achieves this resolution by rendering the resolution
doubled and then cutting it in half. So my laptop was essentially powering two
5K monitors.

[a](https://github.com/kovidgoyal/kitty/issues/1043)
[b](https://forums.macrumors.com/threads/4k-monitor-at-1440p-scaling-performance.2232164/)

## Dust

This entire time, I thought that the problem was my MacBook producing too much
heat. Beyond making the fans run at max more often, I never considered that the
problem could be that it stopped being able to shed heat. Then I saw [this
article](https://quanticdev.com/articles/cleaning-macbook-after-16800-hours-of-use/).
I was initially skeptical that clogged fans were my problem because my MacBook
is less than two years old. But the more I thought about it, the more it made
sense.

I followed [this iFixit
guide](https://www.ifixit.com/Guide/MacBook+Pro+15-Inch+Touch+Bar+2018+Lower+Case+Replacement/121426).

I learned that by default, macOS turns on the MacBook when you press any button
(not just the power button) or just open the lid. This was very surprising. When
it first happened, I thought there was something wrong with my laptop.

So you have to run this in a terminal to turn off boot on lid open.

```sh
sudo nvram AutoBoot=%00
```

To turn it back on later, run this. Though I just left mine off after I was
done.

```sh
sudo nvram AutoBoot=%03
```

Annoyingly, Apple uses pentalobe screws.

{insert screenshot}

I've opened older MacBooks before to
remove [swollen batteries](https://www.reddit.com/r/spicypillows), so I have an
electronics screwdriver set.

I removed the screws and then learned that Apple has made the bottom even harder
to open because now you basically need a suction cup to get it open. I used the
suction cup for my car cell phone holder.

{insert screenshot}

You have to use the suction lift to lift and make a small opening to then slide
in something to release an internal latch. I used a library card.

Once I got it open, it was obvious that dust was indeed the source of my
performance issues. Just taking the bottom off caused a cloud of dust to come
out. There was dust and even my cat's hair throughout. Both fans were totally
gunked up with dust.

{insert screenshots}

I used compressed air to blow it out. I also used a toothpick to get some off
the fans that wouldn't come off from blowing alone.

{insert screenshots}

I put the cover back on and haven't had performance issues since. The next time
I played Valorant, I was getting stable 100+ FPS without any settings changes
from the time I played before cleaning it.

## Retrospective

It'd be nice if macOS could provide some actionable advice when kernel task is
trying to stop the laptop from overheating. Suggesting to use the right
Thunderbolt port would be appreciated. Though I doubt Apple would do that
because it would suggest some sort of hardware issue.

I never thought to consider that my laptop fans could get require internal
maintenance. In retrospect, that's foolish because I've seen how dirty it can
get in desktop PCs, and I know that heat is an inhibitor to computer
performance. It's just like running when it's very humid. Your body starts
shutting down because it's main mechanism for getting rid of heat (sweating)
stops working.

I've set up a recurring task for myself to clean my computers once a year.
