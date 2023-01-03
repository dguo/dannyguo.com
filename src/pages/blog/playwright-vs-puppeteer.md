---
layout: ../../layouts/BlogPostLayout.astro
canonicalUrl: https://blog.logrocket.com/playwright-vs-puppeteer/
categories:
  - programming
date: "2020-05-06"
tags:
  - browsers
title: Playwright vs. Puppeteer
---

*This post was originally written for the [LogRocket
blog](https://blog.logrocket.com/playwright-vs-puppeteer/).*

[Playwright](https://github.com/microsoft/playwright) is a
[Node.js](https://nodejs.org) library for browser automation.
[Puppeteer](https://pptr.dev/) is also a Node.js library for browser automation.
Let’s take a look at what makes each of them interesting and consider the
factors that should go into deciding which one to use.

## Historical Background

It might be helpful to understand some historical context first. Browser
automation is not a new technology. [Selenium](https://www.selenium.dev/) has
been around since 2004, and for a long time, it was the go-to tool for this
category. While its primary use case has been implementing test suites for
websites, programmers have also used it for things like taking screenshots or
automating tasks when websites don’t provide APIs.

However, Selenium has a reputation for being unreliable. Selenium tests are
[commonly flaky](https://sqa.stackexchange.com/a/32544/42012), failing
intermittently for non-obvious reasons that are difficult to reproduce.

Selenium is also fairly resource-heavy, in part because it has generally been
used to run full browsers. Eventually, programmers started using [headless
browsers](https://en.wikipedia.org/wiki/Headless_browser) in some cases. These
browsers do most of the work of full browsers, but they don’t actually render
the UI. [PhantomJS](https://en.wikipedia.org/wiki/PhantomJS) was one of the more
popular ones.

Headless browsers can work well for testing simpler websites, but to test
everything that websites can do, they need to emulate full browsers as closely
as possible by [supporting various web
standards](https://phantomjs.org/supported-web-standards.html). Yet
comprehensive support is an [almost impossible
task](https://drewdevault.com/2020/03/18/Reckless-limitless-scope.html) because
of how complicated browsers have become.

More involved websites also justify more testing, so the main problem with past
headless browsers is that they become less usable exactly when you want to use
them more heavily.

The landscape changed significantly in 2017. The author of PhantomJS deprecated
it, and his
[impetus](https://groups.google.com/forum/m/#!topic/phantomjs/9aI5d-LDuNE) for
doing so was Google’s announcement of [headless
Chrome](https://developers.google.com/web/updates/2017/04/headless-chrome),
which was first available in Chrome 59. Firefox [followed
up](https://www.ghacks.net/2017/09/01/first-look-at-firefoxs-headless-mode/)
with a headless mode later that year. These developments made it possible to
write efficient tests and scripts against the same browsers that people actually
use.

## Puppeteer

Google followed up headless Chrome with the [public
release](https://github.com/puppeteer/puppeteer/releases/tag/v0.9.0) of
Puppeteer a few months later. The Chrome DevTools team develops it, giving it a
major advantage over similar projects because it has institutional support from
the same company that makes the [most widely used
browser](https://en.wikipedia.org/wiki/Usage_share_of_web_browsers) in the
world.

Puppeteer can drive either Chrome or
[Chromium](https://en.wikipedia.org/wiki/Chromium_(web_browser)) (the
open-source browser that Chrome is based on), and by default, installing
Puppeteer also downloads a compatible version of Chromium. This avoids the
otherwise likely situation that your browser eventually gets an update that
breaks Puppeteer.

Puppeteer makes it easy to get started with browser automation. This is in part
because of how it interfaces with the browser. Selenium uses the [WebDriver
protocol](https://www.w3.org/TR/webdriver/), which requires running a server
that acts as an intermediary between Selenium and the browser. For example,
there is [ChromeDriver](https://chromedriver.chromium.org/),
[geckodriver](https://github.com/mozilla/geckodriver) (for Firefox), and
[safaridriver](https://developer.apple.com/documentation/webkit/testing_with_webdriver_in_safari).
This requirement for a special server adds complexity.

Puppeteer, in contrast, controls Chrome using the nonstandard [DevTools
protocol](https://github.com/WICG/devtools-protocol/), so it talks to the
browser directly and provides additional functionality over Selenium like
[intercepting network
requests](https://pptr.dev/#?product=Puppeteer&version=master&show=api-pagesetrequestinterceptionvalue).

I’ve used Puppeteer for website testing and for [automating data entry in
TurboTax](https://www.dannyguo.com/blog/automating-turbotax-data-entry-with-puppeteer/),
and it was a relatively painless process in both cases.

## Playwright

We gained a new option when Microsoft released the [first public
version](https://github.com/microsoft/playwright/releases/tag/v0.10.0) of
Playwright on January 31, 2020.

If you compare the contributor pages for
[Playwright](https://github.com/microsoft/playwright/graphs/contributors) and
[Puppeteer](https://github.com/puppeteer/puppeteer/graphs/contributors), you’ll
notice the top two contributors to Puppeteer now work on Playwright. The
Puppeteer team essentially moved from Google to Microsoft and became the
Playwright team.

As a result, Playwright is very similar to Puppeteer in many respects. The API
methods are identical in most cases, and Playwright also bundles compatible
browsers by default.

Playwright’s biggest differentiating point is cross-browser support. It can
drive Chromium, WebKit (the browser engine for Safari), and Firefox.

![Playwright browser support](https://i.imgur.com/kzpnIp9.png)

You can check the status of the test suite at the [Is Playwright
Ready?](https://aslushnikov.github.io/isplaywrightready/) website.

However, the Playwright team’s approach to cross-browser support is
[controversial](https://twitter.com/gsnedders/status/1220331113777967105). They
ship Playwright with patched versions of WebKit and Firefox. Their
[response](https://github.com/microsoft/playwright#q-what-browser-versions-does-playwright-use)
is that they have only patched the WebKit and Firefox debugging protocols, not
the actual rendering engines.

Yet these are still changes that have not been developed in conjunction with the
WebKit and Firefox teams. While it’s possible that these changes might get
merged in eventually, that is not guaranteed. The Playwright team might have to
indefinitely maintain these changes, which could affect the long-term
reliability of Playwright’s cross-browser support.

Starting a new library also allowed the Playwright team to make the API more
ergonomic in ways that would be breaking changes in Puppeteer. For example,
Playwright’s `page.click` waits for the element to be available and visible by
default.

This doesn’t mean that Puppeteer won’t get similar improvements later in a new
major version. It just means that, for now, Playwright can be easier to use for
some situations.

The last noteworthy difference is that Playwright has a more powerful browser
context feature that lets you simulate multiple devices with a single browser
instance.

```js
const { chromium, devices } = require("playwright");

(async () => {
    const browser = await chromium.launch();

    for (const deviceName of ["iPhone 11", "iPad Pro 11"]) {
        const context = await browser.newContext({
            ...devices[deviceName]
        });
        const page = await context.newPage();
        await page.goto('http://github.com');
        await page.screenshot({
            path: `github-${deviceName.replace(/ /g, "-")}.png`
        });
    }

    await browser.close();
})();
```

Each browser context is isolated from other contexts in terms of cookies, local
storage, etc., and each context can also have multiple pages underneath it.

## Choosing a Library

Because Playwright and Puppeteer were largely developed by the same team and
have such similar APIs, migrating from Puppeteer to Playwright [isn't too
difficult](https://medium.com/@davert/puppeteer-to-playwright-migration-guide-6c86ea66e85e).
Yet you shouldn’t choose Playwright over Puppeteer just because Playwright is
newer — Playwright hasn’t reached a 1.0 release yet, so the API [may get
breaking changes](https://github.com/microsoft/playwright#q-is-playwright-ready)
before then.

I think the three main factors to consider are cross-browser support, long-term
library support, and your particular use case for browser automation.

For cross-browser support, it’s important to know that Puppeteer [recently
added](https://github.com/puppeteer/puppeteer/releases/tag/v2.1.0) experimental
support for driving Firefox and is able to do so without patching Firefox.

```js
const browser = await puppeteer.launch({product: "firefox"});
```

However, there [doesn’t
appear](https://github.com/puppeteer/puppeteer/issues/4887) to be any public
work on Puppeteer support for WebKit. Note that even third-party browsers on iOS
[are required](https://stackoverflow.com/a/48541760/1481479) to use WebKit as
their engine. So if testing for your iOS users is important, Playwright should
be appealing.

On the other hand, many teams have decided that testing more than one browser
(usually Chrome) isn’t worth the marginal benefit. Playwright could change this
calculus because it makes cross-browser support easier, but it’s still a
potential reason to just stick with Puppeteer.

You should also consider what library has better prospects for future
development. We don’t know for sure that Playwright’s approach of patching
Firefox and WebKit will work out in the long run.

A reason to be optimistic, however, is that the Playwright team gave us these
tools in the first place. The new Puppeteer team will have to show that it can
keep pace with the Playwright team in terms of improving their respective
libraries.

Regardless, I’m thankful that Puppeteer is still under active development and is
by no means an abandoned project just because the original developers moved on.
This is a benefit of being supported by the Chrome team.

Lastly, the decision depends on your use case. If you are doing something like
automating a website workflow or taking screenshots, cross-browser support may
not even matter to you.

It can also make sense to stick with Selenium or whatever you are currently
using if it is working well for you. The web development community has years of
accumulated wisdom and tooling around Selenium, and you don’t necessarily have
to abandon that just because there are new options.

For testing specifically, [Cypress](https://www.cypress.io/) has also become a
popular choice. It has a [unique approach](https://www.cypress.io/how-it-works)
of running in band with your website code, making tests more reliable. It
[recently
added](https://www.cypress.io/blog/2020/02/06/introducing-firefox-and-edge-support-in-cypress-4-0/)
beta Firefox and Edge support.

## Conclusion

Overall, I’m glad there is healthy competition in the browser automation space.
I hope they drive each other to become even better, making browser automation
progressively easier and more reliable.
