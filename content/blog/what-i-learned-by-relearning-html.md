---
categories:
  - education
date:
draft: true
tags:
  - html
title: What I Learned by Relearning Html
---

I've been making websites for close to a decade now, both professionally and for
side projects. One day, I reflected on the fact that all of my web development
education has come in the middle of actually making websites. In most cases, I'd
have a specific problem, Google how to solve it, and learn something new in the
process.

I wondered what I was missing by never learning HTML in a comprehensive way.
Forget CSS and JavaScript. I'm just talking about raw HTML. It might seem
laughable to go back to such a basic aspect of web development after a
nontrivial amount of experience, but it's easy to develop a misleading amount of
confidence with a skill just because you know enough to do a few useful things.

So I set out to relearn HTML and discover my [unknown
unknowns](https://en.wikipedia.org/wiki/There_are_known_knowns).

## Experience

For context, I made my first website in middle school for a class project. We
learned basic HTML, and embedding a MP3 song felt like magic. But I didn't touch
web development again until college. I made a lightweight news aggregator called
[The Daily Lore](https://www.dailylore.com/) that's still running (I preserved
what it originally looked like [here](https://www.dailylore.com/legacy)).

Since then, I've worked on two websites professionally, one website for a
[nonprofit](https://sublimefund.org/), and a few tiny websites for side
projects.

## Introduction to HTML5

Based just on that experience, I wouldn't consider myself to be a web
development expert, but I surely had far more experience than the typical
student for [Coursera](https://www.coursera.org/)'s [Introduction to
HTML5](https://www.coursera.org/learn/html) course. I started the course
expecting to know a lot of the content already, since the course was designed
for complete beginners with no programming backgrounds.

As I went through the material, I did in fact know a lot of it already, but I
was surprised by how much was still new to me. I knew enough to make a
functional website, but the course reminded me about the importance of using
semantic elements and about techniques to improve accessibility, things I had
never paid much attention to.

Instead of semantic elements, I tend to use plenty of generic divs to make what
I need. The course taught me that in many cases, there are specific elements to
use to represent specific content.

Accessibility was also something I had never considered in depth. I knew that
images should have `alt` descriptions, and that was about it. One of the key
points of the course was that using the apprpriate semantic elements is an
important aspect of making a site more accessible.

For example, people who use screen readers can jump around using heading elements
(`h1` through `h6`), so it's important to use them and make sure they're in the
correct order. It's wrong to use them just to make text bigger. They have
meaning in defining the layout of the content.

You could accomplish the same thing visually by using `p` tags and using CSS to
make higher elements larger font sizes. It could be identical from a visual
perspective. But it'd be much less semantic and accessible as a result.

There is a lot more to HTML and web development than making things look the way
we want. It's important to make them mean what we want as well.

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

There were a lot of deprecated elements that I only skimmed through, and I
didn't bother to take notes for those. But there were still dozens of standard
elements and attributes that were totally new to me.

I didn't intend to come out of this experience as a master of HTML. I still have
to apply what I've learned to actual websites. But I find it useful just to be
aware of what is out there. Even though I can't recall all the details about
using a `picture` element, I know it exists now, I can always look up the
relevant details later during implementation. It's a categorical difference from
not being aware of it at all and using `img` everywhere because I don't know any
better.

## What I Learned

The [address](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address)
element is for contact information, not just physical, mailing addresses.

## Conclusion

It was easy to feel confident about HTML after doing web development for several
years, but there was tremendous value in going back to learn it in a more
rigorous manner.

While I still think learning by doing is highly effective, this experience has
made me want to go back and learn other things with a bottom up approach.
