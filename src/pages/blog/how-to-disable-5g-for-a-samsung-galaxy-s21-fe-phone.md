---
layout: ../../layouts/BlogPostLayout.astro
categories:
  - hardware
date: "2022-05-23"
lastmod: "2024-04-13"
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
use an app called
[Netmonitor](https://play.google.com/store/apps/details?id=com.parizene.netmonitor)
to disable 5G. Previously, I used [Samsung Band
Selection](https://play.google.com/store/apps/details?id=com.ray.samsungbandselection).

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
that I've seen on my older devices wasn't there. It seems like Samsung doesn't
want people to be able to easily change the network mode anymore.

![Mobile network settings](https://i.imgur.com/6MjOaPc.jpg)

## Netmonitor

So now I use
[Netmonitor](https://play.google.com/store/apps/details?id=com.parizene.netmonitor)
to disable 5G. The service menu does give this warning about using only LTE.

![Netmonitor warning about using only LTE mode](https://i.imgur.com/qGPNalm.jpg)

But I went ahead into phone info.

![Netmonitor phone info](https://i.imgur.com/kPdP0Yp.jpg)

The NR in "Set Preferred Network Type" stands for [New
Radio](https://en.wikipedia.org/wiki/5G_NR) and refers to 5G. I changed the
setting to "LTE/WCDMA", and that has kept my phone on 4G.

## Samsung Band Selection

Before Netmonitor, I used the [Samsung Band
Selection](https://play.google.com/store/apps/details?id=com.ray.samsungbandselection)
app. But I eventually got a message saying:

> Workaround Needed
>
> In June of 2022, Samsung released a firmware update which blocks public access
> to the Band Selection screen - unfortunately, your phone is affected, which
> prevents this app from launching the Band Selection screen directly. However,
> there are some workarounds available. Like the original solution though, the
> workarounds aren't guaranteed to last forever sincer Samsung can revoke them
> at any point in time.

The message then links to [this Reddit
post](https://www.reddit.com/r/samsung/comments/vc4yqr/psa_samsung_has_removed_the_band_selection_screen/)
for workarounds. I didn't try any of them because [one of the
comments](https://www.reddit.com/r/samsung/comments/vc4yqr/comment/jpypxr6/)
suggested Netmonitor instead. But for posterity, here is how I used Samsung Band
Selection:

![Samsung Band Selection app](https://i.imgur.com/h16FP4w.jpg)

Instead of selecting individual bands, I went into "More Network Settings" and
saw the "Preferred network type" setting.

![Extra mobile network settings](https://i.imgur.com/bzwvawz.jpg)

I changed it from 5G to LTE.

![Disabling 5G](https://i.imgur.com/j3caepW.jpg)

And from then on, I only ever saw 4G in the network status.
