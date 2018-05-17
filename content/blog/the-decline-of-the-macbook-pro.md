---
draft: true
title: The Decline of the Macbook Pro
---
I've been using Macs for almost nine years. I got a 15" MacBook Pro the summer
before my freshman year of college through my school's computer store. I used
it for six years before getting a 13" model in 2015. I'm considering getting a
new one in the next year or two, but it seems like the latest MacBook Pros are
worse in almost every way that matters to me.

[MagSafe](https://en.wikipedia.org/wiki/MagSafe) was always one of the best
MacBook features. Now, all the MacBook Pro models use
[USB-C](https://en.wikipedia.org/wiki/USB-C) for charging. While I like the
idea of eventually being able to use the same charger for everything, losing
MagSafe is still unfortunate.

Apple has always been enthusiastic about pushing forward with new standards and
embracing a wireless world. They dropped the DVD drive long before other
companies did. But I didn't want a DVD drive, even in 2015. USB 2/3 and HDMI
are different. MacBook Pros only have USB-C ports now, and I consider that to
be a huge disadvantage. My 2015 machine has HDMI, which has occasionally been
useful since HDMI is so widely supported. And not having a single legacy USB
port may be progressive, but I don't like the idea of buying and carrying
around dongles and adapters.

I've tried the new butterfly mechanism keyboard, and it feels terrible. It has
almost no travel. I love the physical feeling of typing, which is why I use a
mechanical keyboard with obnoxiously loud switches. The new keyboard also seems
to be [less
reliable](https://theoutline.com/post/2402/the-new-macbook-keyboard-is-ruining-my-life),
with [pieces of dust or
debris](https://arstechnica.com/gadgets/2018/05/report-butterfly-macbook-pro-keyboards-require-more-frequent-more-expensive-repairs/)
causing keypresses to not register. Apple is even facing a [class action
lawsuit](https://www.engadget.com/2018/05/12/apple-faces-class-action-lawsuit-over-macbook-keyboards/)
over the issue.

The trackpad is too big. Even one palm rejection failure in a hundred is too
much. I set my sensitivity to max anyway, so a larger trackpad doesn't help me
because I can go from one edge of the screen to another with barely any finger
movement. The trackpad is also aesthetically too large because there's almost
no margin between it and the keyboard and the edge of the laptop. I've realized
that one of the reasons most terminal emulators look ugly by default is because
they barely provide any margin between the text and the edges. The same concept
applies to the current trackpad.

The touch bar doesn't seem useful. I don't mind the digital escape key, since I
remap my caps lock key to control (when tapped) and escape (when held down)
anyway, but I would rather use keyboard shortcuts than look down at the touch
bar. At home, I also put my laptop on a stand, so reaching up for the touch bar
would definitely be slower than using my mouse.

I've realized that almost all of the macOS software is effectively [bloatware](https://en.wikipedia.org/wiki/Software_bloat#Bloatware) for me.

![macOS software](https://i.imgur.com/IO6AQCf.png)

* Photos
    * I use [Google Photos](https://www.google.com/photos/about/).
* iMovie
    * I don't make videos.
* GarageBand
    * I don't make music.
* Pages
    * I haven't needed to make a Word document in a long time, and if I did, I could use [Google Docs](https://www.google.com/docs/about/).
* Numbers
    * I use [Google Sheets](https://www.google.com/sheets/about/) when I need a spreadsheet.
* Keynote
    * I would make a HTML presentation using something like [reveal.js](https://revealjs.com/).
* Siri
    * Voice assistants are more helpful on smartphones where typing is harder. I don't use Siri on my MacBook.
* Safari
    * I use [Firefox](https://www.mozilla.org/en-US/firefox/) as my primary browser.
* Mail
    * I use the [Gmail](https://www.google.com/gmail/about/) web client.
* FaceTime
    * It's restricted to macOS/iOS users. [Skype](https://www.skype.com/), [Facebook Messenger](https://www.messenger.com/), [Google Hangouts](https://hangouts.google.com/), etc. all work anywhere. I tried to use Facetime with my family once and learned that it still only supports one on one video chat.
* Messages
    * It's also restricted to macOS/iOS users. I use [Google Voice](https://www.google.com/voice), so I can receive and send SMS messsages using any browser.
* Maps
    * I use [Google Maps](https://www.google.com/maps).
* Notes
    * I use [Evernote](https://www.evernote.com).
* Calendar
    * I use [Google Calendar](https://www.google.com/calendar/about/).
* Contacts
    * I use [Google Contacts](https://www.google.com/contacts/).
* Reminders
    * I use [Todoist](https://todoist.com).
* Photo Booth
    * This was fun to play around with, but I haven't opened it in years.
* Preview
    * This is only one I use regularly.
* iTunes
    * I use [Google Play Music](https://play.google.com/music/) and [Pocket Casts](https://www.shiftyjelly.com/pocketcasts/). iTunes also became the definition of feature creep.
* iBooks
    * I read books on my [Kindle](https://en.wikipedia.org/wiki/Amazon_Kindle) and check them out from the New York Public Library's [e-book website](https://nypl.overdrive.com/).
* App Store
    * I only use this for system updates. I use [Homebrew](https://caskroom.github.io/) for other software because I can check my software list into version control.
* Time Machine
    * All the data I care to back up is in [Google Drive](https://www.google.com/drive/), [Dropbox](https://www.dropbox.com/), or [GitHub](https://github.com/).

The overarching problem with Apple software is that it's tied to Apple
hardware. I want my software to be hardware-agnostic.

The big reason for me to totally buy into Apple's ecosystem would be their
stance on privacy. But for now, that's not compelling enough.

As a software developer, I try to do as much development as I can in
[Docker](https://www.docker.com/). However, there are significant performance
issues with [Docker for Mac](https://www.docker.com/docker-mac) when using
[mounted volumes](https://github.com/docker/for-mac/issues/77). The issues
aren't very noticeable for small projects, but for working on a medium-sized website, I exclusively do development on Linux on my five year old Lenovo laptop.

I've been considering getting a Lenovo [Thinkpad X1
Carbon](https://en.wikipedia.org/wiki/ThinkPad_X1_Carbon) instead. It has USB-C
ports but still retains legacy USB and HDMI ports. It's about a half pound
lighter than the 13" Macbook Pro, yet it has a 14" screen. It even has a matte
screen option that I would prefer.

However, I plan to learn how to develop iOS apps, and a Mac is basically required.

native Docker performance

Mac pros:

iTerm2

more native apps

polished (wake from sleep)

