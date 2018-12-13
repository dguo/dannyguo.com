---
categories:
  - programming
date: "2018-12-11"
draft: true
tags:
  - css
title: Animated Multiline Link Underlines with CSS
---

One of the fun parts of building my [personal
website](https://www.dannyguo.com/) from scratch instead of using a
[theme](https://themes.gohugo.io/) made by someone else is that I can start from
the browser's defaults and gradually add my own flourishes. I strive to keep my
site lean, but making it personal is also kind of the point. There is a spectrum
of gratuitous touches between the spartan pages of [Hacker
News](https://news.ycombinator.com/) and
[Craigslist](https://newyork.craigslist.org/) on one end and the sensory
overload of [old MySpace](https://news.codecademy.com/myspace-coding-legacy/) on
the other.

I ran across a site that has fancy, animated underlines for links, and I wanted
to add a similar effect to my site. It was important to me to use a pure CSS
solution. Link underlines, especially on a blog, shouldn't require JavaScript or
run any risk of causing a performance issue or unexpected behavior (see [scroll
hijacking](https://envato.com/blog/scroll-hijacking/)).

Here's what the effect looks like now.

## Implementation

The topic of drawing lines under text on the web can be [surprisingly
complicated](https://medium.design/crafting-link-underlines-on-medium-7c03a9274f9),
depending on how far you are willing to
[stray](https://css-tricks.com/styling-underlines-web/) from `text-decoration:
underline`.

I investigated a few approaches:

* [Animating Link Underlines](http://tobiasahlin.com/blog/css-trick-animating-link-underlines/)
* [CSS Animated Underline Links](http://www.cssportal.com/blog/css-animated-underline-links/)

Unfortunately, these solutions have one drawback: they don't work properly if
the link spans more than one line. The underline would only show up for the
first line. I eventually found a [CodePen](https://codepen.io/shshaw/pen/pdyJBW)
by [Shaw](https://twitter.com/shshaw) that doesn't have this flaw. I stripped
away the CSS until I got to a solution that worked for me. The
[commit](https://github.com/dguo/dguo.github.io/commit/14e51391329163fa414ac55d77fdf6da521ab644)
ended up being pretty small.

```css
a {
    background-image: linear-gradient(currentColor, currentColor);
    background-position: 0 100%;
    background-repeat: no-repeat;
    background-size: 0% 2px;
    transition: background-size .3s;
}

a:hover {
    background-size: 100% 2px;
}
```

`currentColor`
[tells](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#currentColor_keyword)
the browser to use the element's computed `color` property.

`linear-gradient`
[creates](https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient) an
image.

Here are some [other](https://speckyboy.com/underline-text-effects-css/)
animation effects for inspiration.
