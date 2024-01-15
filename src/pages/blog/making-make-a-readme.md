---
layout: ../../layouts/BlogPostLayout.astro
categories:
  - programming
date: "2024-01-15"
unlisted: true
tags:
title: Making Make a README
---

My side project with the highest gratification-to-effort ratio is a simple
website called [Make a README](https://www.makeareadme.com) (the code is [hosted
on GitHub](https://github.com/dguo/make-a-readme)). I made it in 2017 on a whim.
I was trying to use a third party library that had an anemic README, and it
reminded me of all the other frustrating times I've run into inadequate
documentation and wished that [Stripe](https://stripe.com/docs) could write all
the software documentation in the world.

I thought of [Keep a Changelog](https://keepachangelog.com) and decided to make
a similar website for READMEs that explains what they are and suggests what to
put in them.

## Development

I [started](https://github.com/dguo/make-a-readme/pull/1/files) with a simple
`index.html`. I used [Bulma](https://bulma.io/) for styling and
[Netlify](https://www.netlify.com/) for hosting. I
[added](https://github.com/dguo/make-a-readme/commit/4673555488b77348a10371622470e03beca4b853)
a Markdown template with a live preview and some more content over the next few
days, and I was done! I posted the website to a couple of subreddits, it got a
few thousand hits, the traffic died down, and I mostly forgot about the
project.

But about a year later, I noticed in Google Analytics that traffic was
consistently increasing. Google Search had started highly ranking the website
for searches like "readme" and "readme template". Today, Google still drives the
vast majority of traffic. Here are the top ten queries for the past month:

![Google Search queries](https://i.imgur.com/JLUu8bj.jpg)

I've tweaked the content a bit over the years, but the website is largely the
same as it started. I did
[migrate](https://github.com/dguo/make-a-readme/commit/090671b329ec998965f8fc9cc898a9c9c4386ab0)
the styling to [Tailwind](https://tailwindui.com/), and I
[started](https://github.com/dguo/make-a-readme/commit/58acff6f9335c86d12d037c347c9d4958ce0de26)
using [Next.js](https://nextjs.org/) in preparation for some future enhancements
if I ever carve out the time to do them.

For analytics, I started using [Plausible](https://plausible.io) after Google
[shut down Universal
Analytics](https://blog.google/products/ads-commerce/upgrade-to-google-analytics-4-before-july-1/),
which made it a particularly good time to find something new. One reason I
picked Plausible is that it allows me to make the analytics for a website
public, which I [did for Make a README](https://plausible.io/makeareadme.com/).
As anyone can see, the website has had about two million visitors all time.

![Plausible screenshot](https://i.imgur.com/fDVtnRq.jpg)

## Monetization

The website costs me virtually nothing to run, considering it's a static
website. I'm on Netlify's [free starter plan](https://www.netlify.com/pricing/),
which includes 100 GB of bandwidth every month, and the site only uses about 7
GB a month. So apart from the domain name, there aren't any operating costs.

But traffic was high enough that I wanted to use the website as an opportunity
to experiment with monetization, even as just a learning experience. I added
developer-focused ads with [Carbon](https://www.carbonads.net/). I was okay with
doing it because Carbon only adds a single display ad that has a decent chance
of being relevant to the intended audience. Plus I never minded Carbon ads on
other websites. I made a total of $153.36 from Carbon over about five months.

Then I moved to the now defunct
[CodeFund](https://github.com/gitcoinco/code_fund_ads) platform, which had
higher payouts in my testing. I made a total of $443.73 from CodeFund over about
11 months.

After CodeFund shut down, I eventually switched to
[EthicalAds](https://www.ethicalads.io/), which is a part of [Read the
Docs](https://readthedocs.com/), doesn't use cookies, and is [open
source](https://github.com/readthedocs/ethical-ad-server/). I made a total of
$442.27 from EthicalAds for over 200,000 views over the course of a year. That's
about $2 in revenue per thousand views.

![EthicalAds dashboard](https://i.imgur.com/FGukMy1.jpg)

There was also a two year period where I [uninstalled the ad
network](https://github.com/dguo/make-a-readme/pull/31/files) because
[ReadMe](https://readme.com/) (e.g. documentation as a service) sponsored the
website. I have [Hacker News](https://news.ycombinator.com/) to thank for that.
I saw a post asking about side projects that are making money. I
[commented](https://news.ycombinator.com/item?id=23443428) about Make a README
and got a reply from [Gregory Koberger](https://gkoberger.com/), the founder of
ReadMe:

> Ah, my SEO nemesis!
>
> Really, though, your site is awesome. I just emailed you about sponsoring it,
> if you're interested :)

I laughed out loud when I read that because I had noticed before that Make a
README would sometimes show up in search results ahead of ReadMe, so I knew who
the commenter was even before I saw the username and profile.

It was an easy decision to take the sponsorship offer because I was already a
fan of ReadMe. I've done plenty of third party integrations at work, and when I
open a company's documentation page for the first time, I can immediately
recognize if they are using ReadMe. That's a positive sign for me that the
documentation will be pretty comprehensive, relative to documentation by
companies that build their own systems from scratch.

Lastly, I've received a couple of acquistion offers to buy the website. I turned
them down because it's more gratifying to keep the website as a side project. I
never intended to make any money off of this anyway, though it has been nice to
earn a bit of essentially passive income from the advertising and sponsorship.

## Gratification

Way more than money, the biggest source of gratification is just learning when
people find the site to be useful. I have a monitor set up for with
[F5Bot](https://f5bot.com/). It checks Reddit, Hacker News, and
[Lobsters](https://lobste.rs/) for mentions of "makeareadme" and sends me an
email when it finds something. I also occasionally [search
Twitter](https://twitter.com/search?q=makeareadme.com) for "makeareadme.com".

I've been in the programming world long enough that making a README is second
nature. It can be hard for me to remember that at one point, I didn't know the
value of good documentation and what information is useful in a README. It's the
[curse of knowledge](https://en.wikipedia.org/wiki/Curse_of_knowledge) at work.
So when someone recommends Make a README to other people, it reminds me that
everyone is a beginner at some point. And that for this one basic but important
thing, my website served as a helpful resource. That feels *so good* every time.

## Future Work

In the future, I'd like to add two things to the website. The first is
translations. The [analytics](https://plausible.io/makeareadme.com/countries)
show that significant traffic comes from countries that don't primarily speak
English. Adding translations would make the website more accessible to more
people.

I also want to add an interactive README generator. I think the current
editable template is a good educational starting point, but it'd be nice if the
website was more useful for experienced engineers who don't need the educational
aspect but are making new READMEs.
