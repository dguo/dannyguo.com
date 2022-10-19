---
layout: ../../layouts/BlogPostLayout.astro
canonicalUrl: https://blog.logrocket.com/the-history-and-legacy-of-jquery/
categories:
  - programming
date: "2019-09-13"
tags:
  - jquery
title: The History and Legacy of jQuery
---

*This post was originally written for the [LogRocket
blog](https://blog.logrocket.com/the-history-and-legacy-of-jquery/).*

[jQuery](https://jquery.com/) is the [most widely
used](https://trends.builtwith.com/javascript/jQuery) JavaScript library in the
world. The web development community embraced it in the late 2000s, creating a
rich ecosystem of websites, plugins, and frameworks that use jQuery under the
hood.

But in the past several years, jQuery’s status as the number one tool for web
development has diminished. Let’s take a look at why jQuery became popular, why
it has somewhat fallen out of favor, and when it would still be a good choice
for a modern website.

## A brief history of jQuery

[John Resig](https://johnresig.com/) developed the initial version of jQuery in
2005 and [released it](https://johnresig.com/blog/barcampnyc-wrap-up/) in 2006
at an event called BarCampNYC. On the [original jQuery
website](https://web.archive.org/web/20060203025710/http://jquery.com/), he
wrote:

> jQuery is a Javascript [sic] library that takes this motto to heart: **Writing
> Javascript code should be fun.** jQuery acheives [sic] this goal by taking
> common, repetitive tasks, stripping out all the unnecessary markup, and
> leaving them short, smart and understandable.

jQuery had two main value propositions. The first was to provide an ergonomic
API for manipulating a web page. In particular, it provided powerful methods for
selecting elements. Beyond selecting elements just based on their ids or
classes, jQuery allowed for complex expressions, like selecting elements based
on their relationship with other elements:

```js
// Select every item within the list of people within the contacts element
$('#contacts ul.people li');
```

The selection engine was eventually extracted into its own library, called
[Sizzle](https://sizzlejs.com/).

The second selling point was that it abstracted away differences between
browsers. Back then, it was hard to write code that would work robustly on all
browsers.

A lack of standardization meant that developers had to account for many
different browser behaviors and edge cases. Just take a look at [this early
jQuery source
code](https://github.com/daniellmb/jquery-archive/blob/master/jquery.2006-07-01.js),
and search for `jQuery.browser` to see some examples. Here’s one:

```js
// If Mozilla is used
if ( jQuery.browser == "mozilla" || jQuery.browser == "opera" ) {
        // Use the handy event callback
        jQuery.event.add( document, "DOMContentLoaded", jQuery.ready );

// If IE is used, use the excellent hack by Matthias Miller
// http://www.outofhanwell.com/blog/index.php?title=the_window_onload_problem_revisited
} else if ( jQuery.browser == "msie" ) {

        // Only works if you document.write() it
        document.write("<scr" + "ipt id=__ie_init defer=true " +
                "src=javascript:void(0)><\/script>");

        // Use the defer script hack
        var script = document.getElementById("__ie_init");
        script.onreadystatechange = function() {
                if ( this.readyState == "complete" )
                        jQuery.ready();
        };

        // Clear from memory
        script = null;

// If Safari  is used
} else if ( jQuery.browser == "safari" ) {
        // Continually check to see if the document.readyState is valid
        jQuery.safariTimer = setInterval(function(){
                // loaded and complete are both valid states
                if ( document.readyState == "loaded" ||
                        document.readyState == "complete" ) {

                        // If either one are found, remove the timer
                        clearInterval( jQuery.safariTimer );
                        jQuery.safariTimer = null;

                        // and execute any waiting functions
                        jQuery.ready();
                }
        }, 10);
}
```

By using jQuery, developers could leave it up to the jQuery team to deal with
these pitfalls.

Later on, jQuery made it easy to adopt more sophisticated techniques, like
animations and [Ajax](https://en.wikipedia.org/wiki/Ajax_(programming)). jQuery
virtually became a standard dependency for websites. It continues to power an
enormous part of the internet today. W3Techs
[estimates](https://w3techs.com/technologies/details/js-jquery/all/all) that
about 74 percent of all websites use jQuery.

The stewardship of jQuery also became more formal. In
[2011](https://blog.jquery.com/2011/11/18/getting-board-of-jquery/), the jQuery
team formally created the jQuery Board. In
[2012](https://blog.jquery.com/2012/03/06/announcing-the-jquery-foundation/),
the jQuery Board formed the jQuery Foundation.

In
[2015](https://blog.jquery.com/2015/09/01/jquery-foundation-and-dojo-foundation-to-merge/),
the jQuery Foundation merged with the Dojo Foundation to form the JS Foundation,
which then merged with the Node.js Foundation in
[2019](https://medium.com/@nodejs/introducing-the-openjs-foundation-the-next-phase-of-javascript-ecosystem-growth-d4911b42664f)
to form the [OpenJS Foundation](https://openjsf.org/), with jQuery as one of its
“[impact projects](https://openjsf.org/projects/#impact).”

## Changing circumstances

However, jQuery has [declined in
popularity](https://trends.google.com/trends/explore/TIMESERIES/1564319400?hl=en-US&tz=240&date=all&geo=US&q=jquery&sni=3)
in recent years. GitHub [removed jQuery from their website’s front
end](https://github.blog/2018-09-06-removing-jquery-from-github-frontend/), and
Bootstrap v5 will [drop jQuery](https://github.com/twbs/bootstrap/pull/23586)
because it is Bootstrap’s “[largest client-side dependency for regular
JavaScript](https://blog.getbootstrap.com/2019/02/11/bootstrap-4-3-0/)” (it’s
currently 30KB, minified and gzipped). Several trends in web development have
weakened jQuery’s standing as a must-use tool.

### Browsers

Browser differences and limitations have become less important for several
reasons. The first is that standardization has improved. The major browser
vendors (Apple, Google, Microsoft, and Mozilla) collaborate on [web
standards](https://spec.whatwg.org/) through the [Web Hypertext Application
Technology Working Group](https://whatwg.org/).

While browsers still differ in significant ways, the vendors at least have a
method to find and develop common ground rather than waging non-stop [war with
each other](https://thehistoryoftheweb.com/browser-wars/). Accordingly, browser
APIs have become more capable. For example, the [Fetch
API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) can replace
jQuery’s Ajax functions:

```js
// jQuery
$.getJSON('https://api.com/songs.json')
    .done(function (songs) {
        console.log(songs);
    })

// native
fetch('https://api.com/songs.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (songs) {
        console.log(songs);
    });
```

The
[querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
and
[querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)
methods replicate jQuery’s selection capabilities:

```js
// jQuery
const fooDivs = $('.foo div');

// native
const fooDivs = document.querySelectorAll('.foo div');
```

Manipulating element classes can be done with
[classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
now:

```js
// jQuery
$('#warning').toggleClass('visible');

// native
document.querySelector('#warning').classList.toggle('visible');
```

The [You Might Not Need jQuery](http://youmightnotneedjquery.com/) website lists
several more cases where jQuery code can be replaced with native code. Some
developers always reach for jQuery because they just aren’t aware that these
APIs are available, but as developers learn about them, they become less reliant
on jQuery.

Using native capabilities can also improve the performance of a web page. Many
[jQuery animation effects](https://api.jquery.com/category/effects/) can now be
implemented [much more
efficiently](https://dev.opera.com/articles/css3-vs-jquery-animations/) with
CSS.

The second reason is that browsers are updated more quickly than in the past.
Most browsers now have an
[evergreen](https://www.techopedia.com/definition/31094/evergreen-browser)
update strategy, with Apple’s Safari being the main exception. They can update
themselves silently without user intervention and aren’t tied to operating
system updates.

This means that new browser functionalities and bug fixes get adopted by users
more quickly, and developers don’t have to wait as long for [Can I
Use](https://caniuse.com/) usage percentages to reach acceptable levels. They
can confidently use features and APIs without loading jQuery or
[polyfills](https://en.wikipedia.org/wiki/Polyfill_(programming)).

The third reason is that Internet Explorer is getting closer to being fully
irrelevant. IE has long been the bane of web developers everywhere. IE-specific
bugs were notoriously common, and because IE was the dominant browser of the
2000s and lacked evergreen updates, older versions stubbornly hung around.

Microsoft sped up IE’s deprecation, [ending
support](https://www.microsoft.com/en-us/microsoft-365/windows/end-of-ie-support)
for IE 10 and below in 2016, leaving IE 11 as the last supported version. It is
becoming more common for web developers to have the luxury of ignoring IE
compatibility.

Even jQuery dropped support for IE 8 and below with the release of [version
2.0](https://blog.jquery.com/2013/04/18/jquery-2-0-released/) in 2013. While
some special circumstances like legacy websites still require IE, these
situations are becoming rarer.

### New frameworks

A plethora of web frameworks have emerged since jQuery’s release, with some of
the current front-runners being [React](https://reactjs.org/),
[Angular](https://angular.io/), and [Vue](https://vuejs.org/). These frameworks
have two significant advantages over jQuery.

The first is that they make it easy to break up a UI into components. They are
designed to handle rendering a page as well as updating it. jQuery is typically
only used for updating a page, relying on the server to provide the initial
page.

React, Angular, and Vue components, on the other hand, allow for a tight
coupling between HTML, code, and even CSS. In the same way that we might break a
codebase down into multiple, self-contained functions and classes, breaking a UI
down into reusable components makes it easier to build and maintain a complex
website.

The second advantage is that the newer frameworks encourage the declarative
paradigm, in which the developer describes what the UI should be like and leaves
it up to the framework to make the changes necessary to get there. This approach
is in contrast to the imperative approach that is characterized by jQuery code.

With jQuery, you explicitly write the steps to make any changes. With a
declarative framework, you say “based on this data, this is what the UI should
be like.” This can significantly reduce the amount of mental bookkeeping that
you have to do to write bug-free code.

Developers have embraced these new approaches to building websites, reducing
jQuery’s relevance.

## When to use jQuery

So when *should* we choose to use jQuery?

If the project in question is expected to grow in complexity, it’s best to start
with a different library or framework that will allow you to sanely deal with
that complexity, such as by breaking the UI into components. Using jQuery for
such a website can be fine at first, but it can quickly evolve into spaghetti
code, where you aren't sure what code affects what parts of the page.

I've dealt with this before, and the situation produces a feeling of uneasiness
whenever you want to make a change. It’s hard to be sure that you aren’t
breaking anything because jQuery selectors depend on HTML structure that is
produced by the server.

On the other end of the spectrum, you have simple websites that only need a
small amount of interactivity or dynamic content. For these cases, I would still
default to not using jQuery because we can do much more now with native APIs.

Even if I did need something more powerful, I would look for a specific library
for the use case, such as [axios](https://github.com/axios/axios) for Ajax or
[Animate.css](https://daneden.github.io/animate.css/) for animations. Using
libraries like these is generally more lightweight than loading the entirety of
jQuery just for a bit of its functionality.

I think the best justification for using jQuery is that it provides
comprehensive functionality for powering the front end of a website. Instead of
having to learn all the various native APIs or special-purpose libraries, you
can read just the jQuery documentation and immediately be productive.

Its imperative approach doesn’t scale well, but it’s also more straightforward
to learn than the declarative approach of other libraries. For a website with a
clearly limited scope, it’s reasonable to drop in jQuery and move on; it doesn’t
need any sort of sophisticated build or compilation process.

jQuery, then, is a good choice when you are reasonably confident the website
won’t become much more complicated, and you don’t want to bother with native
functionality, which can certainly be more verbose than the equivalent jQuery
code.

Another use case is when you must support old versions of IE. In that case,
jQuery serves as well as it did when IE was the dominant browser.

## Looking forward

jQuery isn’t going away anytime soon. It’s under [active
development](https://github.com/jquery/jquery) and plenty of developers prefer
using its API even when native methods are available.

It has helped a generation of developers make websites that work on every
browser. While it has been supplanted in many respects by new libraries,
frameworks, and paradigms, jQuery played a huge, positive role in making the web
what it is today.

Barring a significant change in jQuery functionality, it seems likely that
jQuery will start to experience a slow but steady decline in usage in the next
several years.  New websites tend to be built from the beginning with more
modern frameworks, and the good use cases for jQuery are becoming rarer.

Some people are unhappy with the rate of churn in web development tooling, but
to me, that is a sign of rapid progress. jQuery gave us better ways to do
things. Its successors have done the same.
