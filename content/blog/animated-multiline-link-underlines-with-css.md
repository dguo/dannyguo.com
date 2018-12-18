---
categories:
  - programming
date: "2018-12-18"
draft: true
tags:
  - css
title: Animated Multiline Link Underlines with CSS
---

One benefit of building my [personal website](https://www.dannyguo.com/) from
scratch instead of using a [theme](https://themes.gohugo.io/) made by someone
else is that I can start from the browser's defaults and gradually add my own
flourishes. I strive to keep my site lean, but making it personal is also kind
of the point. There is a spectrum of gratuitous touches between the spartan
pages of [Hacker News](https://news.ycombinator.com/) and
[Craigslist](https://newyork.craigslist.org/) on one end and the sensory
overload of [old MySpace](https://news.codecademy.com/myspace-coding-legacy/) on
the other.

I ran across a site that had fancy, animated underlines for links, and I wanted
to add a similar effect to my site. It was important to me to use a pure CSS
solution. For something as frivolous as this, I didn't want to add JavaScript
that has a risk of causing a performance issue or unexpected behavior (see
[scroll hijacking](https://envato.com/blog/scroll-hijacking/)).

Here's what the effect looks like now.

{{< video 2sKxENF >}}

## Implementation

The topic of drawing lines under text on the web can be [surprisingly
complicated](https://medium.design/crafting-link-underlines-on-medium-7c03a9274f9),
depending on how far you are willing to
[stray](https://css-tricks.com/styling-underlines-web/) from `text-decoration:
underline` and which details (like [clearing
descenders](https://stackoverflow.com/q/40008990/1481479)) you care about.

I investigated a few approaches:

* [Animating Link Underlines](http://tobiasahlin.com/blog/css-trick-animating-link-underlines/)
* [CSS Animated Underline Links](http://www.cssportal.com/blog/css-animated-underline-links/)

Both of them essentially remove any default `text-decoration` and add a
simulated border using
[pseudo-elements](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements).
The border is then animated by [CSS
transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions).
Unfortunately, these solutions have one drawback: they don't work properly if
the link spans more than one line. The underline only appears on the first line.

{{< video XWPhTQM >}}

I eventually found a [CodePen](https://codepen.io/shshaw/pen/pdyJBW) by
[Shaw](https://twitter.com/shshaw) that doesn't have this flaw. I modified the
CSS until I got to a solution that looks good to me.

{{< video 8pxxwkT >}}

The
[commit](https://github.com/dguo/dguo.github.io/commit/14e51391329163fa414ac55d77fdf6da521ab644)
ended up being satisfyingly small.

```css
a {
    background-image: linear-gradient(currentColor, currentColor);
    background-position: 0% 100%;
    background-repeat: no-repeat;
    background-size: 0% 2px;
    transition: background-size .3s;
}

a:hover {
    background-size: 100% 2px;
}
```

This method creates a [background
image](https://developer.mozilla.org/en-US/docs/Web/CSS/background-image) using
linear-gradient.

`currentColor`
[tells](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#currentColor_keyword)
the browser to use the element's computed `color` property.

`linear-gradient`
[creates](https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient) an
image.

`background-position`
[places](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position)
the image in the bottom left corner.

Turning off `background-repeat` prevents it from
[creating](https://developer.mozilla.org/en-US/docs/Web/CSS/background-repeat)
multiple instances of the image to fill the background.

`background-size` sets the image to take up zero horizontal space and 2 pixels
of vertical space.

`transition` [says](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)
to take 0.3 seconds to make a change to the `background-size`.

On hover, we set the width of the 100%, creating a full underline, and
transition takes care of the animation.

Here are some [other](https://speckyboy.com/underline-text-effects-css/)
animation underline effects for inspiration.
