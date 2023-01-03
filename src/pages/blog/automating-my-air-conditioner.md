---
layout: ../../layouts/BlogPostLayout.astro
categories:
  - programming
date: "2021-10-09"
tags:
  - awair
  - automation
title: Automating My Air Conditioner
---

I have a [dumb window air
conditioner](https://www.amazon.com/FRIGIDAIRE-Window-Mounted-Mini-Compact-Conditioner-Mechanical/dp/B07RGM11L5?dchild=1&keywords=FFRA051WAE&qid=1624627381&sr=8-1&linkCode=ll1&tag=thdalo00-20&linkId=d0fafe5ee30721cc59f340ab0f51e65c&language=en_US&ref_=as_li_ss_tl)
in my bedroom. It's dumb in the sense that it doesn't have a built-in
thermometer, so it's unable to maintain a constant temperature.

Edit: Someone helpfully [pointed
out](https://news.ycombinator.com/item?id=28813747) that my unit *does* have the
ability to self-regulate. Looking at some customer reviews, I do see some
complaints that it doesn't work very well on this model. But still, I should
have read the manual instead of assuming that the top knob is just a static
control. My bad!

![Frigidiare air conditioner controls](https://i.imgur.com/HFMgHWV.jpg)

If I leave it on overnight, it eventually makes the room too cold. I decided to
automate it using an air quality monitor and a smart plug.

## Air Quality Monitor

Last year, I watched David Heinemeier Hansson's [talk on indoor air
quality](https://www.youtube.com/watch?v=MRqh8oLY7Ik) and bought an [Awair
Element](https://www.amazon.com/Awair-Element-Indoor-Quality-Monitor/dp/B082ZF4H37?dchild=1&keywords=awair&qid=1624626960&sr=8-2&linkCode=ll1&tag=thdalo00-20&linkId=34fc6a3e4ccbe8f3e5beb50b77c2c7a6&language=en_US&ref_=as_li_ss_tl)
air quality monitor on [his
recommendation](https://twitter.com/search?q=%40dhh%20awair&src=typed_query).

![Awair Element](https://i.imgur.com/PxHsZbh.jpg)

The Element
[monitors](https://support.getawair.com/hc/en-us/articles/360039242373-Air-Quality-Factors-Measured-By-Awair-Element)
temperature, humidity, carbon dioxide, volatile organic compounds (VOC), and
fine dust levels (PM2.5). Awair [provides an official
API](https://docs.developer.getawair.com/), which makes it easy to pull the
data. I did some [yak shaving](https://americanexpress.io/yak-shaving/) and
wrote a [JavaScript client](https://github.com/dguo/awair-js) for the API.

I run some personal software on a [Vultr
VPS](https://www.vultr.com/?ref=8946830-8H), so I added a
[cron](https://en.wikipedia.org/wiki/Cron) job to query the API for the current
air quality metrics every 10 minutes.

## Smart Plug

Next, I had to figure out how to turn the air conditioner on and off. I
investigated smart plugs but didn't find any with APIs that are intended for
public use.

Most of the plugs integrated with voice assistants like Alexa and Google Home.
However, I couldn't find APIs for the voice assistants either. Voice control and
the respective mobile apps seemed like the only ways to interact with them.

I ended up buying a [Kasa smart
plug](https://www.amazon.com/gp/product/B07B8W2KHZ?ie=UTF8&psc=1&linkCode=ll1&tag=thdalo00-20&linkId=4efab939c1bf19091d95a7bc89c0f0db&language=en_US&ref_=as_li_ss_tl).

![Kasa smart plug](https://i.imgur.com/tCBQH0u.jpg)

Kasa doesn't provide a documented API, but other people have reverse engineered
how Kasa's mobile apps work, so I can use [this Node.js
package](https://github.com/konsumer/kasa_control) to control my plug remotely.
Thanks to this package, it was easy to get things working.

## Results

Before going to sleep, I turn my air conditioner on to the low setting. Through
the night, my VPS cron job checks the current temperature every 10 minutes. If
the temperature is above 75°F, the job turns the smart plug on. If the
temperature is under 73°F, the job turns the smart plug off.

This setup has worked well for me for the past summer. After the first night, it
was very satisfying to check the Awair app and see that the temperature bounced
between the two thresholds.

![Awair app screenshot](https://i.imgur.com/jmXDqdv.jpg)

## Conclusion

It would have been much easier to spend a little more money in the first place
to buy an air conditioner that has a built-in thermometer.

I learned later that I also could have used [IFTTT](https://ifttt.com/), which
has [an Awair integration](https://ifttt.com/awair/details), with a high
temperature trigger and a low temperature trigger. I could have linked these
triggers to [the Kasa integration](https://ifttt.com/kasa/details) to turn the
smart plug on and off.

But doing it through the APIs myself was much more fun!
