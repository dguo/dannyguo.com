---
layout: ../../layouts/BlogPostLayout.astro
canonicalUrl: https://blog.logrocket.com/safari-next-internet-explorer/
categories:
  - programming
date: "2021-01-08"
tags:
  - browser
title: Is Safari the Next Internet Explorer?
---

*This post was originally written for the [LogRocket
blog](https://blog.logrocket.com/safari-next-internet-explorer/).*

At its peak in 2004, Microsoft’s Internet Explorer (IE) accounted for an
[estimated 95](https://www.visualcapitalist.com/internet-browser-market-share/)
[percent](https://www.visualcapitalist.com/internet-browser-market-share/) [of
the browser
market](https://www.visualcapitalist.com/internet-browser-market-share/). As
Firefox and Chrome grew more popular, it became increasingly important for web
developers to build websites with cross-browser compatibility in mind.

IE caused web developers a lot of pain, however, because many bugs applied
exclusively to IE and because it sometimes [lagged
behind](https://www.wired.com/2016/01/the-sorry-legacy-of-microsoft-internet-explorer/)
in implementing new features after the World Wide Web Consortium (W3C)
standardized them.

IE was so popular that it maintained a persistent market share, even after
Microsoft themselves moved on from it with Edge. In 2016, the company ended
support for [all versions under
11](https://venturebeat.com/2016/01/12/microsoft-ends-support-for-ie8-ie9-ie10-and-windows-8/).
While Microsoft will update IE 11 for the entirety of Windows 10’s lifespan,
they are aggressively pushing to get people off of IE. Microsoft services [will
drop support in
2021](https://www.theverge.com/2020/8/17/21372487/microsoft-internet-explorer-11-support-end-365-legacy-edge),
and Windows will start to [automatically launch certain websites in
Edge](https://www.theverge.com/2020/10/27/21537274/microsoft-internet-explorer-force-open-edge-website)
when users try to open them in IE.

While IE is very close to becoming a relic of internet history, some people have
claimed that [Safari is the new
IE](https://nolanlawson.com/2015/06/30/safari-is-the-new-ie/). Let’s consider
the similarities and differences between the IE and Safari situations to see how
valid the comparison is as of the beginning of 2021.

## Market Share

Being the next IE implies having a market share that is large enough for many
developers to worry about. On
[desktop](https://gs.statcounter.com/browser-market-share/desktop/worldwide),
Chrome is the clear leader, with about 68 percent of the market. Safari is
second with about 10 percent. That’s a fairly large population on its own, but
the bigger reason developers have to pay attention to Safari is because of its
mobile version on iOS and iPadOS.

The [vast
majority](https://www.zdnet.com/article/which-browser-is-most-popular-on-each-major-operating-system/)
of iPhone users use Safari. But it’s also important to know that Safari’s
engine, WebKit, is [the only browser engine allowed on
iOS](https://apple.stackexchange.com/a/350674/275342). Even Chrome and Firefox
for iOS have to use WebKit under the hood to comply with Apple’s [App Store
review
guidelines](https://developer.apple.com/app-store/review/guidelines/#software-requirements):

> Apps that browse the web must use the appropriate WebKit framework and WebKit
> Javascript.

So any web developer who cares about iPhone and iPad users absolutely has to
care about Safari.

Nevertheless, the overall situation is much better than the past one with IE.
Safari is still only about 19 percent of the [total browser
market](https://gs.statcounter.com/browser-market-share/). That’s nowhere near
IE’s former level of monopoly-like dominance.

Unless a website has a disproportionately large iOS and iPadOS user base, any
issues with Safari are unlikely to be as severe in impact as issues that were
unique to IE in its heyday. “This bug affects 95 percent of our users” is simply
not as alarming as “this bug affects 19 percent of our users.”

## OS Updates

Another big issue with IE is its relationship to new Windows versions. Each
version of Windows only supports
[up](https://en.wikipedia.org/wiki/Internet_Explorer_version_history#OS_compatibility)
[to](https://en.wikipedia.org/wiki/Internet_Explorer_version_history#OS_compatibility)
[a certain version of
IE](https://en.wikipedia.org/wiki/Internet_Explorer_version_history#OS_compatibility).
For example, Windows XP only supports up to IE 8, and Windows Vista only
supports up to IE 9.

So even if new IE versions fixed issues and implemented features, there was
still the problem of users being stuck on older versions of IE because they
hadn’t upgraded Windows. Safari is in a similar situation because its updates
are also tied to OS updates. However, this is mitigated by a couple factors.

The first is that OS updates are free now. In the past, we had to pay for new
Windows and OS X versions. Now that they’re free, there is much less friction in
getting people to upgrade.

Apple is also persistent in pushing updates, such as by issuing [repeated
prompts to
update](https://www.macworld.com/article/3447396/how-to-stop-getting-a-reminder-to-update-to-catalina-in-macos.html).
New iOS versions tend to reach [high adoption
rates](https://9to5mac.com/2020/06/19/apple-says-ios-13-is-now-running-on-81-of-all-devices-ipados-adoption-hits-73/)
soon after launch, especially when compared to adoption rates for new Android
versions.

It also helps that Apple supports devices going back several years. For example,
iOS 14 works on iPhones all the way back to the iPhone 6S, which is five years
old at this point. As a result, it’s not a big problem in practice for Safari
updates to coincide with OS updates.

## Features and Bugs

[Can I use](https://caniuse.com/) provides a [comparison of supported
features](https://caniuse.com/?compare=edge+87,firefox+85,chrome+90,safari+TP,ios_saf+14,and_chr+86&compareCats=all)
between the latest versions of the major browsers. There aren’t many features
that Safari is still missing. Developers have complained in the past about lack
of support for things like [WebRTC](https://caniuse.com/rtcpeerconnection) and
[WebP](https://caniuse.com/webp), but Safari has those now.

Safari does still have some holdouts, such as Web Bluetooth and Web USB. But
these are relatively advanced, nice-to-have features rather than features that
would be widely used by typical websites. Apple may not always adopt W3C
standards, but the impact should not be as severe as when IE was slow to do so
for more critical standards.

Mozilla’s [2020 MDN Browser Compatibility
Report](https://mdn-web-dna.s3-us-west-2.amazonaws.com/MDN-Browser-Compatibility-Report-2020.pdf)
gives us some insight into the community’s opinions. For the survey question of
“What browsers/platforms cause the most issues?”, mobile Safari and desktop
Safari come right after IE.

We also have reason to believe that Safari tends to be buggier than other modern
browsers because of Bootstrap’s [wall of browser
bugs](https://getbootstrap.com/docs/4.5/browser-bugs/). Safari has the most
listed issues, and this is probably a good estimation of the overall situation
since Bootstrap has so many generally useful components.

Relatively speaking, Safari does cause more pain than other modern browsers. But
as long as there is competition, there will always be one browser that tends to
be worse for development than others. The gap between Safari and the other
browsers is not nearly as bad as it was for IE, and the gap is so much smaller
that I don’t think it’s fair to call Safari the next IE at this point.

## Extensions

Safari also had its own framework for extensions. First, there was a proprietary
system for `.safariextz` extensions. Apple [finished deprecating those in
2018](https://www.howtogeek.com/fyi/macos-mojave-will-break-a-bunch-of-safari-extensions/)
in favor of Safari App Extensions. But starting with version 14, Safari supports
the [WebExtensions
API](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions)
that Chrome (and its derivatives like Edge and Opera) and Firefox use.

While there are [certain
incompatibilities](https://developer.apple.com/documentation/safariservices/safari_web_extensions/assessing_your_safari_web_extension_s_browser_compatibility),
this is a big step forward for extension developers because at least the core
API is the same across all major browsers. Making a cross-browser extension will
be much easier going forward.

## Conclusion

On the surface, the situation with Safari seems similar to our old situation
with IE, but there are crucial differences that make it hard to justify
referring to Safari as the next IE. Even if Safari is slower than the other
browsers at fixing bugs and implementing features, at least we can expect those
changes to make it to end users much faster than they did for IE users.

The pain of dealing with Safari-specific issues is not in the same realm as what
web developers had to deal with in supporting IE users. There will inevitably be
some degree of difficulty in maintaining cross-browser compatibility, but the
challenge is much easier now, especially because resources like Can I use and
MDN make incompatibilities easy to know about ahead of time.

Luckily for us, no browser is truly taking up IE’s mantle. I don’t blame any
developers who [complain about
Safari](https://news.ycombinator.com/item?id=24186243), but there’s a
categorical difference in developing for Safari now versus developing for IE in
the past. I, for one, am thankful for that.
