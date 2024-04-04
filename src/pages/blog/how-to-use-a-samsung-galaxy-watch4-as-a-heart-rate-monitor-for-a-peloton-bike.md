---
layout: ../../layouts/BlogPostLayout.astro
categories:
  - fitness
date: "2022-01-26"
lastmod: "2024-04-04"
tags:
  - peloton
title: How to Use a Samsung Galaxy Watch4 as a Heart Rate Monitor for a Peloton Bike
---

To use a [Samsung Galaxy
Watch4](https://www.amazon.com/Samsung-Electronics-Smartwatch-Detection-Bluetooth/dp/B096BJLZZM?&linkCode=ll1&tag=thdalo00-20&linkId=edd3ac30f2add8f2a278045edc1c8a84&language=en_US&ref_=as_li_ss_tl)
as a heart rate monitor for a [Peloton bike](https://www.onepeloton.com/bikes),
install the [Peloton app for
WearOS](https://play.google.com/store/apps/details?id=com.onepeloton.callisto).
Another option is to install the free [Heart for
Bluetooth](https://play.google.com/store/apps/details?id=lukas.the.coder.heartforbluetooth)
app. Beyond seeing your heart rate in real time, syncing your heart rate also
allows you to use Peloton's [Strive
Score](https://blog.onepeloton.com/strive-score/) feature.

## Peloton

Peloton [released an app for
WearOS](https://www.onepeloton.com/blog/android-watch-app/) on April 4, 2023.
The app lets you [use your watch as a heart rate
monitor](https://support.onepeloton.com/s/article/11060651868692-WearOS-App-Tracking).
But if you have any problems with the Peloton app or if you  want to send your
heart rate to a non-Peloton device, you can try Heart for Bluetooth instead.

## Heart for Bluetooth

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

Next, you might see a "couldn't connect" message.

![Screenshot of the Peloton couldn't connect message](https://imgur.com/BxVgnye.jpg)

If this happens, press the refresh button in the bottom right of the app to
restart Bluetooth advertising. In a few seconds, the bike should try to connect
again, and then you should see a "connected" message.

![Screenshot of the Peloton connected message](https://imgur.com/HXxHTRd.jpg)

There should be a heart symbol in the top right.

![Screenshot of the Peloton heart symbol](https://imgur.com/PBQG721.jpg)

Now you can start a class, and you should see your heart rate!

If you frequently get connection failures, try updating your watch to the latest
version. The connection failures largely went away for me after an [April 2022
update](https://www.xda-developers.com/galaxy-watch-4-update-samsung-health-improvements-march-patch/).

I have also experienced an issue where the heart rate updates would stop in the
middle of the ride, so the heart rate on the bike would freeze at a particular
number. At first, I was able to avoid the issue by turning on my watch's always
on display while I ride. I later noticed that the Heart for Bluetooth
description has a fix for this issue. You need to go into the Galaxy Wearable
app, go to the watch settings, go to the list of apps, go to Heart for
Bluetooth, and turn on "Allow background activity."

A final tip is that when you're done with your ride, you can manually stop the
Heart for Bluetooth app by pressing the flag button in the middle left. This
lets you avoid draining your battery unnecessarily. You can also rely on the
app's timeout feature, which will end the session automatically after the set
amount of time ends.

## Apple Watch

If you have an Apple Watch and a Bike+, syncing your heart rate is easy because
Bike+ [supports
GymKit](https://support.onepeloton.com/s/article/360048773312-Apple-GymKit-On-The-Peloton-BikePlus).
If you have a regular Bike, you can try using the
[HeartCast](https://www.heartcast.app/) app.
