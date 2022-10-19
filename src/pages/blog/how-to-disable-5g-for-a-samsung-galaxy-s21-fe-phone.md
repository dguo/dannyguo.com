---
layout: ../../layouts/BlogPostLayout.astro
categories:
  - hardware
date: "2022-05-23"
tags:
  - samsung
title: How to Disable 5G for a Samsung Galaxy S21 FE Phone
---

I switched to a [Samsung Galaxy S21
FE](https://www.amazon.com/Samsung-Unlocked-Smartphone-Intelligent-Graphite/dp/B09BFTMQH9?crid=3GTO7RQL8WJZH&keywords=galaxy+s21+fe&qid=1653143909&sprefix=galaxy+s21+f%2Caps%2C150&sr=8-2&linkCode=ll1&tag=thdalo00-20&linkId=d6efde9cebf6aafabe69c73450ee7468&language=en_US&ref_=as_li_ss_tl)
phone, and one of the first things I did was to disable
[5G](https://en.wikipedia.org/wiki/5G) because my understanding is that it can
cause a noticeable decrease in battery life, and I've never felt a need for
speeds faster than what [4G
LTE](https://en.wikipedia.org/wiki/LTE_(telecommunication)) provides anyway. I
used an app called [Samsung Band
Selection](https://play.google.com/store/apps/details?id=com.ray.samsungbandselection)
to disable 5G.

Samsung's own website has a [page on the battery drain
issue](https://www.samsung.com/us/support/troubleshooting/TSG01201462/):

> At this time, the 5G networks are only used for data connections and are not
> yet capable of carrying phone calls and messages. Your phone will need to
> maintain a connection to the 3G or LTE network in addition to the 5G network
> so that phone calls, text messages, and data will be delivered consistently.
>
> Because your phone is connected to multiple networks simultaneously, the
> battery will drain faster than one would typically expect, and the phone may
> get warmer than when solely on 3G or LTE.

There is
[evidence](https://www.wsj.com/articles/5g-drains-your-iphones-battery-heres-what-you-can-do-about-it-11647716969)
of this issue for iPhones as well.

I originally expected to turn 5G off through the phone's settings, but I wasn't
able to because the "Network mode"
[setting](https://www.digitaltrends.com/mobile/how-to-turn-off-5g-on-a-samsung-phone/)
that I've seen on my older devices wasn't there. I don't know if it's because I
bought an unlocked phone, or maybe Samsung doesn't want people to be able to
change the network mode in general anymore.

![Mobile network settings](https://i.imgur.com/6MjOaPc.jpg)

As a workaround, I found the [Samsung Band
Selection](https://play.google.com/store/apps/details?id=com.ray.samsungbandselection)
app.

![Samsung Band Selection app](https://i.imgur.com/h16FP4w.jpg)

Instead of selecting individual bands, I went into "More Network Settings" and
saw the "Preferred network type" setting.

![Extra mobile network settings](https://i.imgur.com/bzwvawz.jpg)

I changed it from 5G to LTE.

![Disabling 5G](https://i.imgur.com/j3caepW.jpg)

And that has worked as expected. When I first got the phone, I saw the 5G symbol
in the top bar. Now I only ever see 4G.
