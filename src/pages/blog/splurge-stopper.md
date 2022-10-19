---
layout: ../../layouts/BlogPostLayout.astro
date: "2018-05-04"
title: Splurge Stopper
---

Amazon recently ran a [developer challenge](https://alexalifehacks.devpost.com)
to build [Alexa skills](https://en.wikipedia.org/wiki/Amazon_Alexa). I only
found out about the challenge a few days before it ended, so I decided to build
something very small in scope.

The theme was life hacks, and one of my personal life hacks for not spending
money on things I don't need or really want is to think about how much money I
could have later if I invest it instead. There are caveats to investing, but
this trick has stopped me from buying things I would have regretted later.
[Exponential growth](https://en.wikipedia.org/wiki/Exponential_growth) is
amazing when it [works in your
favor](https://en.wikipedia.org/wiki/Compound_interest). Small amounts of money
can grow to unintuitively large amounts, if given enough time. Humans [don't
naturally grasp](https://www.youtube.com/watch?v=9znsuCphHUU) the power of
exponential growth, so I always do a [quick mental
calculation](https://en.wikipedia.org/wiki/Rule_of_72).

I turned this trick into an Alexa skill called [Splurge
Stopper](https://amazon.com/gp/product/B07CSRNT9R) (the source code is on
[GitHub](https://github.com/dguo/splurge-stopper)). You ask it why you
shouldn't spend a certain amount of money, and it responds with how much money
you might have in the future if you invest it instead.

> You: Hey Alexa, ask Splurge Stopper why I shouldn't spend 80 dollars on fancy
> socks.
>
> Alexa: Because if you invest it instead, you might have about 143 dollars in
> 10 years, 257 dollars in 20 years, 459 dollars in 30 years, or 823 dollars in
> 40 years.

It assumes an inflation-adjusted, annualized return rate of 6 percent. The
historical rate for the [S&P
500](https://en.wikipedia.org/wiki/S%26P_500_Index) is [between 6 and 7
percent](http://moneychimp.com/features/market_cagr.htm). Because the rate is
adjusted for inflation, the amounts reflect current day [purchasing
power](https://en.wikipedia.org/wiki/Purchasing_power).

## Caveats

1. [Past performance is no guarantee of future
   results](https://www.thebalance.com/past-performance-is-no-guarantee-of-future-results-357862).
   Losing money is a risk.

2. You have to actually invest the money that you don't spend. It's not enough
   to just not make the purchase.

3. You have to hold for the long term. The point of listing the amounts for
   multiple time periods is to show just how effective exponential growth can be
   when it has enough time to really take off.

## What I Learned

This was my first time working with Alexa or any voice control platform, so I
learned the basic concepts as I read the [Alexa Skills Kit
documentation](https://developer.amazon.com/docs/ask-overviews/build-skills-with-the-alexa-skills-kit.html).

This was also my first time working with a
["serverless"](https://en.wikipedia.org/wiki/Serverless_computing) platform.
The Splurge Stopper code runs on [AWS Lambda](https://aws.amazon.com/lambda/).
I used [Node.js](https://nodejs.org/) for the execution environment because
Amazon has a [SDK](https://github.com/alexa/alexa-skills-kit-sdk-for-nodejs)
for it.

Parsing the money amount was the hardest part because as of now, there is no
built-in slot type for money, which was really surprising. I found an [open
issue](https://alexa.uservoice.com/forums/906892-alexa-skills-developer-voice-and-vote/suggestions/32402266-money-type)
to add a money type. As a workaround for now, I followed this [Stack Overflow
answer](https://stackoverflow.com/a/42278120/1481479) and used two slots: one
for dollars and one for cents. I had to use many more utterances to account for
various combinations of dollars and cents.

I read about [Speech Synthesis Markup
Language](https://en.wikipedia.org/wiki/Speech_Synthesis_Markup_Language) for
the first time. It allows you to control how text is converted into artificial
speech, so you can make it sound more natural. For example, you can surround a
certain phrase with emphasis tags (e.g. `<emphasis>awesome</emphasis>`), and
the voice will stress the phrase. I didn't end up using SSML, but it seems like
it'd be very useful for a more involved skill.
