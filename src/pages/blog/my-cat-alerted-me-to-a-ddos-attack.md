---
layout: ../../layouts/BlogPostLayout.astro
categories:
  - programming
date: "2024-04-14"
title: My Cat Alerted Me to a DDoS Attack
---

A few years ago, my cat gave me my most memorable middle of the night software
engineering incident. I was working at a startup, and we didn't have a formal
on-call rotation yet. That was a deliberate decision, since being on-call is
painful, and the team was good about just collectively keeping an eye out for
urgent alerts. We eventually set up an on-call rotation, but before that
happened, I had a fun night.

Around 3 a.m., I woke up because my cat was grooming my hair. The grooming
itself wasn't unusual. She did it occasionally, and I optimistically took it as
a sign that she actually liked me and didn't just tolerate me. Here's the [cat
tax](https://www.urbandictionary.com/define.php?term=Cat%20Tax):

![my cat in a Fancy Feast box](https://i.imgur.com/DM89U2s.jpg)

![my cat grooming my hair](https://i.imgur.com/jDwIABh.jpg)

But in 9 years, that was the only time she did it while I was sleeping. I
checked my phone to see what time it was, and I noticed that an [AWS
CloudWatch](https://aws.amazon.com/cloudwatch/) alert had gone off a couple
minutes ago because of [unhealthy targets for our load
balancer](https://aws.amazon.com/blogs/networking-and-content-delivery/identifying-unhealthy-targets-of-elastic-load-balancer/).

I tried to go to our website, but it didn't load. I groaned and went to log onto
my work laptop. Our monitoring dashboard showed a massive number of requests
coming from many IP addresses that were associated with different countries. And
international traffic wasn't typical for us anyway since our products were only
available to people in the United States. It was a [distributed
denial-of-service (DDoS)
attack](https://www.cloudflare.com/learning/ddos/what-is-a-ddos-attack/).

My first and not great thought was to block IP addresses at the server level,
which would have been tedious and possibly ineffective if the attacker had
significantly more source IP addresses to use. But then I remembered that we had
already set up [AWS Web Application Firewall](https://aws.amazon.com/waf/). To
deal with the immediate outage, I set up a rule to [block requests from other
countries](https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-statement-type-geo-match.html).
It took effect and blocked hundreds of thousands of requests over the next hour
or so. Our website started working again, and the flood of requests stopped.

Later that morning, we noticed that we had received an email to our customer
support inbox around when the attack started. With horrible grammar, the sender
claimed to have found a vulnerability with our website that crashed
[Apache](https://en.wikipedia.org/wiki/Apache_HTTP_Server), which we didn't even
use. They said they stopped all traffic to our website and could keep it that
way for months. They generously offered to give us a "solution file" if we sent
them $5,000 in Bitcoin. We didn't reply, though in retrospect, it could have
been fun to try to [troll them](https://www.youtube.com/watch?v=dWzz3NeDz3E).

I still find it hard to believe the perfect timing of my cat waking me up. You
might guess that the AWS alert caused my phone to vibrate or make a sound,
waking my cat up first. But I keep my phone in do not disturb mode during the
night. So I just like to think that somehow, she sensed something was wrong that
couldn't wait until the morning. It was certainly a more pleasant way to be
woken up than by a blaring [PagerDuty](https://www.pagerduty.com/) alarm.
