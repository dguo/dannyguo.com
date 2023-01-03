---
layout: ../../layouts/BlogPostLayout.astro
categories:
  - programming
date: "2022-06-22"
tags:
  - favicon
  - xkcd
title: Updating My Favicon, Courtesy of Randall Munroe
---

Since 2017, my personal website's
[favicon](https://en.wikipedia.org/wiki/Favicon) was a [yin-yang
symbol](https://en.wikipedia.org/wiki/Yin_and_yang) that I added on a whim.

![Old favicon](https://i.imgur.com/sSvnSCK.jpg)

I didn't think about it again for a long time. Until I published a post on
[serving videos instead of
GIFs](https://www.dannyguo.com/blog/serve-videos-instead-of-gifs/), and one
Reddit comment [helpfully pointed
out](https://www.reddit.com/r/programming/comments/gl7ttl/serve_videos_instead_of_gifs/fqw7lap/)
how absurdly large my favicon was:

> And yet that webpage has a 170kb favicon - a 256x256 image with essentially 3
> colors but stored in an uncompressed 24 bit format.

I appreciated the callout! I thought about changing my favicon to my initials or
something like that, but then I remembered a sketch that I got from [Randall
Munroe](https://en.wikipedia.org/wiki/Randall_Munroe), the author of
[*xkcd*](https://xkcd.com/) and [*What If?: Serious Scientific Answers to Absurd
Hypothetical
Questions*](https://www.amazon.com/What-If-Scientific-Hypothetical-Questions/dp/0544272994?crid=FJWL4J94JJN5&keywords=randall+munroe&qid=1654983209&sprefix=randall+munroe%2Caps%2C75&sr=8-3&linkCode=ll1&tag=thdalo00-20&linkId=be65676d693ee4c0c09c8f09c58096fc&language=en_US&ref_=as_li_ss_tl).

When I was in college, he visited to give a
[talk](https://lectures.princeton.edu/lectures/2011/larry-gonick-randall-munroe).
Afterwards, I asked him to autograph a printout of
[#876](https://xkcd.com/876/), which references [Plato's
Cave](https://en.wikipedia.org/wiki/Allegory_of_the_cave) from [*The
Republic*](https://www.amazon.com/Republic-Plato-Allan-Bloom/dp/0465094082?crid=316HZB89FGE9H&keywords=republic+plato&qid=1654984868&sprefix=republic+plato%2Caps%2C76&sr=8-4&linkCode=ll1&tag=thdalo00-20&linkId=49c528f777b799c5c446689d491c84f4&language=en_US&ref_=as_li_ss_tl)
(I was a philosophy major). I also asked if he could draw
[Rodin](https://en.wikipedia.org/wiki/Auguste_Rodin)'s [*The
Thinker*](https://en.wikipedia.org/wiki/The_Thinker), and he graciously did it.
Here's a scan:

![signed xckd 876](https://i.imgur.com/uavmB98.jpg)

I cropped out the sketch and used
[RealFaviconGenerator](https://realfavicongenerator.net/) to generate images
from it. There are multiple ones for [different
scenarios](https://css-tricks.com/favicon-quiz/), and they range from 479 bytes
to 15 KB. Much better than the original 170 KB.

![New favicon](https://i.imgur.com/oQgvAuL.jpg)

The sketch is maybe a *bit* too detailed for a favicon, but I love it anyway.

## Interesting Favicons

Updating my favicon made me think about the interesting things I've seen
regarding favicons.

Gmail and Whatsapp show unread counts, and Google Calendar shows the current
date.

![Dynamic favicons](https://i.imgur.com/M8U0Iyz.jpg)

[Tinycon](https://github.com/tommoor/tinycon) is a library for showing alert
bubbles. Which inspired [Piecon](https://github.com/lipka/piecon) for showing
progress pie charts.

There's also [Tiny
Mirror](https://twitter.com/davywtf/status/1119783380734836737), which turns the
favicon into a webcam video!

Many browsers have added support for SVG favicons, which [allows for things
like](https://css-tricks.com/svg-favicons-and-all-the-fun-things-we-can-do-with-them/)
dark mode support through the
[prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)
media query.

Even the [favicon origin
story](https://thehistoryoftheweb.com/how-we-got-the-favicon/) is interesting. A
Microsoft engineer named Bharat Shyam snuck the feature into Internet Explorer.
He waited until a junior program manager was in charge before requesting
permission to add it, knowing that a junior person would be less likely to block
it. Thanks to that bit of mischief, the internet became a little more fun.
