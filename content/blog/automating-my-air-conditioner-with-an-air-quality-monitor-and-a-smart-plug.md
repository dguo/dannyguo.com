---
categories:
  - programming
date: 2021-06-25
draft: true
tags:
  - awair
  - automation
title: Automating My Air Conditioner With an Air Quality Monitor and a Smart Plug
---

I have a [dumb air
conditioner](https://www.amazon.com/FRIGIDAIRE-Window-Mounted-Mini-Compact-Conditioner-Mechanical/dp/B07RGM11L5?dchild=1&keywords=FFRA051WAE&qid=1624627381&sr=8-1&linkCode=ll1&tag=thdalo00-20&linkId=d0fafe5ee30721cc59f340ab0f51e65c&language=en_US&ref_=as_li_ss_tl)
in my bedroom. Dumb in the sense that it doesn't have a built-in thermometer, so
it's unable to maintain a constant temperature.  At night, it can get too cold
if I leave it on.

However, I recently purchased an [Awair
Element](https://www.amazon.com/Awair-Element-Indoor-Quality-Monitor/dp/B082ZF4H37?dchild=1&keywords=awair&qid=1624626960&sr=8-2&linkCode=ll1&tag=thdalo00-20&linkId=34fc6a3e4ccbe8f3e5beb50b77c2c7a6&language=en_US&ref_=as_li_ss_tl)
air quality monitor.

Awair provides an API, and I have a [Vultr](https://www.vultr.com/?ref=8613934)
VPS that queries the API for the current air quality metrics every 10 minutes.

I did do some [yak shaving](https://americanexpress.io/yak-shaving/) and wrote a
[JavaScript client](https://github.com/dguo/awair-js) for the API.

So getting the data is easy enough. But then I had to figure out how to turn the
air conditioner on and off. I investigated smart plugs, and found that none of
them seem to have APIs. At least none that are intended for direct consumer use.

Most of them integrated with the standard voice assistants like Alexa and Google
Home. However, I couldn't find APIs for those either. Voice control and using
the apps seemed like the only way to interact with them.

I also purchased a [Kasa smart
plug](https://www.amazon.com/gp/product/B07B8W2KHZ?ie=UTF8&psc=1&linkCode=ll1&tag=thdalo00-20&linkId=4efab939c1bf19091d95a7bc89c0f0db&language=en_US&ref_=as_li_ss_tl).

Kasa doesn't provide a documented API, but others have reverse engineered how
Kasa's mobile apps work, so I can use [this Node.js
package](https://github.com/konsumer/kasa_control) to control my plug remotely.

From there, it's pretty simple! Before going to sleep, I turn my air conditioner
on to the low setting. My VPS checks the current temperature every 10 minutes.
If it's above 75°F, it turns the smart plug on. If it's under 72°F, it turns the
smart plug off.

And this has worked well for the past several weeks.

Of course, it would have been much easier to avoid all this trouble by spending
a little more in the first place to buy an air conditioner that has a built-in
thermometer. But this way was much more fun!
