---
layout: ../../layouts/BlogPostLayout.astro
categories:
  - programming
date: "2024-03-10"
unlisted: true
title: The Power of the Link
---

I love [links](https://en.wikipedia.org/wiki/Hyperlink). They are such a
fundamental part of the Internet that I think it's easy to forget how powerful
they are.

They show up twice in a typical [URL](https://en.wikipedia.org/wiki/URL),
through the `https` and the `www`. The `https` stands for [Hypertext Transfer
Protocol Secure](https://en.wikipedia.org/wiki/HTTPS), and the `www` stands for
[World Wide Web](https://en.wikipedia.org/wiki/World_Wide_Web). A web requires
links. And what is [hypertext](https://en.wikipedia.org/wiki/Hypertext)? Text
documents that are connected to each other through links.

`https` and `www` are so critical that we taken them for granted now. Chrome
has been [hiding them from the address
bar](https://www.bleepingcomputer.com/news/google/google-chrome-hides-www-and-https-in-the-address-bar-again/)
since 2019, and many websites [don't
bother](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Choosing_between_www_and_non-www_URLs)
with the `www` in their URLs anymore.

Another way to think about the importance of the link is ask what are the most
important [HTML](https://en.wikipedia.org/wiki/HTML) elements? Most lists [would
probably](https://www.quora.com/What-are-the-most-important-HTML-elements)
include [html](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html),
[head](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head), and
[body](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body). But I
would put [anchor](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)
(not to be confused with the [link
element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link)) at the
top of the list. Because if we stripped the Internet down to just plain text
and links, hypertext in its purest form, it would still be tremendously useful
and interesting.

While `html`, `head`, and `body` provide structure, they aren't necessary. If
you don't provide them, a browser will still render text with links. And even
the [HTML5](https://en.wikipedia.org/wiki/HTML5) specification [considers them
to be optional](https://stackoverflow.com/a/25749523/1481479) tags. But [Tim
Berners-Lee](https://en.wikipedia.org/wiki/Tim_Berners-Lee)'s World Wide Web
requires `anchor`. It's the element that elevates text into hypertext.

## Power

Links are powerful because they give us a cheap way to reference something. It
almost feels like cheating. With a simple link, you can nudge someone towards an
unfathomably deep [rabbit
hole](https://en.wikipedia.org/wiki/Down_the_rabbit_hole). You've already
encountered multiple links in this post. Have you opened any? Maybe in separate
tabs to read afterwards? Have you opened any further links from the linked
pages?

That experience is what makes me appreciate good links as much as the immediate
content of a website, like a witty phrase or an interesting insight. But a link
*is* content.

Links aren't just about making things more convenient for the reader. If I
mention a concept and don't link to it, readers could look it up on their own
for more details. But maybe I know of a particularly good explanation. Or maybe
I did a search myself and decided that one result was better than the others.
Choosing the link target allows me to implicitly provide a recommendation (a
core aspect of Google's original
[PageRank](https://en.wikipedia.org/wiki/PageRank) algorithm). It allows me to
express my judgment and taste. Just like the text itself.

I also appreciate that the recommendation is subtle. Readers aren't forced to
click a link. They have the choice to skip it immediately or maybe hover over it
(on desktop at least) and decide if the full URL looks interesting.

## Adding Links

I add links liberally. They aren't just for websites. We can and should use them
in emails, [Slack](https://slack.com/) messages,
[Jira](https://www.atlassian.com/software/jira) tickets
([unfortunately](https://ifuckinghatejira.com)), etc.

At work (software engineering for me), they are an easy way to add context. For
example, whenever I investigate a customer issue, I try to provide a link to the
customer's profile in our admin dashboard. It only takes me a couple of seconds.
But if someone else needs to investigate, that link could save minutes of their
time. And that someone else could be my future self, so it can be selfishly
helpful.

In my blog posts, I link most proper nouns, at least the first time that they
appear. I think about what target would be most useful. I tend to use
[Wikipedia](https://www.wikipedia.org/) articles, since Wikipedia provides great
overviews, and I also trust Wikipedia links to not suffer from [link
rot](https://en.wikipedia.org/wiki/Link_rot).

## Parallels

The power of the link has parallels to other concepts. Links remind me of
[pointers](https://en.wikipedia.org/wiki/Pointer_(computer_programming)) in
[C](https://en.wikipedia.org/wiki/C_(programming_language)). Like a hyperlink, a
pointer is simple in theory: it's just a reference to a memory address. But it
enables so much in terms of efficient memory management and data structures.
But [with great power comes great
responsibility](https://en.wikipedia.org/wiki/With_great_power_comes_great_responsibility).
Being able to manipulate memory through pointers can lead to [segmentation
faults](https://en.wikipedia.org/wiki/Segmentation_fault), [memory
leaks](https://en.wikipedia.org/wiki/Memory_leak), and security vulnerabilities
(e.g. [Heartbleed](https://heartbleed.com/)).

Similarly, links remind me of [financial
derivatives](https://www.investopedia.com/terms/d/derivative.asp), financial
instruments that don't have intrinsic value and depend on the value of something
else. [Warren Buffet](https://en.wikipedia.org/wiki/Warren_Buffett) once
[referred](https://www.investopedia.com/terms/d/derivativestimebomb.asp) to them
as "financial weapons of mass destruction," a metaphor that became particularly
relevant when the [2007-2008 financial
crisis](https://en.wikipedia.org/wiki/2007%E2%80%932008_financial_crisis) hit
([Selena Gomez](https://en.wikipedia.org/wiki/Selena_Gomez) and [Richard
Thaler](https://en.wikipedia.org/wiki/Richard_Thaler) provide a [fun, brief
explanation](https://www.youtube.com/watch?v=Pxr_FzpPM2Q) in [The Big
Short](https://en.wikipedia.org/wiki/The_Big_Short_(film))).

While a bad link isn't as terrible as a crashing program or an economic
meltdown, I still try to make my link curation as good as possible [for the sake
of the audience](https://www.dannyguo.com/blog/great-writing).
