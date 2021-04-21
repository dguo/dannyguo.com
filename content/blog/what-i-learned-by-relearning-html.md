---
categories:
  - education
date:
draft: true
tags:
  - html
title: What I Learned by Relearning Html
---

I've worked on websites for several years, both professionally and for side
projects. One day, I reflected on the fact that all of my web development
education has come from actually making websites. In most cases, I'd have a
specific problem, Google how to solve it, and learn something new in the
process.

I wondered what I was missing by never learning HTML in a comprehensive way.
Forget CSS and JavaScript. I'm just talking about raw HTML. It might seem
laughable to go back to such a basic aspect of web development after a decent
amount of experience, but it's easy to become overconfident with a skill just
because you know enough to do a few useful things.

So I set out to relearn HTML and discover my [unknown
unknowns](https://en.wikipedia.org/wiki/There_are_known_knowns).

## Experience

For context, I made my first website in middle school for a class project. We
learned basic HTML, and embedding a MP3 song felt like magic. But I didn't touch
web development again until college. I made a lightweight news aggregator called
[The Daily Lore](https://www.dailylore.com/) that's still running (I preserved
what it originally looked like [here](https://www.dailylore.com/legacy)).

Since then, I've worked on two websites professionally, one website for a
[nonprofit](https://sublimefund.org/), this personal website, and a few small
websites for side projects, such as [Make a
README](https://www.makeareadme.com/).

## Introduction to HTML5

Based just on that experience, I wouldn't consider myself to be a web
development expert, but I surely had far more knowledge than the typical student
for [Coursera](https://www.coursera.org/)'s [Introduction to
HTML5](https://www.coursera.org/learn/html) course. I started the course
expecting to know a lot of the content already, since it was designed for
complete beginners with no programming backgrounds.

As I went through the material, I did in fact know a lot of it already, but it
was still a good refresher for two points in particular: the importance of using
semantic elements and what to think about in terms of accessibility.

I've always had a bad habit of using generic `div`s to make what I need, rather
than semantic elements that represent specific content, like the
[header](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header) and
[footer](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer)
elements.

Accessibility was also something I had never considered in depth. I knew that
images should have `alt` descriptions, and that was about it. One of the key
points of the course is that using the appropriate semantic elements is
important to making a site more accessible.

For example, people who use screen readers can jump around using heading
elements (`h1` through `h6`), so it's important to use them and make sure
they're in the correct order. It's wrong to use them just to make text bigger.
They have meaning in terms of defining the layout of the content.

Instead of headings, we could use `p` tags and alter their font sizes with CSS
to create a website that looks identical, but it'd be less semantic and less
accessible. There is more to web development than making websites look the way
we want. It's important to make the content *mean* what we want as well.

Accessibility also involves more than just improving how websites work with
screen readers. We also need to consider font size, font style, color contrast,
people not being to recognize that audio is playing, people tabbing through a
page, a page having too much information, and animations that make the page
layout change as someone is trying to interact with it.

Improving accessibility also goes hand in hand with search engine optimization
and usability. Improve one, and you can improve all the others.

## Reading the Documentation

I have a friend who is probably the only person I know who has read the entire
[NFL rulebook](https://operations.nfl.com/the-rules) (the 2020 version is 87
pages long). Watching football with him was fun because he was so good at
understanding weird situations. I figured there was a similar opportunity for me
with HTML.

The strict equivalent would have been to read the [HTML
standard](https://html.spec.whatwg.org/) for every HTML element, but I decided
to read the [MDN
documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) for
every element instead. I read the entire page for each element, took notes, and
made [Anki](https://apps.ankiweb.net/) cards for the bits that I wanted to
commit to memory.

There were many deprecated elements that I only skimmed through, and I didn't
bother to take notes for those. But there were still dozens of standardized
elements and attributes that were totally new to me.

I didn't intend to come out of this experience as a master of HTML, and I still
have to apply what I've learned. But I find it useful just to be aware of what
is available. Even though I can't recall all the details about using a `picture`
element, I know it exists now, and I can always look up the relevant details
later during implementation. It's a categorical difference from not being aware
of it at all and using `img` everywhere because I don't know any better.

## What I Learned

The [address](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address)
element is for contact information in general, not just physical mailing
addresses.

There are a few elements that seem unnecessary. The
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

Some elements are difficult to style, such as the
[select](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select)
element.

Wikipedia is the perfect site for what HTML was really designed for: mostly
static documents. There are a few elements and attributes that are intended to
make things possible without needing JavaScript. For example, the
[details](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details)
element creates a widget that can toggled between an open and closed state.

Bootstrap's progress bar [doesn't
use](https://getbootstrap.com/docs/5.0/components/progress/) the HTML
[progress](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress)
element.

<!-- markdownlint-disable no-inline-html -->
> We don’t use the HTML5 <progress> element, ensuring you can stack progress
> bars, animate them, and place text labels over them.
<!-- markdownlint-enable no-inline-html -->

The [input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
element is one of the most complex elements because of how many input types and
attributes it supports.

## Conclusion

It was easy to feel confident with HTML after doing web development for several
years, but I found plenty of value in going back to learn it in a more rigorous
manner. While I still think learning by doing is highly effective, this
experience has made me want to go back and relearn other things with a bottom up
approach.
