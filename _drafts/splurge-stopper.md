---
layout: post
title: Splurge Stopper
---

Amazon recently ran a [life hacks challenge](https://alexalifehacks.devpost.com) to build
[Alexa skills](https://en.wikipedia.org/wiki/Amazon_Alexa). I only
found out about the challenge a few days before it ended, so I decided to build
something very small in scope.

One of my personal life hacks for not spending money on things I don't need or
really want is to think about how much money I could have later if I invest it
instead. There are definitely caveats to investing, but this trick has stopped
me from buying things I would have regretted later. Exponential growth is
pretty amazing when it works in your favor, so investing small amounts of money
now can turn into large amounts later. But exponential growth isn't a
particularly intuitive concept for humans, so I always have to force myself to
do a mental calculation.

I turned this way of thinking into [Splurge
Stopper](https://amazon.com/gp/product/B07CSRNT9R) (the source code is on
[GitHub](https://github.com/dguo/splurge-stopper)). You ask it why you
shouldn't spend a certain amount of money, and it responds with how much money
you might have in the future if you invest it instead.

> You: Hey Alexa, ask Splurge Stopper why I shouldn't spend 80 dollars on fancy
> socks.

> Alexa: Because if you invest it instead, you might have about 143 dollars in
> 10 years, 257 dollars in 20 years, 459 dollars in 30 years, or 823 dollars in
> 40 years.

It assumes an inflation-adjusted annualized return rate of 6 percent. The
historical rate for the S&P 500 is [between 6 and 7
percent](http://moneychimp.com/features/market_cagr.htm).

## Caveats
1. [Past performance is no guarantee of future
results](https://www.thebalance.com/past-performance-is-no-guarantee-of-future-results-357862).
Losing money is a risk.
2. You have to actually invest the money that you don't spend. It's not enough
to just not make the purchase.
3. You have to hold for the long term. The point of listing the amounts for
multiple time periods is to show just how effective exponential growth can be
when it works in your favor.

## What I learned
This was my first time working with Alexa or any voice control platform.

It was also my first time working with a
["serverless"](https://en.wikipedia.org/wiki/Serverless_computing) platform.
The code runs on [AWS Lambda](https://aws.amazon.com/lambda/).

I used Node.js for the execution environment because Amazon has a [ASK
SDK](https://github.com/alexa/alexa-skills-kit-sdk-for-nodejs) for it.

Parsing the money amount was the hardest part because as of now, there is no
built-in slot type for money (which was really surprising). As a workaround, I
followed this [Stack Overflow
answer](https://stackoverflow.com/a/42278120/1481479) and used two slots. But
it also meant I had to use many more utterances. I found an [open
issue](https://alexa.uservoice.com/forums/906892-alexa-skills-developer-voice-and-vote/suggestions/32402266-money-type)
to add a money type.
