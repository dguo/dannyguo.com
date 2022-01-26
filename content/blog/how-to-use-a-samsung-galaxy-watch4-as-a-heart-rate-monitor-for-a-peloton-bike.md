---
categories:
  - fitness
date: 2022-01-26
tags:
  - peloton
title: How to Use a Samsung Galaxy Watch4 as a Heart Rate Monitor for a Peloton Bike
---

To use a [Samsung Galaxy
Watch4](https://www.amazon.com/Samsung-Electronics-Smartwatch-Detection-Bluetooth/dp/B096BJLZZM?&linkCode=ll1&tag=thdalo00-20&linkId=edd3ac30f2add8f2a278045edc1c8a84&language=en_US&ref_=as_li_ss_tl)
as a heart rate monitor for a [Peloton bike](https://www.onepeloton.com/bikes),
use the free [Heart for
Bluetooth](https://play.google.com/store/apps/details?id=lukas.the.coder.heartforbluetooth)
app. Beyond seeing your heart rate in real time, syncing your heart rate also
allows you to use Peloton's [Strive
Score](https://blog.onepeloton.com/strive-score/) feature.

## How to Connect

First [pair your
watch](https://support.onepeloton.com/hc/en-us/articles/203418965-Pairing-Bluetooth-Headphones)
to your bike using Bluetooth.

Then open the Heart for Bluetooth app, and your bike should connect and pick up
your heart rate. In my experience, it can be finicky to get this to work in
subsequent sessions. After some trial and error, the most reliable method that
I've found is to do the following.

Turn on the Peloton, but *don't go into a class yet.* Now open the app on your
watch.

![Screenshot of the app waiting for the heart rate](https://imgur.com/eE0iGYV.png)

It takes a few seconds to pick up your heart rate. Wait for it to finish.

![Screenshot of the app with the heart rate](https://imgur.com/BK4e6ni.png)

In the meantime, you should see a "connecting" message on your bike.

![Screenshot of the Peloton connecting message](https://imgur.com/K713rap.jpg)

Next, you'll probably see a "couldn't connect" message.

![Screenshot of the Peloton couldn't connect message](https://imgur.com/BxVgnye.jpg)

In the app, press the refresh button in the bottom right to restart Bluetooth
advertising. In a few seconds, the bike should try to connect again, and then
you should see a "connected" message.

![Screenshot of the Peloton connected message](https://imgur.com/HXxHTRd.jpg)

There should be a heart symbol in the top right.

![Screenshot of the Peloton heart symbol](https://imgur.com/PBQG721.jpg)

Now you can start a class, and you should see your heart rate!

I haven't found a reliable way to avoid having to make two connection attempts.
I had a hypothesis that the issue was the bike trying to connect before the app
had a heart rate to send out. I tried opening the app and waiting for the heart
rate before turning on the bike, but I still got a failed connection on the
first attempt.

I've also found that once I'm in a class, it seems to be harder to get the
connection to work. So now I always wait for a successful connection before
joining a class.

A final tip is that when you're done with your ride, you can manually stop the
Heart for Bluetooth app by pressing the flag button in the middle left. This
lets you avoid draining your battery unnecessarily. You can also rely on the
app's timeout feature, which will end the session automatically after the set
amount of time ends.

## Apple Watch

If you have an Apple Watch and a Bike+, syncing your heart rate is easy because
Bike+ [supports
GymKit](https://support.onepeloton.com/hc/en-us/articles/360048226572-Pairing-Your-Apple-Watch-With-The-Peloton-Bike-).
If you have a regular Bike, you can try using the
[HeartCast](https://www.heartcast.app/) app.
