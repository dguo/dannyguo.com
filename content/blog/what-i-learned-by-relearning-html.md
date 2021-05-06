---
categories:
  - programming
date: 2021-05-06
draft: true
tags:
  - html
title: What I Learned by Relearning Html
---

I've worked on websites for several years, both professionally and for side
projects. One day, I reflected on the fact that all of my web development
education had come from actually making websites. In most cases, I'd have a
specific problem, Google how to solve it, and learn something new in the
process.

I wondered what I was missing by never learning HTML in a comprehensive way.
Forget CSS and JavaScript. I'm just talking about raw HTML. It might seem
silly to go back to such a basic aspect of web development after a decent
amount of experience, but it's easy to become overconfident with a skill just
because you know enough to do a few useful things.

So I decided to relearn HTML and discover my [unknown
unknowns](https://en.wikipedia.org/wiki/There_are_known_knowns).

## Experience

For context, I made my first website in middle school for a class project. We
learned basic HTML, and embedding a MP3 song felt like magic. But I didn't touch
web development again until college. I made a lightweight news aggregator called
[The Daily Lore](https://www.dailylore.com/) that's still running (I preserved
the [original version](https://www.dailylore.com/legacy)).

Since then, I've worked on two websites professionally, one website for a
[nonprofit](https://sublimefund.org/), this personal website, and a few small
websites for side projects, such as [Make a
README](https://www.makeareadme.com/).

## Introduction to HTML5

I don't consider myself to be a web development expert based on just that
experience, but I surely had far more knowledge than the typical student for
[Coursera](https://www.coursera.org/)'s [Introduction to
HTML5](https://www.coursera.org/learn/html) course. I started the course
expecting to know a lot of the content already, since it was designed for
complete beginners with no programming backgrounds.

As I went through the material, I did in fact know a lot of it already, but it
was still a good refresher for two points in particular: the importance of using
semantic elements and what to think about in terms of accessibility.

I've always had a bad habit of using generic `<div>` elements to make what I
need, rather than semantic elements that represent specific content, like the
[header](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header) and
[footer](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer)
elements.

Accessibility was also something I had never considered in depth. I knew that
images should have `alt` descriptions, and that was about it. One of the
course's key points is that using the appropriate semantic elements is important
to making a site more accessible.

For example, people who use screen readers can jump around using
[heading](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements)
elements (`<h1>` through `<h6>`), so it's important to use them and make sure
they're in the correct order. It's wrong to use them just to make text bigger
because their purpose is to define the structure of the content, just like a
table of contents.

Instead of headings, we could use `<p>` elements and alter their font sizes with
CSS to create a website that looks identical, but it'd be less semantic and less
accessible. There is more to web development than making websites look the way
we want. It's important to make the content *mean* what we want as well.

Accessibility isn't just about improving how websites work with screen readers.
We should think about font size, font style, and color contrast for people who
have visual impairments or color blindness. We should consider that people who
have hearing loss may have a harder time recognizing that audio or video is
playing. We should make tab navigation work well for people who rely primarily
on the keyboard, perhaps because they have a difficult time using a mouse. When
we add animations, we should take care to avoid ones that make it more difficult
for someone to actually use the website, such as animations that change the page
layout in the middle of interactions. And we should consider when a page is
overloaded with too much information or too many elements, making it hard for
people to understand things or how to actually use the website.

It's easy to forget about accessibility, but we should strive to make websites
work well for as many people as possible. Accessibility also goes hand in hand
with usability and search engine optimization. The course points out that
improving one frequently means improving all the others.

## Reading the Documentation

I have a friend who is probably the only person I know who has read the entire
[NFL rulebook](https://operations.nfl.com/the-rules) (the 2020 version is 87
pages long). Watching football with him was fun because he was so good at
understanding nuances to the game and weird situations. I figured there was a
similar opportunity for me with HTML.

The strict equivalent would have been to read the [HTML
standard](https://html.spec.whatwg.org/) for every HTML element, but I decided
to read the [MDN
documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) for
every element instead since MDN has a lot of information about browser
compatibility and using elements in practice. I read the entire page for each
element, took notes, and made [Anki](https://apps.ankiweb.net/) cards for the
bits that I wanted to commit to memory.

There were many deprecated elements that I only skimmed through, and I didn't
bother to take notes for those, but dozens of standardized elements and
attributes were totally new to me.

I didn't intend to come out of this experience as a master of HTML, and I still
have to apply what I've learned (including to this website), but I find it
useful just to be aware of what is available. Even though I can't recall all the
details about using a
[picture](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture)
element, I know it exists now, and I can always look up the details later during
implementation. It's a categorical difference from not being aware of it at all
and using a plain `<img>` for all cases because I don't know any better.

## Observations

As I read the documentation, some things were particularly interesting to me,
and I had some observations.

The [address](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address)
element is for contact information in general, not just physical mailing
addresses.

The [definition](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dfn)
element represents the term that is being defined, rather than the definition
itself.

There is a whole set of
[ruby](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ruby) elements
that are primarily used to show the pronunciations of East Asian characters.

The [track](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track)
element provides a standard way to embed timed text tracks for video and audio.
I had never heard of the
[WebVTT](https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API) (Web Video
Text Tracks) format before.

The [map](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/map) element
seems like an anachronism, especially considering that it isn't responsive.

The [data](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/data)
element provides a machine-readable translation for content. This seems likes it
could help screen scraping, which some websites like [LinkedIn have been
actively trying to
prevent](https://www.theverge.com/2019/9/10/20859399/linkedin-hiq-data-scraping-cfaa-lawsuit-ninth-circuit-ruling).

There's subtlety when it comes to correctly choosing to use
[strong](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong)
versus [em](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em) versus
[i](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/i) versus
[u](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/u) versus
[b](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/b) versus
[mark](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/mark).

There are a few elements that seem redundant. The
[legend](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/legend)
element represents a caption for a
[fieldset](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset)
element, the
[caption](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption)
element represents a caption for a
[table](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table)
element, and the
[figcaption](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figcaption)
element represents a caption for a
[figure](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure)
element. I don't know why one element couldn't do the job for all three, since
the meaning could be derived from the parent element.

### The Future of HTML

As I read through the documentation, it kept making me consider the question of
how HTML should evolve, given that the browser keeps gaining more and more
functionality, to the point that it's becoming an operating system in itself.
There's even an experimental [API for connecting to Bluetooth
devices](https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API).

Wikipedia is the perfect website for what HTML was originally designed for:
static documents that are connected through hyperlinks. But now we use the
browser to deliver full on applications, like [Figma](https://www.figma.com/).

HTML now has some
elements and attributes that are intended to make interactivity possible without
JavaScript. For example, the
[details](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details)
element creates a widget that can be toggled between open and closed states.

The [input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
element is one of the most complex elements because it supports so many
combinations of input types and attributes. Browser support is correspondingly
patchy.

Some elements are also difficult to style, such as the
[select](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select)
element.

Website developers may want to rely on standard functionality instead of using a
library or implementing a feature themselves, but then they have to worry about
it not working well in certain browsers or stylistic inconsistency with the
rest of the website.

I'm interested to see if [Web
Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components) become
more popular. If they do, the situation could be like a programming language,
where different languages take difference stances on the question of how much
functionality should be included in the standard library rather than relying on
third party libraries. [GitHub](https://github.com) has [started to use Web
Components](https://github.blog/2021-05-04-how-we-use-web-components-at-github/),
and they publish their components to
[WebComponents.org](https://www.webcomponents.org/).

Bootstrap's progress bar [doesn't
use](https://getbootstrap.com/docs/5.0/components/progress/) the HTML
[progress](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress)
element.

<!-- markdownlint-disable no-inline-html -->
> We don’t use the HTML5 <progress> element, ensuring you can stack progress
> bars, animate them, and place text labels over them.
<!-- markdownlint-enable no-inline-html -->

Tables can be pretty sophisticated. But there's still no built-in support for
sorting and pagination.

## Conclusion

It was easy to feel confident with HTML after doing web development for several
years, but I found plenty of value in going back to learn it in a more rigorous
manner. While I still think learning by doing is highly effective, this
experience has made me want to go back and relearn other things with a bottom up
approach.
