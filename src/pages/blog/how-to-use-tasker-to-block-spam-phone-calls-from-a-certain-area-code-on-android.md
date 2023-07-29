---
layout: ../../layouts/BlogPostLayout.astro
categories:
  - automation
date: "2022-06-04"
tags:
  - android
  - tasker
title: How to Use Tasker to Block Spam Phone Calls From a Certain Area Code on Android
---

[Like
everyone](https://www.usatoday.com/story/tech/2021/02/12/robocalls-scammers-fraud-phone-calls-increase-fcc-ftc-efforts/6706727002/),
I've been getting a lot of spam calls. One solution is to [block every call from
someone that isn't in your contacts
list](https://www.nytimes.com/wirecutter/guides/how-to-stop-spam-calls/), but I
didn't want to go that far and risk missing legitimate and important calls.

I found another way to cut down on the spam. Especially in the last year, I've
noticed that most of the calls come from numbers with the same area code as my
phone number. I don't live in that area code anymore, and it isn't for a large
city that might have businesses and organizations that I want to hear from, so
the only calls that I want from that area code are from people in my contacts
list.

Android and iOS don't natively support blocking unknown callers from a certain
area code, but I'm on Android, and I use an app called
[Tasker](https://tasker.joaoapps.com/) to automate things on my phone. I saw
that Tasker
[added](https://joaoapps.com/tasker-5-11-call-screening-easy-imports-pick-inputs-and-more/)
a [call screening
feature](https://tasker.joaoapps.com/userguide/en/help/eh_call_screened.html) in
version 5.11. [Here](https://www.youtube.com/watch?v=JxwfwkeffMk) is a video
demo of the feature. Tasker can have a high learning curve, especially for
non-programmers. But it allows for fine-grained control, so I knew it'd be
possible to configure what I wanted.

## Setting up Tasker

I set Tasker as my default "Caller ID & spam app" and made a Tasker profile for
the "Call Screened" event.

![Tasker profile](https://i.imgur.com/yz9682d.jpg)

For the caller, the `C:ANY`
[means](https://tasker.joaoapps.com/userguide/en/matching.html#caller) "match
the phone number of any contact." The `!` in front of it means "not." So
`!C:ANY` matches any phone number that isn't in my contacts list.

I have two more conditions. The first is that the `%cs_incoming` variable has to
be `true` because I don't need to screen outgoing calls. The second is that the
`%cs_number` variable, which has the caller's phone number as the value, has to
start with my own number's area code. So the pattern to match is like `999*`.

If a call meets all of these requirements, then the profile runs the task that I
set up. The task has two actions.

![Tasker task](https://i.imgur.com/wIZVgrD.jpg)

The first action is a notification that shows the phone number. Tasker lets me
set custom categories for notifications, so I gave this one a "Blocked number"
category. Then I used Android settings to [make the category a silent
notification](https://www.androidpolice.com/how-to-set-an-android-apps-notifications-to-come-in-silent/)
(no sound or vibration) so that it doesn't actually distract me. I originally
wanted a notification just to help confirm that things were working as
expected, but I realized later that I also get a great feeling of satisfaction
every time I see the notification.

![Tasker notification](https://i.imgur.com/xMBRDrF.jpg)

The second action is the actual call blocking. The action "disallows" the call,
which means that my phone won't ring or vibrate. From the caller's perspective,
it'll seem like an unanswered call. For now, I'm still allowing the caller to
leave a voicemail, but in the future, I may prevent that as well by turning on
the "reject" option, which will make it seem like I manually rejected the call.

![Tasker screening](https://i.imgur.com/TpSKONz.jpg)

## Results

This setup has worked well for me. I don't have to bother manually rejecting
nearly as many unknown calls, and the rate of spam attempts (based on my silent
notifications) has gone down. I used to get about one or two calls a day. Now I
go several days before even getting the silent notification. Thank you, [João
Dias](https://twitter.com/joaomgcd), for continuing to develop Tasker and make
it more powerful!
