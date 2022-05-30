---
categories:
  - automation
date: 2022-05-30
draft: true
tags:
  - android
  - tasker
title: How to Use Tasker to Block Phone Calls From a Certain Area Code on Android
---

[Like
everyone](https://www.usatoday.com/story/tech/2021/02/12/robocalls-scammers-fraud-phone-calls-increase-fcc-ftc-efforts/6706727002/),
I've been getting a lot of spam calls. In the last year, I've noticed that the
majority are coming from numbers with the same area code as my phone number.

I don't live in the same area code anymore, so the only calls that I care about
from that area code are from people I know and whose phone numbers are in my
contacts.

I use an Android app called [Tasker](https://tasker.joaoapps.com/) to automate
certain things on my phone.

I saw that Tasker
[added](https://joaoapps.com/tasker-5-11-call-screening-easy-imports-pick-inputs-and-more/)
a [call screening
feature](https://tasker.joaoapps.com/userguide/en/help/eh_call_screened.html) in
version 5.11.

I made a profile for the "Call Screened" event.

![Tasker profile](https://i.imgur.com/yz9682d.jpg)

Then I linked it to a task.

![Tasker task](https://i.imgur.com/wIZVgrD.jpg)

I set up a notification.

![Tasker notification](https://i.imgur.com/xMBRDrF.jpg)

And then set up the actual screening.

![Tasker screening](https://i.imgur.com/TpSKONz.jpg)

To start, I've configured it to only disallow the call, so calls can still go to
my voicemail. I wanted to make sure it was working as intended first.
