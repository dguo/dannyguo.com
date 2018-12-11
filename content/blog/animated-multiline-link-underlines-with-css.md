---
categories:
  - programming
date: "2018-12-11"
draft: true
tags:
  - css
title: Animated Multiline Link Underlines with CSS
---

One of the fun parts of building my personal website from scratch instead of
using someone else's theme is that I can start from the browser's defaults and
throw in my own flourishes for fun.

I ran across an example of a website that does fancy things with underlining
links on hover, and I wanted to add it my site.

Like many things in the world, the topic of drawing lines under text on the web
can be [surprisingly
complicated](https://medium.design/crafting-link-underlines-on-medium-7c03a9274f9),
depending on how far away you want to
[stray](https://css-tricks.com/styling-underlines-web/) from `text-decoration:
underline`.

The
[commit](https://github.com/dguo/dguo.github.io/commit/14e51391329163fa414ac55d77fdf6da521ab644)
ended up being pretty small.

It was important to me to have a pure CSS solution. I didn't want to use any
JavaScript to do it.

I investigated a number of approaches.

* [Animating Link Underlines](http://tobiasahlin.com/blog/css-trick-animating-link-underlines/)
* [CSS Animated Underline Links](http://www.cssportal.com/blog/css-animated-underline-links/)

Unfortunately, these solutions have one small drawback: they don't work properly
if the link spans more than one line. The underline would only show up for the
first line. I eventually found a [CodePen](https://codepen.io/shshaw/pen/pdyJBW)
that doesn't have this flaw.

I stripped away the CSS until I got to a solution that worked for me.

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
